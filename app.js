const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World! Ashwani');
});

app.listen(port, () => {
  console.log(`Example app listening at  Anna illa http://localhost:${port}`);
});