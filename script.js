const btn = document.getElementById('menu-btn');
const sidebar = document.getElementById('menu')

function navToggle(){
  btn.classList.toggle('open');
  sidebar.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);