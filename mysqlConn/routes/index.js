var express = require('express');
var router = express.Router();

const mysqlDb = require('../db/mysqlConnect') 


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const listingId = 392159
  const query = "SELECT l.*,lc.* FROM listing AS l JOIN listing_classification AS lc ON l.location_id = lc.listing_id WHERE lc.status='active' AND listing_id = ? LIMIT 1"
  const query2 = "SELECT l.*,lc.* FROM listing AS l JOIN listing_classification AS lc ON l.location_id = lc.listing_id WHERE lc.status='active' LIMIT 1500"
  
  mysqlDb.query(query2, [],
  function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    res.json(results);
  });
});

module.exports = router;
