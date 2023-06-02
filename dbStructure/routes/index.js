var express = require('express');
var router = express.Router();
const db = require('../database/db')



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const query = 'SELECT * FROM users'
    // const dataFromInternet = 1 [dataFromInternet],
    db.query(query,(error,dbRes) => {
        // console.log(dbRes.rows)
        res.json(dbRes)
    })
    
    // db.end()
});

module.exports = router;
