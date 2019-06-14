const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  port = 3000;

// App Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Mongoose Setup & Config
mongoose.connect("mongodb://localhost:27017/gowhere", {
  useNewUrlParser: true
});

// GoWhere Schema
let tourSchema = new mongoose.Schema({
  title: String,
  image: String,
  Date: { type: Date, default: Date.now },
  price: String,
  description: String
});

let Tour = mongoose.model("Tour", tourSchema);

// Tour.create({
//   title: "Benin Republic - Holiday in Paradise.",
//   image:
//     "http://dmgupcwbwy0wl.cloudfront.net/system/images/000/185/865/4e3e83f0203677884bd5f87caad81d3c/x255gt/020A7244.JPG?1548482760 336w, http://dmgupcwbwy0wl.cloudfront.net/system/images/000/185/865/4e3e83f0203677884bd5f87caad81d3c/x510gt/020A7244.JPG?1548482760 672w, http://dmgupcwbwy0wl.cloudfront.net/system/images/000/185/865/4e3e83f0203677884bd5f87caad81d3c/x765gt/020A7244.JPG?1548482760 1008w, http://dmgupcwbwy0wl.cloudfront.net/system/images/000/185/865/4e3e83f0203677884bd5f87caad81d3c/x1020gt/020A7244.JPG?1548482760 1344w",
//   price: "#120,000",
//   description:
//     "Our special trip to Benin Republic is for anyone who wants to unwind in paradise next door! Benin Republic combines a beautiful beach resort with cultural and historical tou..."
// });

// Tour.create({
//   title: "Uganda! The Adventure Capital of East Africa",
//   image:
//     "http://dmgupcwbwy0wl.cloudfront.net/system/images/000/257/836/e434be32d69edb5518eac5210e80d5d6/original/jinja2.jpg?1550692462",
//   price: "#485,000",
//   description:
//     "If you're looking for adventure, Uganda is the place to go. This trip will uncover an African country that is hands down the ADVENTURE CAPITAL of East Africa. Tick bungee-jumping, zip-lining, white-water rafting, horse-riding and lots more in one trip! It promises to be a wonderful trip filled with fun, adrenaline, adventure, relaxation and great memories."
// });

// RESTful Routes

//Index Route
app.get("/", (req, res) => {
  res.redirect("/tours");
});

app.get("/tours", (req, res) => {
  Tour.find({}, (err, tours) => {
    if (err) console.log(err);
    else res.render("index", { tours: tours });
  });
});

// New Route
app.get("/tours/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => console.log(`GoWhere app is listening at ${port}`));