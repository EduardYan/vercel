const express = require("express");

const app = express();
const templatesPath = "/src/public/views/";
const PORT = process.env.PORT || 3000;

//routes
app.use("/public", express.static(__dirname + "/src/public/"));

app.get("/", (req, res) => {
  return res.sendFile(templatesPath + "index.html", {
    root: __dirname,
  });
});

app.listen(PORT);
console.log(`Server in port ${PORT}`);
