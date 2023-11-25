function mostrarDescripcion(elemento) {
    // Obtén el elemento de descripción dentro del artículo
    var descripcion = elemento.querySelector('.descripcion');
  
    // Alternar la clase visible para mostrar u ocultar la descripción
    descripcion.classList.toggle('visible');
  
    // Cambia el texto del botón
    var boton = elemento.querySelector('.ver-mas-btn');
    boton.textContent = descripcion.classList.contains('visible') ? 'Ver menos' : 'Ver más';
  }
  const slider = document.querySelector('.slider');

  function nextSlide() {
      const firstSlide = slider.children[0];
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = 'translateX(' + (-firstSlide.offsetWidth) + 'px)';
      setTimeout(() => {
          slider.style.transition = 'none';
          slider.appendChild(firstSlide);
          slider.style.transform = 'translateX(0)';
      }, 500);
  }

  setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta según sea necesario)



