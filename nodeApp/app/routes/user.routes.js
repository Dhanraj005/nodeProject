module.exports=app=>{

const users=require('../controller/user.controller')

const router=require('express').Router()

router.post('/saveUser',users.create)




router.get("/getAllUsers",users.findAll)

router.get("/getSingleUser/:id",users.findOne)

router.put("/updateUser/:id",users.updateUser)

router.delete("/deleteUser/:id",users.deleteUser)

app.use('/api',router)


}