function showLogin() {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupForm").style.display = "none";

        document.getElementById("loginTab").classList.add("active");
    document.getElementById("signupTab").classList.remove("active");
    }

    function showSignup() {
        document.getElementById("signupForm").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
        
        document.getElementById("signupTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
    }   

    // Default view
    window.onload = showLogin;
