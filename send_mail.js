const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anemail@gmail.com', //not a real email addres
        pass: 'apassword' //not a real password
    }
});

const mailOptions = {
    from: 'anemail@gmail.com',
    to: 'endlessu.paradox@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});