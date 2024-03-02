const express  = require('express');
const mysql =  require('mysql');

const app = express();
const port = 8080;

const db =  mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '92913389Be@1',
    database:'rshit'
});
db.connect((err) => {
    if(err){
        console.error('Error Connecting to db',err);
        return ;
    }
    console.log('Connected to database');

});
app.use(express.json());
app.use(express.static('public'));
const cors = require('cors');
app.use(cors());
app.post('/insert-data', (req, res) => {
    const {login,email,phone,password} = req.body;
    const query = 'INSERT INTO users (login, email, phone, password) VALUES (?, ?, ?, ?)';
    db.query(query, [login, email, phone, password], (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Error inserting data' });
          return;
        }

        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully' });
      });
    });
app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});