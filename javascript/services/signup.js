const mysql = require('myql2')
const config = require('../config/config')
const db = mysql.createConnection(config)
const welcomeUser = async()=>{
    const query = `SELECT * FROM users WHERE isWelcome = false`
    db.query(query,()=>{})
    
}