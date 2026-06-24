import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, company, details } = await req.json();

  if (!name || !email || !details) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json(
      { error: "Mail service not configured" },
      { status: 500 }
    );
  }

  const html = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F7FAFC; padding: 32px; border-radius: 12px;">
      <div style="background: #071B2A; border-radius: 10px; padding: 28px 32px; margin-bottom: 28px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom: 8px;">
          <span style="font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: 3px;">CETATECK</span>
        </div>
        <p style="color: #2BA6B1; font-size: 13px; margin: 0; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">New Project Enquiry</p>
      </div>

      <div style="background: #ffffff; border-radius: 10px; padding: 28px 32px; border: 1px solid #E2EBF0; margin-bottom: 16px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F7FAFC; width: 130px; vertical-align: top;">
              <span style="font-size: 11px; font-weight: 700; color: #5B6773; text-transform: uppercase; letter-spacing: 1px;">Name</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F7FAFC; vertical-align: top;">
              <span style="font-size: 14px; color: #071B2A; font-weight: 600;">${name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F7FAFC; vertical-align: top;">
              <span style="font-size: 11px; font-weight: 700; color: #5B6773; text-transform: uppercase; letter-spacing: 1px;">Email</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F7FAFC; vertical-align: top;">
              <a href="mailto:${email}" style="font-size: 14px; color: #2BA6B1; font-weight: 600;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F7FAFC; vertical-align: top;">
              <span style="font-size: 11px; font-weight: 700; color: #5B6773; text-transform: uppercase; letter-spacing: 1px;">Company</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F7FAFC; vertical-align: top;">
              <span style="font-size: 14px; color: #071B2A; font-weight: 600;">${company || "—"}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 0 0; vertical-align: top;">
              <span style="font-size: 11px; font-weight: 700; color: #5B6773; text-transform: uppercase; letter-spacing: 1px;">Project Details</span>
            </td>
            <td style="padding: 14px 0 0; vertical-align: top;">
              <p style="font-size: 14px; color: #071B2A; line-height: 1.7; margin: 0; white-space: pre-wrap;">${details}</p>
            </td>
          </tr>
        </table>
      </div>

      <p style="font-size: 11px; color: #5B6773; text-align: center; margin: 0;">
        Cetateck — Cloud Engineering & Enterprise Automation
      </p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Cetateck <noreply@cetateck.com>",
      to: ["support@cetateck.com"],
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` @ ${company}` : ""}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nProject Details:\n${details}`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
