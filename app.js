
// app.get
// app.post
// app.put
// app.delete
// app.all 4 404 not found
// app.use
// app.listen listen to the server


const express = require('express')

const app = express()

// HOW TO IMPORT AN ARRAY, OBJECT OR VARIABLE
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send(`<h1>HHello World click on the link to direct u to the products <a href='/api/products'> Products</a>`)
})

// sending all products
app.get('/api/products', (req, res) => {
    res.json(products)
})

// display few keys in the data
app.get('/api/product', (req, res) => {
    const newProducts = products.map((product) => {
        const {name, id, price, image} = product
        return{name, id, price, image}
    })
    res.json(newProducts)
})

// to grab a single product by id. we use find Method. u grab the key to maake the check
// app.get('/api/product/1', (req, res) => {
//     const singelProducts = products.find((product) => product.id === 1)
//     console.log(singelProducts)
//     res.json(singelProducts)
//  })

 //  Route Params is just like a placeholder
//  params is a string
 app.get('/api/product/:id', (req, res) => {
    console.log(req.params)
    console.log(req)
    const {id} = req.params
    const singelProducts = products.find((product) => product.id === Number(id))
    if(!singelProducts){
        res.status(404).send('Product details not found')
    }
    console.log(singelProducts)
    return res.json(singelProducts)
 })

//  Query Params also known as url params
app.get('/api/products/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query

    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((sorted) => {
            return sorted.name.startsWith()
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).send(sortedProducts)
})

app.listen(5000, () => {
    console.log('Server Running on 5000 port.')
})