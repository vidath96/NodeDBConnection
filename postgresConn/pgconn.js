const express = require('express')
const PoolClass = require('pg').Pool

const app = express()

const pool = new PoolClass({
    user: 'postgres',
    host: 'localhost',
    database: 'weatherTiler_development',
    port: 5432,
    password: ''
})

app.get('/',(req,res) => {
    const query = 'SELECT * FROM table_name WHERE id > $1'
    const dataFromInternet = 36
    pool.query(query,[dataFromInternet],(error,dbRes) => {
        // console.log(dbRes.rows)
        res.json(dbRes)
    })
    
    pool.end()
})

app.listen(3000)