const {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPeople = (req, res) => {
    const {name} = req.body
    if(!name){
        res.status(404).json({success: false, message: 'Put in a value'})
    }
    res.status(201).json({success: true, message: 'Success', person: name})
}

const createUsers = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(404).json({
            success: false,
            message: 'Value must not be empty'
        })
    }
    res.status(200).json({success: true, message: 'Value created', data: [...people, {name}]})
}

const editUsers = (req, res) => {
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
}

const deleteUsers = (req, res) => {
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

}

module.exports = {
    getPeople,
    createPeople,
    createUsers,
    editUsers,
    deleteUsers
}