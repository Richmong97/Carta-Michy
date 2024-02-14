$(document).ready(function () {
  $(".container").mouseenter(function () {
    $(".card").css({
      transform: "translateY(-90px)"
    });
  }).mouseleave(function () {
    $(".card").css({
      transform: "translateY(0)"
    });
  });

  var cartaFuera = false;
  var distanciaSubida = 400; // Cambiar el valor según sea necesario

  $(".card").click(function () {
    var velocidadMedia = 550;
  
    if (!cartaFuera) {
      $(this).animate({
        top: "-" + distanciaSubida + "px",
      }, velocidadMedia, function() {
        $(this).animate({
          left: "350px"
        }, velocidadMedia, function() {
          $(this).animate({
            top: "0"
          }, velocidadMedia);
        });
      });
      cartaFuera = true;
    } else {
      $(this).animate({
        top: "-" + distanciaSubida + "px",
      }, velocidadMedia, function() {
        $(this).animate({
          left: "15px"
        }, velocidadMedia, function() {
          $(this).animate({
            top: "0"
          }, velocidadMedia);
        });
      });
      cartaFuera = false;
    }
  });
  

  function createFallingObject(className) {
    const object = document.createElement('div');
    object.className = className;
    document.querySelector('.hearts-container').appendChild(object);

    // Establece posiciones y tamaños aleatorios
    const positionX = Math.random() * window.innerWidth;
    const size = Math.random() * (30 - 10) + 10; // Tamaño entre 10 y 30
    const animationDuration = Math.random() * (3 - 1) + 1; // Duración entre 1 y 3 segundos

    object.style.width = size + 'px';
    object.style.height = size + 'px';
    object.style.left = positionX + 'px';

    // Inicia la animación
    object.animate(
      [
        { transform: 'translateY(-100vh)' },
        { transform: `translateY(${window.innerHeight}px)` },
      ],
      {
        duration: animationDuration * 2000,
        iterations: Infinity,
        easing: 'linear',
      }
    );
  }

  // Genera corazones y rosas cada cierto intervalo de tiempo
  setInterval(function () {
    createFallingObject('falling-heart');
    createFallingObject('falling-rose');
  }, 1000);
});
