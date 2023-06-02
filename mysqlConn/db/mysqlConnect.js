var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  database        : 'auto_mobile'
});

// pool.query("SELECT l.*,lc.* FROM listing AS l JOIN listing_classification AS lc ON l.location_id = lc.listing_id WHERE lc.status='active' LIMIT 1", function (error, results, fields) {
//   if (error) throw error;
//   // console.log('The solution is: ', results[0].solution);
//   console.log(results);
// });

// const listingId = 392159

// pool.query("SELECT l.*,lc.* FROM listing AS l JOIN listing_classification AS lc ON l.location_id = lc.listing_id WHERE lc.status='active' AND listing_id = ? LIMIT 1", [listingId],
// function (error, results, fields) {
//   if (error) throw error;
//   // console.log('The solution is: ', results[0].solution);
//   console.log(results);
// });

module.exports = {
  query: (queryText,params,callback) => {
      return pool.query(queryText,params,callback)
  }
}