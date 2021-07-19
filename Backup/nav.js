let navBarToggle = document.getElementById('js-nav-toggle');
let mainNav = document.getElementById('js-menu');
let logo = document.getElementById('logo-id');

navBarToggle.addEventListener("click",function() {
    mainNav.classList.toggle('active');
    logo.classList.toggle('noneActive');
});
