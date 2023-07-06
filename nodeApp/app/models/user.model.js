module.exports=mongoose=>{

var schema=mongoose.Schema({

    firstName:'string',
    lastName:'string',
    city:'string'
})

const User=mongoose.model("user",schema)
return User


}




