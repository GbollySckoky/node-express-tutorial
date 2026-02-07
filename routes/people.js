const express = require('express')
// const app = express()
const router = express.Router()

// Setting up EXPRESS ROUTER
const {
    getPeople,
    createPeople,
    createUsers,
    editUsers,
    deleteUsers
} = require('../controllers/people')

// Express Controller
// router.get('/', getPeople)
// router.post('/',createPeople )
// router.post('/postman', createUsers)
// router.put('/:id', editUsers)
// router.delete('/:id', deleteUsers)

// we can chain the router methods express controller
router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createUsers)
router.route('/:id').put(editUsers).delete(deleteUsers)

module.exports = router