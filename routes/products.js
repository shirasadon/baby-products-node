const express=require("express")
const router= express.Router()
const auth=require("../midelweare/auth")
const {validateProduct, Product}=require("../models/product")
const {createProduct,getToysProduct,getBabycarrigesProduct,getChairsaftyProduct}=require("../controler/productsControler")
router.post( "/" ,auth,async(req,res) =>{
    const {error}=validateProduct(req.body) 
    if(error){
    return res.status(400).send(error.details[0].message)
    }
    let {img,title,description,category}=req.body
    createProduct(img,title,description,category)
    .then((dataProduct)=>{
        res.json(dataProduct)
    })
    .catch((err)=>{
       res.json(err) 
    })
})

   
router.get("/toys",auth,(req,res)=>{
    getToysProduct()
.then((toys)=>{
    res.json(toys)
})
.catch((err)=>
    res.json(err)
)
})


router.get("/babycarriges",auth,(req,res)=>{
    getBabycarrigesProduct()
.then((carriges)=>{
    res.json(carriges)
})
.catch((err)=>
    res.json(err)
)
})

router.get("/chairsafty",auth,(req,res)=>{
    getChairsaftyProduct()
.then((chairsafty)=>{
    res.json(chairsafty)
})
.catch((err)=>
    res.json(err)
)
})



module.exports = router;