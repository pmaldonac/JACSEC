const express = require('express')
const app = express()
const cors = require("cors");
const router = require("./routes/createNewNotification")
const router2 = require("./routes/getLastNotification")
const router3 = require("./routes/updateLastVisitor")
const router4 = require("./routes/getAllNotifications")



require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const user_BD = process.env.USER_BD
const pass_BD = process.env.PASS_BD
mongoose.connect(`mongodb+srv://${user_BD}:${pass_BD}@cluster0.pbhbp.mongodb.net/?retryWrites=true&w=majority`, {dbName: 'Patentes_db',
})


const port = process.env.PORT_APP
var corsOptions = {
    origin: `http://localhost:${port}`
  };

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(cors(corsOptions));
app.use("/", router)

app.use("/", router2)
app.use("/", router3)
app.use("/", router4)


app.listen(process.env.PORT_APP, () => {
  console.log(`Corriendo en puerto ${process.env.PORT_APP}`)
})
