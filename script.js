const open = document.getElementById('openL');
const encontranos = document.getElementById('encontranos');
const close = document.getElementById('closeL');

const open2 = document.getElementById('openH');
const horarios = document.getElementById('horarios');
const close2 = document.getElementById('closeH');

const open3 = document.getElementById('openC');
const contacto = document.getElementById('contacto');
const close3 = document.getElementById('closeC');


open.addEventListener('click', () => {
    encontranos.classList.add('show');
});
close.addEventListener('click' , () => {
    encontranos.classList.remove('show');
});



open2.addEventListener('click', () => {
    horarios.classList.add('show');
});
close2.addEventListener('click' , () => {
    horarios.classList.remove('show');
});



open3.addEventListener('click', () => {
    contacto.classList.add('show');
});
close3.addEventListener('click' , () => {
    contacto.classList.remove('show');
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menus");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}