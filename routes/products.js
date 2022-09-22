const express=require("express")
const router= express.Router()
const auth=require("../midelweare/auth")
const {validateProduct}=require("../models/product")
const {createProduct}=require("../controler/productsControler")
router.post( "/" ,auth,async(req,res) =>{
    const {error}=validateProduct(req.body) 
    if(error){
    return res.status(400).send(error.details[0].message)
    }
    let {img,title,description}=req.body
    createProduct(img,title,description)
    .then((dataProduct)=>{
        res.json(dataProduct)
    })
    .catch((err)=>{
       res.json(err) 
    })
})

module.exports = router;