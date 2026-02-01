// MIDDLEWARE
//  req -> middleware -/.m
const express = require('express')
const app = express()
const authorize = require('./authorize')

const logger = require('./logger')
// App use vs route
//  options - our own / express / thrid party
// use is used for midleware
app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Okay')
})

app.get('/about', (req, res) => {
    res.send('Okay')
})

app.get('/home', (req, res) => {
    res.send('Okay')
})
app.get('/api', (req, res) => {
    console.log(req.user)
    res.send('Okays')
})
app.get('/ap1/products', (req, res) => {
    res.send('Okay')
})

app.listen(5000, () => {
    console.log('Hello')
})