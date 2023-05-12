// front end route add blog post
document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    const blogPostObj = {
        title:document.querySelector("#title").value,
        content:document.querySelector("#blog_post").value,
    }
    fetch("/api/blogpost",{
        method:"POST",
        body:JSON.stringify(blogPostObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Something went wrong")
        }
    })
})

// front end route update blog post
const userBlogPosts = document.querySelectorAll(".user-blog-post");
for(let userBlogPostObj of userBlogPosts) {
    userBlogPostObj.querySelector(".post-update-btn").addEventListener("click", e=>{
        e.preventDefault();
        const blogPostObj = {
            title:document.querySelector(".update-title").value,
            content:document.querySelector(".update-post").value,
        }
        fetch("/api/blogpost/" + e.target.dataset.blogpostUpdateId,{
            method:"PUT",
            body:JSON.stringify(blogPostObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
            location.reload()
            } else {
                alert("Something went wrong")
            }
        })
    })
}

// front end route delete blog post
const allDelBtns = document.querySelectorAll(".post-del-btn");
allDelBtns.forEach(button=>{
    button.addEventListener("click",()=>{
        const idToDel = button.getAttribute("data-blogpost-id");
        fetch(`/api/blogpost/${idToDel}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
                location.reload()
            } else {
                alert("Something went wrong")
            }
        })
    })
})

// front end route delete comment post
const allCommentDelBtns = document.querySelectorAll(".comment-del-btn");
allCommentDelBtns.forEach(button=>{
    button.addEventListener("click",()=>{
        const idToDel = button.getAttribute("data-comment-id");
        fetch(`/api/comment/${idToDel}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
                location.reload()
            } else {
                alert("Something went wrong")
            }
        })
    })
})
