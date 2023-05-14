const express = require('express');
const router = express.Router();
const {User, BlogPost, Comment} = require('../models');

// front end index route
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

// front end single blog post route
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
        hbsData.logged_id=req.session.user_id
        hbsData.editableBlog = hbsData.user_id === req.session.user_id;
        for (let i = 0; i < hbsData.comments.length; i++) {
            const currentComment = hbsData.comments[i];
            currentComment.editable = currentComment.user_id === req.session.user_id;
        }
        res.render("singleBlogPost", {
            ...hbsData,
            logged_in: req.session.logged_in
        })
    })
})

// front end login route
router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/profile")
    }
    res.render("login",{
        logged_in:req.session.logged_in
    })
})

// front end logout route
router.get("/logout",(req,res)=>{
    req.session.destroy();
    return res.redirect("/")
})

// front end dashboard / profile route
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