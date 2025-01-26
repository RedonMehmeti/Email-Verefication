const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');


// Replace this with your actual email credentials
const secure_configuration = {
    EMAIL_USERNAME: 'your_email@gmail.com',
    PASSWORD: 'your_email_password'
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: secure_configuration.EMAIL_USERNAME,
        pass: secure_configuration.PASSWORD
    }
});

// Generate the JWT token
const token = jwt.sign(
    { data: 'Token Data' }, // Token payload
    'ourSecretKey', // Secret key
    { expiresIn: '10m' } // Token expiration
);

// Email configurations
const mailConfigurations = {
    from: 'redonmehmeti67@gmail.com', // Sender's email address
    to: 'redonmehmeti2019@gmail.com', // Recipient's email address
    subject: 'Email Verification', // Subject of the email
    text: `Hi! There, You have recently visited 
           our website and entered your email.
           Please follow the given link to verify your email:
           http://localhost:3000/verify/${token}
           Thanks`
};

// Send the email
transporter.sendMail(mailConfigurations, function(error, info) {
    if (error) {
        throw new Error(error);
    }
    console.log('Email Sent Successfully');
    console.log(info);
});
