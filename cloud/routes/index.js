var express = require('express_n');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
AV.Cloud.define('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
