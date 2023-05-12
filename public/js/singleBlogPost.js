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
