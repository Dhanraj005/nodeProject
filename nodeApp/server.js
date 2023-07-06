const express=require('express')

const cors=require('cors')



const app=express()

const corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())


const db=require('./app/models')


db.mongoose.connect(db.url)
.then(()=>{
    console.log('connected to mongo srver !!!')

})

require('./app/routes/user.routes')(app)

// app.get("/First",(req,res)=>{
//     res.send("Hello from express !!!")
// })






// const person={
//     name:'ABC',
//     city:'Pune'
// }

// app.get("/Second",(req,res)=>{

//     res.send('hello from server two !!!!')

// })

// const userList=[]

// app.post('/saveData',(req,res)=>{
//     userList.push(req.body)
//     console.log(userList)
//     res.send({"statusCode":303,'message':'data save !!!','result':userList})
// })

// app.get("/getUserList",(req,res)=>{
//     res.send(userList)
// })



app.listen(7878,()=>{
    console.log('server started')
})