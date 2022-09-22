const express=require("express")
const router= express.Router()
const auth=require("../midelweare/auth")
const {validateArticle}=require("../models/article")
const {createArticle,getArticles}=require("../controler/articleControler")
router.post( "/" ,auth,async(req,res) =>{
    const {error}=validateArticle(req.body) 
    if(error){
    return res.status(400).send(error.details[0].message)
    }
    let {img,title,text}=req.body
    createArticle(img,title,text)
    .then((dataArticle)=>{
        res.json(dataArticle)
    })
    .catch((err)=>{
       res.json(err) 
    })
})

router.get("/",auth,(req,res)=>{
getArticles()
.then((article)=>{
    res.json(article)
})
.catch((err)=>
    res.json(err)
)
})
module.exports = router;