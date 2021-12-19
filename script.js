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


