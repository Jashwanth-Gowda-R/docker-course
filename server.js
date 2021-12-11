let express = require("express");
let path = require("path");
let fs = require("fs");
let app = express();

// middleware for static files
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/profile-picture", function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  console.log(__dirname);
  res.writeHead(200, { "Content-Type": "image/jpg" });
  res.end(img, "binary");
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
