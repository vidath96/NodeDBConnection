var express = require('express');
var router = express.Router();
const PoolClass = require('pg').Pool

const pool = new PoolClass({
    user: 'postgres',
    host: 'localhost',
    database: 'nodepgtest_db',
    port: 5432,
    password: '1234'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const query = 'SELECT * FROM users'
    // const dataFromInternet = 1 [dataFromInternet],
    pool.query(query,(error,dbRes) => {
        // console.log(dbRes.rows)
        res.json(dbRes)
    })
    
    pool.end()
});

module.exports = router;
