// blog post variables
const postUpdateBtn = document.querySelector(".post-update-btn");
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const updatePostTitleHRO = document.querySelector(".update-title-ro");
const updatePostTitle = document.querySelector(".update-title");
const updatePostTextPRO = document.querySelector(".update-post-ro");
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

saveBtn?.addEventListener("click", e=>{
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
    // event listener if save comment button clicked
    userComment.querySelector(".comment-save-btn")?.addEventListener("click", e=>{
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

// function to update blog post if update button selected
function updateBlogContent(){
    postUpdateBtn.classList.add("hidden");
    saveBtn.classList.remove("hidden");
    cancelBtn.classList.remove("hidden");
    updatePostTitleHRO.classList.add("hidden");
    updatePostTitle.classList.remove("hidden");
    updatePostTitle.removeAttribute("readonly");
    updatePostTextPRO.classList.add("hidden");
    updatePostTextArea.classList.remove("hidden");
    updatePostTextArea.removeAttribute("readonly");
}

// function to cancel changing a blog post if cancel button selected
function cancelUpdateBlogContent(){
    postUpdateBtn.classList.remove("hidden");
    saveBtn.classList.add("hidden");
    cancelBtn.classList.add("hidden");
    updatePostTitleHRO.classList.remove("hidden");
    updatePostTitle.classList.add("hidden");
    updatePostTitle.setAttribute("readonly", "");
    updatePostTextPRO.classList.remove("hidden");
    updatePostTextArea.classList.add("hidden");
    updatePostTextArea.setAttribute("readonly", "");
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

// event listener if blog update button clicked
postUpdateBtn.addEventListener("click", updateBlogContent);
// event listener if blog cancel button clicked
cancelBtn.addEventListener("click", cancelUpdateBlogContent);
