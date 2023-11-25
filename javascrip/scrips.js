function mostrarDescripcion(elemento) {
    // Obtén el elemento de descripción dentro del artículo
    var descripcion = elemento.querySelector('.descripcion');
  
    // Alternar la clase visible para mostrar u ocultar la descripción
    descripcion.classList.toggle('visible');
  
    // Cambia el texto del botón
    var boton = elemento.querySelector('.ver-mas-btn');
    boton.textContent = descripcion.classList.contains('visible') ? 'Ver menos' : 'Ver más';
  }