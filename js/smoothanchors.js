document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault(); // This prevents the normal default code from taking over, allowing my smooth scrolling code to take place
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});