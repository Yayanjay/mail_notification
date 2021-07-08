const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sendersemail@gmail.com', //not a real email addres
        pass: 'senderspassword' //not a real password
    }
});

const mailOptions = {
    from: 'sendersemail@gmail.com',
    to: 'receiversemail@gmail.com',
    subject: `here's an email notification`,
    text: 'your account was logged in'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});