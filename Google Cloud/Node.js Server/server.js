const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/`));

app.get('/', (req, res) => {
  //res.send('Hello from App Engine!');
  //res.sendFile('./index.html');
  //res.sendFile(__dirname+'/index.js');
  //res.sendFile(__dirname+'/style.css');
  res.sendFile(__dirname+'/index.html');

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});