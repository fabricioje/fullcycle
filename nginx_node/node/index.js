const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {

  const mysql = require('mysql')
  const connection = mysql.createConnection(config)
  
  var sql = `INSERT INTO people(name) values ('Um nome')`
  connection.query(sql)

    msg = '<h1>Full Cycle Rocks!</h1> \n'

    var sql = "SELECT * FROM people limit 1";
    connection.query(sql, function (error, results, fields) {
      if (error) return console.log(error)
      connection.end()
      res.send(msg.concat(' ', results[0]['name']) )
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})