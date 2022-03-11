var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tryzahid1@gmail.com",
    pass: "56zzaahhiidd65",
  },
});

exports.sendMail = (req, res) => {
  console.log(req.body);
  const { email, name, message } = req.body;

  var mailOptions = {
    from: "tryzahid1@gmail.com",
    to: email,
    subject: "this is test email",
    text: `MY Name is ${name}, and my Message is ${message}`,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + info.response);
    }
  });

  console.log("req body", req.body);

  res.send();
};
