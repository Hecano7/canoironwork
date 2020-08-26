var nodemailer = require("nodemailer");

module.exports = (request) => {
    // transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    // mail options
    console.log(`from: ${request.body.name},
    to: process.env.SENDTO,
    subject: ${request.body.name}: ${request.body.tel},
    text: Message Body\n${request.body.message}`);
    
    const mailOptions = {
        from: `${request.body.name}`,
        to: process.env.SENDTO,
        subject: `${request.body.name}: ${request.body.tel}`,
        text: `Message Body\n${request.body.message}`
    }
    // use the transporter to send email
    transporter.sendMail(mailOptions, (err, res) => {console.log('mail sent')})

    return true;
}

