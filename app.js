const express = require('express')
var mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 5000
const linkRoute = require('./routes/linkRoute')
mongoose.connect('mongodb://localhost/newlinks', {useUnifiedTopology:true})


 let db = mongoose.connection;

 db.on("err", () => {console.log("houve um erro")})
 db.once("open", () => {   console.log("banco carregado")})

 app.set('view engine', 'ejs')
 app.set('views', path.join(__dirname, 'templates'))
      
app.use('/', linkRoute)


app.listen(port, () => console.log(`rodando ${port}!`))

/* para salvar algo no banco de dados use
primeiro use 
/* 
   /*  
   const linkSchema = new mongoose.Schema({
   title:string
    description: String,
    url: String,
    click:Number
    })

   const Link = mongoose.model('Link', linkschema)

  let link = new Link({
    title:"" escreva algo nessas aspas
    description: ""
    url:""
    click:.
      


  })

  link.save().then(doc=> {
 
      console.log(doc)

  }).catch(err => {console.log(err)})
 

let db = mongoose.connection


db.on("error", () => {console.log("houve um erro")})
db.once("open", () => { console.log 
    console.log("banco carregado") 
    link.save().then(doc => {
         console.log(doc) 
         }).catch(err => { console.log(err)})

    })
    */ 














/* 

const nome = mongoose.model('nome', nomeSchema)
depois use let nome = new nome da mongoose.model({
   title: ""
   description:""    use isso para esse projeto.
   url:""
   click: 0,


}) 


depois use nome do let.save().then(doc=>{   
      console.log(doc)


}).catch(err=>{console.log(err)})



para salvar uma pessoa no banco de dados use 

const personSchema = new mongoose.Schema({
    name:string
    age:Number


})

const Person = mpngoose.model('Person', personSchema)

let person = new Person({name: "jose", age: 23})

person.save().then(doc => {console.log(doc)})









*/