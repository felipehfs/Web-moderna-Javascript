let state = false;

window.onload = function () {
    let brand = document.getElementById("brand");
    let menu = document.querySelector(".menu");

    brand.onclick = function(){
        let display = state === true ? 'block' : 'none';
        menu.style.display = display;
        state = !state;
    }
}