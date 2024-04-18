const depositoBasuraForm = document.querySelector('.deposito-basura form');
const tipoBasuraSelect = document.querySelector('#tipoBasura');
const cantidadBasuraInput = document.querySelector('#cantidadBasura');
const listaRecompensas = document.querySelector('#listaRecompensas');

depositoBasuraForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const tipoBasura = tipoBasuraSelect.value;
  const cantidadBasura = parseFloat(cantidadBasuraInput.value);

  // Calcular la recompensa en base al tipo y cantidad de basura
  const recompensa = calcularRecompensa
