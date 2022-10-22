var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4 ){ // slides the images through all 4 images, when the slide show comes to the last image it restarts at number 1
        counter = 1;
    }
}, 5000);