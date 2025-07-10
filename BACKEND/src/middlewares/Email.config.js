export const sendEmail = async (email, verificationCode) => {
 try {
   const nodemailer = await import("nodemailer");
 
   const transporter = nodemailer.default.createTransport({
     service: "SendGrid",
     auth: {
       user: "apikey",
     pass:"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",
     },
   });
 
   const info = await transporter.sendMail({
     from: '"IIT Mitra" <noreply@iitmitra.com>',
     to: email,
     subject: "Verify your Email",
     subject: "Verify your Email - IIT Mitra",
  text: `Hi, your OTP is ${verificationCode}. Do not share it with anyone.`,
  html: `
    <div style="font-family:sans-serif; font-size:16px;">
      <p>Hi,</p>
      <p>Your OTP is: <strong>${verificationCode}</strong></p>
      <p>Please do not share it with anyone.</p>
      <hr />
      <p style="font-size:12px;color:#999;">This is an automated email from IIT Mitra.</p>
    </div>
  `,
   });
 
   console.log("Message sent:", info);
 } catch (error) {
  console.log(error) 
 }
};

