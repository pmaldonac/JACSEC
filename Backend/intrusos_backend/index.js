const express = require('express')
const app = express()
const cors = require("cors");



const router = require("./routes/index")

//BDD connection
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const user_BD = process.env.USER_BD
const pass_BD = process.env.PASS_BD
mongoose.connect(`mongodb+srv://${user_BD}:${pass_BD}@cluster0.pbhbp.mongodb.net/?retryWrites=true&w=majority`, {dbName: 'Intrusos_db',
})

const port = process.env.PORT_APP
var corsOptions = {
    origin: `http://localhost:${port}`,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  };

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cors(corsOptions));
app.use("/", router)


app.listen(process.env.PORT_APP, () => {
  console.log(`Corriendo en puerto ${process.env.PORT_APP}`)
})
