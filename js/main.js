const links = document.querySelectorAll('ul li a');
const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.parentElement.classList.add('active');
  }
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

