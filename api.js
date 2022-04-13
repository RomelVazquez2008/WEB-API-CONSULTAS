const express = require('express')

const dotenv = require ('dotenv')
dotenv.config();

const port = process.env.PORT;

const { connection } = require('./config/db.js')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})




//Todas las rutas
app.use(require('./routes/routes.js'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})