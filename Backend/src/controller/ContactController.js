import sendEmail from "../services/emailService.js";

const userInfo = async (req, res) => {
    try {
        const {name, email, message } = req.body;
        await sendEmail(name, email, message);
        res.status(200)
        .json({success: true, message: "Email sent successfully"});
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500)
        .json({success: false, message: "Failed to send email"});
    }
}

export default userInfo