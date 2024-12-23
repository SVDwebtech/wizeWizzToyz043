const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,'public')));

// Home Route
app.get('/', (req, res) => {
      const welcome = "Hello World";
      res.render('home', {data: welcome});
});

app.listen(3000, () => {
      console.log("Listening on Port:3000");
});