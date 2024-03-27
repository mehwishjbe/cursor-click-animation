const cursorAnimation = document.querySelector(".cursor");
const cursors = document.querySelectorAll(".cursor");

document.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorAnimation.style.top = y + "px";
  cursorAnimation.style.left = x + "px";

  cursors.forEach((cursor) => {
    cursor.classList.add(".cursor");
  });

  let cursorClone = cursorAnimation.cloneNode(true);
  document.querySelector("body").appendChild(cursorClone);

  setTimeout(() => {
    cursorClone.remove();
  }, 1000);
});
