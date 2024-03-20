const connecttomongo = require("./db") ; 
const express = require('express')
const app = express()
const port = 5000
connecttomongo() ;
var cors = require('cors')
app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))  



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Mynotebook Backend : listening on port ${port}`)
})