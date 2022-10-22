var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px"; // Setting the bar to the wdith of the word
}

item.forEach(link => { // Positioning the bar underneith the word that has been clicked on (navbar)
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
});