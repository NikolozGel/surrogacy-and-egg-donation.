// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/mongodb";
// import nodemailer from "nodemailer";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(30), // სურვილისათბის: .regex(/^\+?[0-9\-()\s]+$/)
  text: z.string().min(3).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection("contacts");

    // ერთჯერადი ინდექსი email-ზე (არ აფეთქდება თუ უკვე არსებობს)
    await collection.createIndex({ email: 1 }, { name: "email_idx" });

    const doc = {
      ...parsed.data,
      createdAt: new Date(),
      userAgent: req.headers.get("user-agent") ?? null,
      ip: req.headers.get("x-forwarded-for") ?? null, // სურვილით ამოიღე/ანონიმიზაცია
    };

    const result = await collection.insertOne(doc);

    return NextResponse.json(
      { ok: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
