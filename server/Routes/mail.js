const express = require("express");
const { sendMail } = require("../controler/mail");
const mail_routes = express.Router();

mail_routes.post("/send", sendMail);

module.exports = mail_routes;
