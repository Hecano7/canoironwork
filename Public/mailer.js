var nodemailer = require("nodemailer");

module.exports = (request,fileName,filePath) => {
    // transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '7hecano@gmail.com',
            pass: 'ArabellaIsMyLove87'
        }
    });
    // mail options    
    if(request.files){ 
    var mailOptions = {
        from: `${request.file}`,
        to: "canoironworksd@gmail.com",
        subject: `${request.body.name}: ${request.body.phone}`,
        text: `Message Body:\n ${request.body.message}`,
        attachments: [
                {
                    filename: `${fileName}`,
                    path: `${filePath}`,
                }
            ]
        }
    }else{
        var mailOptions = {
            from: `${request.file}`,
            to: "canoironworksd@gmail.com",
            subject: `${request.body.name}: ${request.body.phone}`,
            text: `Message Body:\n ${request.body.message}`
        }
    }
    // use the transporter to send email
    transporter.sendMail(mailOptions, (err, res) => {console.log('mail sent')})

    return true;
}

