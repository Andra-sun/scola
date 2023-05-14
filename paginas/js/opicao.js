const menuBtn = document.querySelector('#opcao-btn');
const menuLista = document.querySelector('#opcao-lista');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuLista.classList.toggle('no-border-bottom');
  menuLista.style.display = menuBtn.classList.contains('active') ? 'block' : 'none';
});

menuBtn.addEventListener('blur', () => {
  menuBtn.classList.remove('active');
  menuLista.classList.add('no-border-bottom');
  menuLista.style.display = 'none';
});
