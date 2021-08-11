const Email = require("nodemailer")
addEventListener("click", sendEmail, false)

function createTransporter(service, user, pass) {
    const transporter = nodemailer.createTransport({
        service,
        auth: {
            user,
            pass
        }
    })
    return transporter;
}

function createMailOptions(from, to, text) {
    const mailOptions = {
        from,
        to,
        subject: "Message from CV Website",
        text
    }
    return mailOptions;
}

function createEmail(transporter, mailOptions) {
    return transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error(error)
        else console.log("Email sent: " + info)
    })
}

const sendEmail = async(service, user, pass, from, to, text) => {
    const transporter = createTransporter(service, user, pass);
    const mailOptions = createMailOptions(from, to, text);
    const email = await createEmail(transporter, mailOptions);
    return email;
}