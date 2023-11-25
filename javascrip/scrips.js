function mostrarDescripcion(elemento) {
    // Obtén el elemento de descripción dentro del artículo
    var descripcion = elemento.querySelector('.descripcion');
  
    // Alternar la clase visible para mostrar u ocultar la descripción
    descripcion.classList.toggle('visible');
  
    // Cambia el texto del botón
    var boton = elemento.querySelector('.ver-mas-btn');
    boton.textContent = descripcion.classList.contains('visible') ? 'Ver menos' : 'Ver más';
  }
  let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Autoplay example (uncomment the line below if you want to enable autoplay)
// setInterval(() => nextSlide(), 5000);