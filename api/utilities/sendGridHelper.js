const nodemailer = require("nodemailer");

var sendGridHelper = {
  sendMail(ccEmail) {
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: "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",
      },
    });

    let mailOptions = {
      from: "support@actualhs.com",
      to: "anokh@sstus.net",
      cc: ccEmail,
      subject: "Regarding Leave Approval",
      html: `<h4>Hi</h4><h4>Greeting of the day!!</h4><p>Leave request for ${ccEmail} has been approved</p><br/><h4>Thank You</h4><h4>SST support Team</h4>`,
    };
    console.log(mailOptions);

    mailTransporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
  },
};
module.exports = sendGridHelper;
