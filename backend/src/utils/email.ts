import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendWelcomeEmail(to: string, name: string) {
    try {
        await resend.emails.send({
            from: "Atlas <noreply@getatlas.tech>",
            to,
            subject: "Welcome to Atlas",
            html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f9fafb; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            
            <h2 style="margin: 0 0 20px 0; font-size: 22px; color: #111827;">
              Welcome to Atlas, ${name}
            </h2>

            <p style="margin: 0 0 16px 0; color: #374151; font-size: 15px; line-height: 1.6;">
              Thank you for creating your account.
            </p>

            <p style="margin: 0 0 16px 0; color: #374151; font-size: 15px; line-height: 1.6;">
              Atlas helps you build structured, goal-oriented learning roadmaps designed for clarity and progress.
            </p>

            <p style="margin: 0 0 24px 0; color: #374151; font-size: 15px; line-height: 1.6;">
              You can begin exploring or generate your first roadmap from your dashboard.
            </p>

            <a 
              href="https://getatlas.tech/dashboard"
              style="
                display: inline-block;
                padding: 12px 24px;
                background-color: #111827;
                color: #ffffff;
                text-decoration: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
              "
            >
              Access Dashboard
            </a>

            <p style="margin-top: 32px; font-size: 13px; color: #6b7280;">
              — The Atlas Team
            </p>

          </div>
        </div>
      `,
        })
    } catch (error) {
        console.error("Welcome email send error:", error)
    }
}