var obj; 

function imgSlider(image) {
    obj = image;
    document.querySelector('.pepsi').src = image;
}

function changeBgColor() {
    if (obj == "./img/pepsi001.png") {
        const sec = document.querySelector('.sec');
        sec.style.background = "#0062be"
    }
    else if (obj == "./img/pepsi002.png") {
        const sec = document.querySelector('.sec');
        sec.style.background = "#e60c2c"
    }
    else {
        const sec = document.querySelector('.sec');
        sec.style.background = "#1e1e1e"
    }
    
}