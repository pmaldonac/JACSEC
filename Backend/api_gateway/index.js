
const express = require('express')
const app = express()
const cors = require("cors");
const router = require("./routes/index")

var corsOptions = {
    origin: `http://localhost:9090`,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  };

app.use(cors());
app.use("/", router)

app.listen(9090, () => {
    console.log(`Corriendo en puerto 9090`)
  })
  