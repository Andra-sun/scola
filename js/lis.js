const salaBtn = document.querySelector('#sala-btn');
const salaLista = document.querySelector('#sala-lista');

salaBtn.addEventListener('click', () => {
  salaBtn.classList.toggle('active');
  salaLista.classList.toggle('no-border-bottom');
  salaLista.style.display = salaBtn.classList.contains('active') ? 'block' : 'none';
});

salaBtn.addEventListener('blur', () => {
  salaBtn.classList.remove('active');
  salaLista.classList.add('no-border-bottom');
  salaLista.style.display = 'none';
});
