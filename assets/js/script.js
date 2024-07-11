// window.onscroll detecta el desplazamiento de la ventana, mientras que document.documentElement.scrollTop obtiene los píxeles desplazados.
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

