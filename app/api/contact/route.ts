import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please fill in all required fields correctly." },
      { status: 400 }
    );
  }

  const { name, company, email, message } = parsed.data;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Vymedica Website <onboarding@resend.dev>",
    to: ["haiyany@gmila.com"],
    cc: ["dweave@gmail.com"],
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    text: [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    // TEMPORARY debug: surface the real Resend error to diagnose delivery setup.
    return NextResponse.json(
      { error: "Failed to send message. Please try again later.", debug: error },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
