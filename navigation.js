let navbar = document.getElementById('navbar')
let navbtn = document.getElementById('navbtn')

navbtn.addEventListener('click', function () {
    if (navbar.className === "navbar") {
        navbar.className += " responce";
    } else {
        navbar.className = "navbar";
    }
})