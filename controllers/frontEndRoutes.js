const express = require('express');
const router = express.Router();
const {User, BlogPost, Comment} = require('../models');

router.get("/",(req,res)=>{
    BlogPost.findAll({
        include:[User]
    }).then(blogData=>{
        const hbsData = blogData.map(blogPost => blogPost.get({plain:true}));
        console.log(hbsData);
        res.render("index",{
            allBlogPosts:hbsData,
            logged_in: req.session.logged_in
        })
    })
})

router.get("/blogpost/:id",(req,res)=>{
    BlogPost.findByPk(req.params.id,{
        include:[User]
    }).then(blogData=>{
        const hbsData = blogData.get({plain:true});
        hbsData.logged_id=req.session.logged_id
        console.log(hbsData);
        res.render("singleBlogPost",hbsData)
    })
})

router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/profile")
    }
    res.render("login",{
        logged_in:req.session.logged_in
    })
})

router.get("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    } else {
        User.findByPk(req.session.user_id,{
            include:[BlogPost]
        }).then(userData=>{
            const hbsData = userData.get({plain:true})
            console.log(hbsData)
            hbsData.logged_in=req.session.logged_in;
            res.render("profile",hbsData)
        })
    }
})

module.exports = router;