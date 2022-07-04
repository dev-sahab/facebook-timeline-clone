// get elements
const list = document.querySelectorAll('.nav li');

list.forEach((item) =>
    item.addEventListener('click',activeLink)
);