const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require("path");

app.use(bodyParser.json());
app.use("/api", require("./Route"));

const middleawre = (req, res, next) => {
  try {
    if (req.headers.auth == 1234) {
      next();
    } else {
      res.send("not Pass");
    }
  } catch {
    res.send("auth NOT pass");
  }
};

app.listen(5000, () => {
  console.log("app listening at port 5000");
});

app.post("/", middleawre, function (req, res) {
  console.log(req.body);
  // res.send("hello world");
  res.status(200).send({ massage: "you get 200" });
  // ejs => ส่งหน้า front ไปให้
});

app.get("/file", middleawre, function (req, res) {
  var options = { root: path.join(__dirname) };

  var fileName = "text.txt";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("sent:", fileName);
    }
  });
});

// app.get("/:id", middleawre, function (req, res) {
//   console.log(req.params.id);
//   var mes = "your param" + req.params.id;
//   res.status(200).send({ massage: mes });
// });

const test = (req, res) => {
  console.log("this is param ", req.params, req.query);
  res.status(200).send({ massage: "you get 200" });
};

app.get("/:id", middleawre, test);
