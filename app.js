const title = document.querySelector("div.Hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "orange";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);