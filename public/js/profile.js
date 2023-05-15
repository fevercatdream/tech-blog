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
for(let userBlogPost of userBlogPosts) {
    // event listener if save blog post button clicked
    userBlogPost.querySelector(".save-btn").addEventListener("click", e=>{
        e.preventDefault();
        const blogPostObj = {
            title:userBlogPost.querySelector(".update-title").value,
            content:userBlogPost.querySelector(".update-post").value,
        }
        fetch("/api/blogpost/" + e.target.dataset.blogpostId,{
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
    // event listener if update blog post button clicked
    userBlogPost.querySelector(".post-update-btn")?.addEventListener("click", () => updateBlogContent(userBlogPost));
    // event listener if cancel blog post button clicked
    userBlogPost.querySelector(".cancel-btn")?.addEventListener("click", () => cancelUpdateBlogContent(userBlogPost));
}

// front end route update comment
const userComments = document.querySelectorAll(".user-comment");
for(let userComment of userComments) {
    // event listener if save comment button clicked
    userComment.querySelector(".comment-save-btn").addEventListener("click", e=>{
        e.preventDefault();
        const commentObj = {
            comment:userComment.querySelector(".update-comment").value,
        }
        fetch("/api/comment/" + e.target.dataset.commentId,{
            method:"PUT",
            body:JSON.stringify(commentObj),
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
    // event listener if update comment button clicked
    userComment.querySelector(".comment-update-btn")?.addEventListener("click", () => updateCommentContent(userComment));
    // event listener if cancel comment button clicked
    userComment.querySelector(".comment-cancel-btn")?.addEventListener("click", () => cancelUpdateCommentContent(userComment));
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

// function to update blog post if update button selected
function updateBlogContent(userBlogPost){
    userBlogPost.querySelector(".post-update-btn").classList.add("hidden");
    userBlogPost.querySelector(".save-btn").classList.remove("hidden");
    userBlogPost.querySelector(".cancel-btn").classList.remove("hidden");
    userBlogPost.querySelector(".update-title-ro").classList.add("hidden");
    userBlogPost.querySelector(".update-title").classList.remove("hidden");
    userBlogPost.querySelector(".update-title").removeAttribute("readonly");
    userBlogPost.querySelector(".update-post-ro").classList.add("hidden");
    userBlogPost.querySelector(".update-post").classList.remove("hidden");
    userBlogPost.querySelector(".update-post").removeAttribute("readonly");
}

// function to cancel changing a blog post if cancel button selected
function cancelUpdateBlogContent(userBlogPost){
    userBlogPost.querySelector(".post-update-btn").classList.remove("hidden");
    userBlogPost.querySelector(".save-btn").classList.add("hidden");
    userBlogPost.querySelector(".cancel-btn").classList.add("hidden");
    userBlogPost.querySelector(".update-title-ro").classList.remove("hidden");
    userBlogPost.querySelector(".update-title").classList.add("hidden");
    userBlogPost.querySelector(".update-title").setAttribute("readonly", "");
    userBlogPost.querySelector(".update-post-ro").classList.remove("hidden");
    userBlogPost.querySelector(".update-post").classList.add("hidden");
    userBlogPost.querySelector(".update-post").setAttribute("readonly", "");
    location.reload()    
}

// function to update comment if update button selected
function updateCommentContent(userComment){
    userComment.querySelector(".comment-update-btn").classList.add("hidden");
    userComment.querySelector(".comment-save-btn").classList.remove("hidden");
    userComment.querySelector(".comment-cancel-btn").classList.remove("hidden");
    userComment.querySelector(".update-comment-ro").classList.add("hidden");
    userComment.querySelector(".update-comment").classList.remove("hidden");
    userComment.querySelector(".update-comment").removeAttribute("readonly");
}

// function to cancel changing a comment if cancel button selected
function cancelUpdateCommentContent(userComment){
    userComment.querySelector(".comment-update-btn").classList.remove("hidden");
    userComment.querySelector(".comment-save-btn").classList.add("hidden");
    userComment.querySelector(".comment-cancel-btn").classList.add("hidden");
    userComment.querySelector(".update-comment-ro").classList.remove("hidden");
    userComment.querySelector(".update-comment").classList.add("hidden");
    userComment.querySelector(".update-comment").setAttribute("readonly", "");
    location.reload()    
}

