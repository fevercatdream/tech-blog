const postUpdateBtn = document.querySelector(".post-update-btn");
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const updatePostTitle = document.querySelector(".update-title");
const updatePostTextArea = document.querySelector(".update-post");

// front end route get single blog post
document.querySelector("#comment_form").addEventListener("submit",e=>{
    e.preventDefault();
    const commentObj = {
        blog_post_id:document.querySelector('#blog_post_id').value,
        comment:document.querySelector("#blog_comment").value,
    }
    fetch("/api/comment",{
        method:"POST",
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

// front end route update blog post
const userBlogPost = document.querySelector(".user-blog-post");

saveBtn.addEventListener("click", e=>{
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

// front end route update comment
const userComments = document.querySelectorAll(".user-comment");
for(let userComment of userComments) {
    userComment.querySelector(".comment-update-btn")?.addEventListener("click", e=>{
        e.preventDefault();
        const commentObj = {
            comment:userComment.querySelector(".update-comment").value,
        }
        fetch("/api/comment/" + e.target.dataset.commentUpdateId,{
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
                window.location.href = "/profile"
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

function updateBlogContent(){
    postUpdateBtn.classList.add("hidden");
    saveBtn.classList.remove("hidden");
    cancelBtn.classList.remove("hidden");
    updatePostTitle.removeAttribute("readonly");
    updatePostTextArea.removeAttribute("readonly");
}

function cancelUpdateBlogContent(){
    postUpdateBtn.classList.remove("hidden");
    saveBtn.classList.add("hidden");
    cancelBtn.classList.add("hidden");
    updatePostTitle.setAttribute("readonly", "");
    updatePostTextArea.setAttribute("readonly", "");
    location.reload()    
}

postUpdateBtn.addEventListener("click", updateBlogContent);
cancelBtn.addEventListener("click", cancelUpdateBlogContent);