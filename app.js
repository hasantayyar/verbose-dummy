const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const ok = function (req, res) {
  return res.send('ok')
}
const r = function (req, res) {
  res.json({ url: req.url, headers: req.headers, body : req.body });
}
app.get('*', r);
app.get('/ok', ok);
app.post('*', r);

app.listen(8000, function () {
  console.log('Listening on 8000')
});
