const nodemailer=require('nodemailer');
const {model} =require("mongoose");
const EmailSend=async(EmailTo,EmailText,EmailSubject)=>{


  let transport=  nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{user:"info@teamrabbil.com", pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })
let mailOption={
      from:"ecom solution <info@teamrabbil.com>",
    to:EmailTo,
    subject:EmailSubject,
    text:EmailText

}
return await transport.sendMail(mailOption)



}

module.exports=EmailSend;
