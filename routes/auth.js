const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const {name} = req.body;
    if(name){
        return res.status(201).send('Data Createrd')
    }
    res.status(404).send('Not Found')
})

module.exports = router