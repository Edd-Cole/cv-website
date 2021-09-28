// const Email = require("nodemailer")
// addEventListener("click", sendEmail, false)

// console.log("hello world")

// function createTransporter(service, user, pass) {
//     const transporter = nodemailer.createTransport({
//         service: service,
//         auth: {
//             user: user,
//             pass: pass
//         }
//     })
//     return transporter;
// }

// function createMailOptions(text) {
//     const mailOptions = {
//         from: abc,
//         to: "edd_kleszcz@hotmail.co.uk",
//         subject: "Message from CV Website",
//         text: text
//     }
//     return mailOptions;
// }

// function createEmail(transporter, mailOptions) {
//     return transporter.sendMail(mailOptions, (error, info) => {
//         if (error) console.error(error)
//         else console.log("Email sent: " + info)
//     })
// }

// const sendEmail = async(service, user, pass, text) => {
//     const transporter = createTransporter(service, user, pass);
//     const mailOptions = createMailOptions(text);
//     const email = await createEmail(transporter, mailOptions);
//     return email;
// }

const checkValidity = (event) => {
    const info = event.target.value;
    console.log(info)
}

const contactName = document.getElementById("postName")
const contactEmail = document.getElementById("postEmail")
const contactMessage = document.getElementById("postMessage")

const contactInfo = [contactName, contactEmail, contactMessage]

contactInfo.forEach(info => {
    info.addEventListener("input", checkValidity)
})