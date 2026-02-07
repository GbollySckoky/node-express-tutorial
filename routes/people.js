const express = require('express')
// const app = express()
const router = express.Router()

const {people} = require('../data')
// Setting up EXPRESS ROUTER

router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})


// app.post('/api/people', (req, res) => {
//     res.status(201).json( {messgae: 'success', success: true}  'ceated')
// })

router.post('/', (req, res) => {
    const {name} = req.body
    if(!name){
        res.status(404).json({success: false, message: 'Put in a value'})
    }
    res.status(201).json({success: true, message: 'Success', person: name})
})

router.post('/postman', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(404).json({
            success: false,
            message: 'Value must not be empty'
        })
    }
    res.status(200).json({success: true, message: 'Value created', data: [...people, {name}]})
})
router.put('/:id', (req, res) => {
    const {id}  = req.params
    const {name} = req.body
    
    const person = people.find((people) => people.id === Number(id))
    if(!person){
        return res.status(404).json({
            success: false,
            message: `Wrong ${id} Id`
        })
    }

    const newPerson = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person //if there's no edit 
    })
    res.status(200).json({
        success: true,
        message: "value edited",
        data: newPerson
    })
})

router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person){
        return res.status(404).json({
            success: false,
            message: 'Wrong Id'
        })
    }

    const newPerson = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({
        success: true,
        message: "value de",
        data: newPerson
    })

})

module.exports = router