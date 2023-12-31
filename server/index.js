const express = require('express')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors');
const { connectDB } = require('./config/db')


connectDB()

const app = express()
const port = process.env.PORT || 4000

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, ()=>{
    console.log('listening on port', port);
})