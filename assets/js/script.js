// window.onscroll detecta el desplazamiento de la ventana, mientras que document.documentElement.scrollTop obtiene los píxeles desplazados.
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  $(document).ready(function () {
    // Smooth scroll
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});