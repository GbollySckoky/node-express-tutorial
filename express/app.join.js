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

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!!')
// })

// Join and resolve method does the same work
// sendFile is used to send file to the client 
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'));
  });

app.get('/about', (req, res) => {
    res.status(200).send('Welcome Home')
})

// app.all('*', (req, res) => {
//     res.status(404).send('Route not found');
//   });


//   more of like hiding the page
// setup static and middleware
// app.use id use to handle middleware
app.use(express.static('./public'))

app.listen(5000, () => {
    console.log('server is running on 60000')
})
