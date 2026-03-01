import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendWelcomeEmail(to: string, name: string) {
    try {
        await resend.emails.send({
            from: "Atlas <noreply@getatlas.tech>",
            to,
            subject: "Welcome to Atlas 🚀",
            html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Welcome to Atlas, ${name} 👋</h2>
          <p>We're excited to have you onboard.</p>
          <p>
            Start building your personalized learning roadmap today.
          </p>
          <a href="https://getatlas.tech/dashboard"
             style="display:inline-block;
                    margin-top:15px;
                    padding:10px 20px;
                    background:#000;
                    color:#fff;
                    text-decoration:none;
                    border-radius:5px;">
            Go to Dashboard
          </a>
          <p style="margin-top:20px;font-size:12px;color:#777;">
            — The Atlas Team
          </p>
        </div>
      `,
        })
    } catch (error) {
        console.error("Email send error:", error)
    }
}