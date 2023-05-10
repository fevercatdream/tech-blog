//login form
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        email:document.querySelector("#login-email").value,
        password:document.querySelector("#login-password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Something went wrong")
        }
    })
})

//signup form
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        email:document.querySelector("#signup-email").value,
        name:document.querySelector("#signup-username").value,
        password:document.querySelector("#signup-password").value,
    }
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Something went wrong")
        }
    })
})

const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  