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

  function calcularRecompensa(tipoBasura, cantidadBasura) {
  // Implementar la lógica para calcular la recompensa
  // En este ejemplo, se asigna una cantidad de puntos fija por cada tipo de basura
  let puntosBasura = 0;
  switch (tipoBasura) {
    case 'plastico':
      puntosBasura = 1;
      break;
    case 'vidrio':
      puntosBasura = 2;
      break;
    case 'metal':
      puntosBasura = 3;
      break;
    case 'organico':
      puntosBasura = 4;
      break;
    case 'papel':
      puntosBasura = 5;
      break;
  }

  const recompensaTotal = puntosBasura * cantidadBasura;
  return recompensaTotal;
}


  function actualizarListaRecompensas(recompensa) {
  // Crear un nuevo elemento de lista para la recompensa
  const li = document.createElement('li');
  li.textContent = `Ganaste ${recompensa} puntos por reciclar.`;

  // Agregar el nuevo elemento a la lista
  listaRecompensas.appendChild(li);
}


  depositoBasuraForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const tipoBasura = tipoBasuraSelect.value;
  const cantidadBasura = parseFloat(cantidadBasuraInput.value);

  // Calcular la recompensa
  const recompensa = calcularRecompensa(tipoBasura, cantidadBasura);

  // Actualizar la lista de recompensas
  actualizarListaRecompensas(recompensa);

  // Mostrar un mensaje de confirmación (opcional)
  alert(`¡Felicidades! Has ganado ${recompensa} puntos por reciclar.`);
});


                            
