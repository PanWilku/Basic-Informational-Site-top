const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

app.get("*", (req, res) => {
    try {
      res.status(404).sendFile("./404.html", { root: __dirname });
    } catch (err) {
      console.error("Error sending 404 page:", err);
      res.status(500).send("Internal Server Error");
    }
  });
  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});