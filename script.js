const cursorAnimation = document.querySelector(".cursor");

document.addEventListener("click", (e) => {

    let x = e.clientX;
    let y = e.clientY;

    cursorAnimation.style.top = y + "px";
    cursorAnimation.style.left = x + "px";
    
    let cursorClone = cursorAnimation.cloneNode(true);
    document.querySelector("body").appendChild(cursorClone);

});