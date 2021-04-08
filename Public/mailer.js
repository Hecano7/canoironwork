var nodemailer = require("nodemailer");

module.exports = (request,files) => {
    // transporter
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'canoironwork@outlook.com',
            pass: 'Bigmac87'
        }
    });
    // mail options   
    var mailOptions = {}; 
    if(request.files){ 
        var attatchments = [];
        for (var i = 0; i < files.length; i++) {
            var filename = files[i].name;
            var filepath = __dirname+"/"+filename;
            var photo = {
                filename: `${filename}`,
                path: `${filepath}`,
            };
        files[i].mv(__dirname+"/"+filename,function(err){
            if(err){
                console.log(err);
                res.send("error occured")
            }
        });
        attatchments.push(photo);
              }
        mailOptions = {
        from: 'canoironwork@outlook.com',
        to: "canoironworksd@gmail.com",
        subject: `${request.body.name}: ${request.body.phone}`,
        text: `Message Body:\n ${request.body.message}`,
        attachments: attatchments
        }
    }else{
        console.log("mail without photo");
        console.log(`${request.body.name},${request.body.phone},${request.body.message}`);
        mailOptions = {
            from: 'canoironwork@outlook.com',
            to: "canoironworksd@gmail.com",
            subject: `${request.body.name}: ${request.body.phone}`,
            text: `Message Body:\n ${request.body.message}`
        }
    }
    console.log(attatchments);
    use the transporter to send email
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Sent: " + info.response);
    })

    return true;
}

