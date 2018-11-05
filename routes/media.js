var express = require('express');
var router = express.Router();
var mediactrl = require('./../controllers/mediactrl');

/* GET users listing. */
router.get('/', function(req, res)
{
  res.send("Don't do that again !!!");
});

/* GET API Pengambilan seluruh data image product */
router.get('/dataproduct', mediactrl.getAllProduct);

/* GET API Pengambilan image product */
router.get('/imageproduct/:Filename', mediactrl.getImageProduct);

module.exports = router;
