var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('hey this worked');
});

router.get('/another/route', function(req, res, next) {
  res.json({ hello: 'world' });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log("PING!");
  });

module.exports = router;