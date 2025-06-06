import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, course, message } = body

    // Create transporter (you'll need to configure with actual email credentials)
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "unitedgroup.education@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "unitedgroup.education@gmail.com",
      to: "unitedgroup.education@gmail.com",
      subject: "New Enquiry from Website",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course Interest:</strong> ${course}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "unitedgroup.education@gmail.com",
      to: email,
      subject: "Thank you for your enquiry - United Group of Education",
      html: `
        <h2>Thank you for your enquiry!</h2>
        <p>Dear ${name},</p>
        <p>We have received your enquiry and our team will contact you within 24 hours.</p>
        <p><strong>Your enquiry details:</strong></p>
        <p>Course Interest: ${course}</p>
        <p>Message: ${message}</p>
        <br>
        <p>For immediate assistance, you can contact us at:</p>
        <p>Phone: 7766057754, 8252530876, 7857905134</p>
        <p>Email: unitedgroup.education@gmail.com</p>
        <br>
        <p>Best regards,<br>United Group of Education Team</p>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return Response.json({ message: "Enquiry submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ error: "Failed to submit enquiry" }, { status: 500 })
  }
}
