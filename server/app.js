const express = require("express");
const app = express();
const cors = require("cors");
const mail_routes = require("./Routes/mail");

app.use(cors());
app.use(express.json());

// import routes

app.use("/mail", mail_routes);

app.listen(8000, () => {
  console.log("server running at 8000");
});
