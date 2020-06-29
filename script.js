const buttons = document.querySelectorAll(".button")

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('mousedown', swithShadow);
    buttons[i].addEventListener('mouseup', swithShadow);
}

function swithShadow(){
    this.classList.toggle('shadow');
}