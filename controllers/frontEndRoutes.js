const express = require('express');
const router = express.Router();
const {User, BlogPost, Comment} = require('../models');

router.get("/",(req,res)=>{
    BlogPost.findAll({
        include:[User]
    }).then(blogData=>{
        const hbsData = blogData.map(blogPost => blogPost.get({plain:true}));
        res.render("index",{
            allBlogPosts: hbsData,
            logged_in: req.session.logged_in
        })
    })
})

router.get("/blogpost/:id",(req,res)=>{
    BlogPost.findByPk(req.params.id,{
        include:[User, {
            model: Comment,
            include: User
        }]
    }).then(blogData=>{
        if (!blogData) {
            res.status(404).end("Not found")
            return;
        } 
        const hbsData = blogData.get({plain:true});
        hbsData.logged_id=req.session.logged_id
        res.render("singleBlogPost", {
            ...hbsData,
            logged_in: req.session.logged_in
        })
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

router.get("/logout",(req,res)=>{
    req.session.destroy();
    return res.redirect("/")
})

router.get("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    } else {
        User.findByPk(req.session.user_id,{
            include:[BlogPost, Comment]
        }).then(userData=>{
            const hbsData = userData.get({plain:true})
            hbsData.logged_in=req.session.logged_in;
            res.render("profile",hbsData)
        })
    }
})

module.exports = router;