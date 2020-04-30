var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {string : 'hey now'});
});


router.post('/', (req, res, next) => {
  res.render('index',
      { string: req.body.string,
        length: req.body.string.length
      });
})

module.exports = router;
