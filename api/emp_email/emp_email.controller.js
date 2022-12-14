const sgMail = require("@sendgrid/mail");
const nodemailer = require("nodemailer");
const { param } = require("../../app");
const sendGridHelper = require("./../utilities/sendGridHelper");
const {
  getEmployee_Email,
  getEmployee_Email_all,
} = require("./emp_email.service");
// const getEmp_Email = require("./emp_email.service");

module.exports = {
  getEmp_Email: (req, res) => {
    const id = req.params.id;
    var data1;
    getEmployee_Email(id, (error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      }
      console.log(result[0].email);
      // var mailBody = "Hello form Amelia";

      // var mailSub = "Test mail";

      sendGridHelper.sendMail(result[0].email);
      // Set the API key
      sgMail.setApiKey(
        "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"
      );

      // Set the email parameters
      const recipient = result[0].email;
      const subject = "Leave Application";
      const body = `Hello, ${result[0].email} is asking for leave`;
      console.log(recipient);
      // Send the email
      try {
        sgMail.send({
          to: "pooja@sstus.net",
          cc: recipient,
          from: "rupalikongari5@gmail.com",
          subject: subject,
          text: body,
        });
      } catch (err) {
        console.log(err);
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  getEmployee_Email_all: (req, res) => {
    //const id = req.params.id;
    var data1;
    getEmployee_Email_all((error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
};
