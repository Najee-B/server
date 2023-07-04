const express=require("express");
const router=express.Router();
router.get("/login",(req,res)=>
{
    res.send(" perfect ok")
});
router.post("/register",(req,res)=>
{
    console.log(req.body);
    res.send(req.body)
});
module.exports=router;