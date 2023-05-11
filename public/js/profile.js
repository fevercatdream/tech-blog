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

const allUpdateBtns = document.querySelectorAll(".post-update-btn");
allDelBtns.forEach(button=>{
    button.addEventListener("click",()=>{
        const idToUpdate = button.getAttribute("data-blogpost-update-id");
        fetch(`/api/blogpost/${idToUpdate}`,{
            method:"PUT",
        }).then(res=>{
            if(res.ok){
                location.reload()
            } else {
                alert("Something went wrong")
            }
        })
    })
})

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
