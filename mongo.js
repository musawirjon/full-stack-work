const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log('Please provide the password as argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const URL = `mongodb+srv://moonmk:${password}@cluster0.noxec.mongodb.net/noteBook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: Number, 
})

const Person = mongoose.model('Person', personSchema)

mongoose
    .connect(URL)
    .then((result) => {
        console.log('connected to DB') 
    }) 
    .catch((err) => {
        console.log(err)
    })


if(process.argv[3] && process.argv[4]){
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save().then((resp) => {
        console.log(`added ${person.name} number ${person.number}`)
        mongoose.connection.close();
    })
}else{
    Person.find({})
    .then((resp) => { 
        resp.map(item => console.log('phonebook:', `${item.name} ${item.number}`))
        mongoose.connection.close();
    })
}