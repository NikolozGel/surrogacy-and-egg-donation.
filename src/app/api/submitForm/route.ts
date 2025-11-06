import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface IData {
  name: string;
  email: string;
  phone: string;
  text: string;
  country: string;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // ✅ Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();
    const db = client.db("suroggacy-and-egg-donation");
    const collection = db.collection("surrogacy");
    await collection.insertOne(data);

    // ✅ Send emails asynchronously (don’t block the response)
    sendEmails(data).catch(console.error);

    // ✅ Return response immediately
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

// 🔹 helper function for sending emails
async function sendEmails(data: IData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nikolozgelenidze9@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailForMe = {
    from: `${data.name} <${data.email}>`,
    to: "nikolozgelenidze9@gmail.com",
    subject: `Message from ${data.email}`,
    text: `Name: ${data.name}\n Text: ${data.text}\nCountry: ${data.country}\nPhone: ${data.phone}`,
  };

  const mailForUser = {
    from: "nikolozgelenidze9@gmail.com",
    to: data.email,
    subject: "Thank you for your response",
    text: `Hi ${data.name}, thanks for your message. We'll contact you as soon as possible.`,
  };

  await Promise.all([
    transporter.sendMail(mailForMe),
    transporter.sendMail(mailForUser),
  ]);
}
