import { contactModel } from "../models/contactModel.js";
import { getTransporter } from "../utils/mailer.js";

console.log("EMAIL_USER", process.env.EMAIL_USER);
console.log("ENAIL_PASS", process.env.EMAIL_PASS);

const saveContacts = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const newContact = new contactModel({
            name, email, message
        })

        await newContact.save();

        const transporter = getTransporter();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thanks for contacting Saniya Pawankar",
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out through my portfolio website.</p>
          <p>I have received your message and will get back to you soon.</p>
          <br />
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <br />
          <p>Regards,</p>
          <p><strong>Saniya Pawankar</strong></p>
        </div>
      `,
        })


        // optional email to you
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Message sent successfully."
        })
    } catch (err) {
        console.log("Error in sending message", err);
        return res.status(500).json({
            success: false,
            message: "Failed to send message."
        })
    }
}

export { saveContacts }