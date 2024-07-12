const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$('#enviarCorreo').click(function() {
    alert('El correo fue enviado correctamente...');
});

// Función que se ejecuta cuando ocurre el evento de desplazamiento en la ventana
window.onscroll = function() {
    // Obtén el elemento de la barra de navegación por su ID
    var navbar = document.getElementById('navbar');

    // Verifica la cantidad de desplazamiento vertical de la página
    if (document.documentElement.scrollTop > 50) {
        // Agrega la clase 'scrolled' al elemento de la barra de navegación cuando el desplazamiento es mayor a 50 píxeles
        navbar.classList.add('scrolled');
    } else {
        // Remueve la clase 'scrolled' del elemento de la barra de navegación cuando el desplazamiento es menor o igual a 50 píxeles
        navbar.classList.remove('scrolled');
    }
};

  $(document).ready(function () {
    // Función para el desplazamiento suave al hacer clic en enlaces de navegación
    $('a.nav-link').on('click', function (event) {
        // Verifica que el hash del enlace no esté vacío
        if (this.hash !== '') {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el hash del enlace
            const hash = this.hash;

            // Realiza la animación de desplazamiento suave
            $('html, body').animate({
                scrollTop: $(hash).offset().top  // Desplaza hasta la parte superior del elemento con el hash
            }, 1000, function () {
                // Actualiza la URL con el hash después de completar la animación
                window.location.hash = hash;
            });
        }
    });
});

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el elemento del carousel por su ID
    const myCarouselElement = document.querySelector('#myCarouselElement');

    // Inicializa el carousel utilizando la clase Carousel de Bootstrap
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,  // Intervalo de cambio de imágenes en milisegundos (en este caso, cada 2 segundos)
        touch: false     // Deshabilita el desplazamiento táctil para dispositivos móviles
    });
});
