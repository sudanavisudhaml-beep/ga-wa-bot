const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/whatsapp", (req, res) => {
  const incomingMsg = req.body.Body || "";
  const MessagingResponse = twilio.twiml.MessagingResponse;
  const response = new MessagingResponse();

  response.message(
    `Halo 👋\nIni GA Virtual Assistant.\nPesan kamu: "${incomingMsg}"`
  );

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(response.toString());
});

app.get("/", (req, res) => {
  res.send("GA Bot is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
