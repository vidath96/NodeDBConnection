const express = require('express')
const PoolClass = require('pg').Pool

const app = express()

const pool = new PoolClass({
    user: 'postgres',
    host: 'localhost',
    database: 'nodepgtest_db',
    port: 5432,
    password: '1234'
})

app.get('/',(req,res) => {
    const query = 'SELECT * FROM users'
    // const dataFromInternet = 1 [dataFromInternet],
    pool.query(query,(error,dbRes) => {
        // console.log(dbRes.rows)
        res.json(dbRes)
    })
    
    pool.end()
})

app.listen(3000)