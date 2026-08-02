import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY environment variable is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const destinationEmail = process.env.DESTINATION_EMAIL || "ahmedalhofy42@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: fromEmail,
      to: destinationEmail,
      subject: `[Portfolio Contact] ${subject || "New Message from " + name}`,
      replyTo: email,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0d9488; margin-top: 0; font-size: 20px;">New Portfolio Message</h2>
          <div style="margin-bottom: 16px;">
            <p style="margin: 4px 0; color: #4b5563;"><strong>From:</strong> ${name}</p>
            <p style="margin: 4px 0; color: #4b5563;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0d9488;">${email}</a></p>
            <p style="margin: 4px 0; color: #4b5563;"><strong>Subject:</strong> ${subject || "No Subject"}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    if (response.error) {
      return NextResponse.json({ error: response.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Something went wrong while sending the email." },
      { status: 500 }
    );
  }
}
