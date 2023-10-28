const openMenu = document.querySelector('.menu-wrapper');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', e => {
  openMenu.classList.toggle('active-menu');
});
