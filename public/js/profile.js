document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    const blogPostObj = {
        title:document.querySelector("#title").value,
        blog_post:document.querySelector("#blog_post").value,
        comment:document.querySelector("#comment").value,
    }
    fetch("/api/blogposts",{
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

const allDelBtns = document.querySelectorAll(".del-btn");
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

