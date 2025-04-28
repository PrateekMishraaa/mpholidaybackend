import express from "express"
const router = express.Router();
import transporter from "./mailer.js";




router.post("/sendmail",async(req,res)=>{
    const {name,email,subject,message} = req.body;
     
    const mailOptions = {
        from:email,
        to:"pm921670@gmail.com",
        subject:subject || "New message from contact form",
        html:
        `<p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Subject:</strong>${subject}</p>
        <p><strong>Message:</strong>${message}</p>
        `
    };
    try{
            await transporter.sendMail(mailOptions);
            res.status(200).json({message:"Email has been sent successfully",mailOptions});
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error",error})
    }
})
export default router