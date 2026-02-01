const authorize = (req, res, next) => {
    console.log('AUTHORIZE')
    const {user} = req.query;
    if(user === 'John'){
        req.user = {name: 'John', id: 1}
       return next()
    }
return res.status(401).send('Unauthorized')
    // next()
}

module.exports = authorize