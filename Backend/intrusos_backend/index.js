const express = require('express')
const app = express()
const cors = require("cors");
const router = require("./routes/createNewNotification")
const router2 = require("./routes/getLastNotification")
const router3 = require("./routes/updateLastNotification")
const AWS = require('aws-sdk');


require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const user_BD = process.env.USER_BD
const pass_BD = process.env.PASS_BD
mongoose.connect(`mongodb+srv://${user_BD}:${pass_BD}@cluster0.pbhbp.mongodb.net/?retryWrites=true&w=majority`, {dbName: 'Intrusos_db',
})
/*
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
*/
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
/*
const listObjectsInBucket = (bucketName) => {
  // Create the parameters for calling listObjects
  var bucketParams = {
      Bucket : bucketName,
  };

  // Call S3 to obtain a list of the objects in the bucket
  s3.listObjects(bucketParams, function(err, data) {
      if (err) {
          console.log("Error", err);
      } else {
          console.log("Success", data);
      }
  });
}

listObjectsInBucket("jacsecv1")
*/

app.listen(process.env.PORT_APP, () => {
  console.log(`Corriendo en puerto ${process.env.PORT_APP}`)
})
