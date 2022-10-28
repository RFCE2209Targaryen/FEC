require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 });

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
