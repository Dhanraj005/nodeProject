const db=require('../models')

const User=db.users

exports.create=(req,res)=>{

const user=new User({

    firstName:req.body.firstName,
    lastName:req.body.lastName,
    city:req.body.city
})

user.save(user)
.then(data=>{
    res.send(data)
})



}



exports.findAll=(req,res)=>{
    User.find()
    .then((data)=>{
        res.send(data)
    })
}

//find single record

exports.findOne=(req,res)=>{
const id=req.params.id
User.findById({_id:id})
.then((data)=>{
    res.send(data)
})
}


// to  delete record


exports.deleteUser=(req,res)=>{

    User.findByIdAndRemove(req.params.id)
.then((data)=>{
    res.send(data)
})
}

//update record


exports.updateUser=(req,res)=>{

    User.findByIdAndUpdate(req.params.id,req.body,{useFindAndModify:true})
.then((data)=>{
    res.send(data)
})
}


