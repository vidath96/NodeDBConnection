const PoolClass = require('pg').Pool

const pool = new PoolClass({
    user: 'postgres',
    host: 'localhost',
    database: 'nodepgtest_db',
    port: 5432,
    password: '1234'
})

module.exports = {
    query: (queryText,params,callback) => {
        return pool.query(queryText,params,callback)
    }
}