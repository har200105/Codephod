const nodemailer = require('nodemailer');

const trans = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"harshitrathi200105@gmail.com",
        pass:"kwjoyehfmxzzzugo"
    }
});

module.exports.sendResetEmail = async(url,email)=>{

    await trans.sendMail({
        from: "Email",
        to: email,
        subject: "Forget Password",
        text: `Click This Link To Verify Your Account : ${url}`,
        html: `<h3>
        Click This Link To Verify Your Account : ${url}
        </h3>`
    });
}

module.exports.sendVerificationEmail = async(email,token)=>{
    
    const url = `${process.env.FRONTEND_URL}/${token}`;
    console.log(url);
    await trans.sendMail({
        from:"Email",
        to:email,
        subject:"Verify Your Account",
        text:`Click This Link To Verify Your Account : ${url}`,
        html:`<h3>
        Click This Link To Verify Your Account : ${url}
        </h3>`
    })
}