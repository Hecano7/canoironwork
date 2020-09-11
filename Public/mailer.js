var nodemailer = require("nodemailer");

module.exports = (request) => {
    // transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '7hecano@gmail.com',
            pass: 'ArabellaIsMyLove87'
        }
    });
    // mail options    
    const mailOptions = {
        from: `${request.body.name}`,
        to: "canoironworksd@gmail.com",
        subject: `${request.body.name}: ${request.body.phone}`,
        text: `Message Body\n${request.body.message}`,
        attatchments: [
            {
                path: `${request.file.path}`,
            },
        ]
    }
    // use the transporter to send email
    transporter.sendMail(mailOptions, (err, res) => {console.log('mail sent')})

    return true;
}

