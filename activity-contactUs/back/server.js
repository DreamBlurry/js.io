const express = require("express");
const app = express();
const cors = require("cors")


app.use(express.urlencoded({ extended:true })) //for form submission
app.use(express.json()) //json response
app.use(
   cors(
      { origin : "http://localhost:4000" }  //front end
    )
)

const recordDB = [
    {
        FullName: 'Ruzzel',
        Email: 'asdfdszf@gmail.com',
        Message: 'asdfghjkl',
    },
]

app.get('/viewRec', (req,res) =>{
    res.json(recordDB)
})


app.post('/addRecord', (req, res) => {
  console.log(req.body);

    let fullName = req.body.FullName;
    let email = req.body.Email;
    let message = req.body.Message;


    const newRecord = {
        FullName: fullName,
        Email: email,
        Message: message,
    }

    recordDB.push(newRecord);  

    

    if (recordDB) {
      res.json(
          {
              code : "success",
              msg : "Save Complete"
          }
      )
 } else {
    res.status(400).json(
      {
          code : "failed",
          msg : "Error encountered while Saving."
      }
    )
 }
})



app.listen(5000)
console.log('Server is running in port 5000')