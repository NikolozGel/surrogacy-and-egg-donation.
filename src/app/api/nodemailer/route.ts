import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nikolozgelenidze9@gmail.com",
        pass: process.env.PASSWORD,
      },
    });
    const mailForMe = {
      from: `${body.name}<${body.email}>`,
      to: "nikolozgelenidze9@gmail.com",
      subject: `Mail from ${body.email}`,
      text: `Text: ${body.text}\nCountry: ${body.country}\nPhone: ${body.phone}`,
    };
    await transporter.sendMail(mailForMe);

    const mailForUser = {
      from: `nikolozgelenidze9@gmail.com`,
      to: `${body.email}`,
      subject: `Thank you for your Response`,
      text: `Hi ${body.name}, thanks for your Response. We'll contact you as soon as possible.`,
    };

    await transporter.sendMail(mailForUser);

    return Response.json({
      message: "Email Sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({
      error: "Error sending email",
    });
  }
}
