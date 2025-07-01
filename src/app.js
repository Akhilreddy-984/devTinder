const express = require('express');
const app = express();

app.use('/api', (req, res) => {
  res.send('Hello api!!');
});

app.use('/post', (req, res) => {
  res.send('Hello Post!!');
});

app.use('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(7777, () => {
  console.log('Finally Server is successfully listening at port 7777');
});
