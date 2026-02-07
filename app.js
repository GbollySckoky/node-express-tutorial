// MIDDLEWARE
//  req -> middleware -/.m
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')
// if we want to read a file or send file we use send method but to get a request we use Json method
// app.use is controller

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())

// /api/people is the url path
app.use('/api/people', people)
app.use('/login', auth)
// app.get('/api/people', (req, res) => {
//     res.status(200).json({success: true, data: people})
// })


// app.post('/api/people', (req, res) => {
//     res.status(201).json( {messgae: 'success', success: true}  'ceated')
// })

// app.post('/api/people', (req, res) => {
//     const {name} = req.body
//     if(!name){
//         res.status(404).json({success: false, message: 'Put in a value'})
//     }
//     res.status(201).json({success: true, message: 'Success', person: name})
// })

// app.post('/api/peopl/postman', (req, res) => {
//     const {name} = req.body;
//     if(!name){
//         return res.status(404).json({
//             success: false,
//             message: 'Value must not be empty'
//         })
//     }
//     res.status(200).json({success: true, message: 'Value created', data: [...people, {name}]})
// })



app.listen(5000, () => {
    console.log('Hello')
})