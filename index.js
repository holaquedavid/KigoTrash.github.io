window.addEventListener('load', function() {
  setTimeout(function() {
      document.getElementById('miImagen').style.display = 'none'; // Oculta la imagen
      document.getElementById('miPantalla').style.display = 'flex'; // Muestra la pantalla
  }, 5000); // 5000 milisegundos = 5 segundos
});
