const sidenavMenu = document.querySelector('.sidebar-menu');
const sidenavMenuToggle = document.querySelector('.sidebar-menu-toggle');
const sidenavMenuToggleIcon = document.querySelector('.sidebar-menu-toggle i');

console.log(sidenavMenuToggle);
console.log(sidenavMenuToggleIcon);

sidenavMenuToggle.addEventListener('click', function () {
  sidenavMenu.classList.toggle('sidebar-menu-close-anim');
  sidenavMenuToggleIcon.classList.toggle('sidebar-menu-close-icon-rotate');
});

function closeMenuOnSmall() {
  if (window.innerWidth < 1320) {
    sidenavMenu.classList.add('sidebar-menu-close-anim');
    sidenavMenuToggleIcon.classList.add('sidebar-menu-close-icon-rotate');
  } else {
    sidenavMenu.classList.remove('sidebar-menu-close-anim');
    sidenavMenuToggleIcon.classList.remove('sidebar-menu-close-icon-rotate');
  }
}

window.addEventListener('resize', closeMenuOnSmall);

closeMenuOnSmall();
