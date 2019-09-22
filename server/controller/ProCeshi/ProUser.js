
var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var connection = require('../../mysql/connection/connentDB');
var formactResult = require('../../utils/formactResult');
var dateTime = require('../../utils/dateTime');
var DbCreat = require('../../model/proCs/DbCreat');
var dbCreat = DbCreat(connection, sequelize);
 
router.get('/userName', function(req, res, next) {
  var code = req.query.code; 
  console.log(code);
  dbCreat.findOne({'where': {'code': code}}).then(function (result) {
      res.send(formactResult.success(result));
    }).catch(function (result) {
      res.send(formactResult.error('', result));
    }); 
});


module.exports = router;
