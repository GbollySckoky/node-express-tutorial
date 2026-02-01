console.log('Express Tutorial')
/**
 * in every response we should always have res.end()
 * 
 * request object
 * * */

// creating a server
const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World!!')
})

app.get('/about', (req, res) => {
    res.status(200).send('Welcome Home')
})


  
  
app.get('/contact', (req, res) => {
    res.status(200).join()
})

app.listen(5000, () => {
    console.log('server is running on 60000')
})

// app.get
// app.post
// app.put
// app.delete
// app.all 4 404 not found
// app.use
// app.listen listen to the server


// Join and resolve method does the same work