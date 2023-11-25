function mostrarDescripcion(elemento) {
    // Obtén el elemento de descripción dentro del artículo
    var descripcion = elemento.querySelector('.descripcion');
  
    // Alternar la clase visible para mostrar u ocultar la descripción
    descripcion.classList.toggle('visible');
  
    // Cambia el texto del botón
    var boton = elemento.querySelector('.ver-mas-btn');
    boton.textContent = descripcion.classList.contains('visible') ? 'Ver menos' : 'Detalles';
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

  function mostrarVistaPrevia() {
    const input = document.getElementById('imagen');
    const vistaPrevia = document.getElementById('vista-previa');

    // Verifica si se seleccionó un archivo
    if (input.files && input.files[0]) {
        const lector = new FileReader();

        lector.onload = function (e) {
            vistaPrevia.src = e.target.result;
            vistaPrevia.style.display = 'block';
        };

        lector.readAsDataURL(input.files[0]);
    }
}

// Escucha el cambio en el input de la imagen
document.getElementById('imagen').addEventListener('change', mostrarVistaPrevia);
/*function enviarFormulario() {
    const formulario = document.getElementById('formulario');
            const datos = new FormData(formulario);

            // Enviar los datos al backend (cambia la URL según tu configuración)
            fetch('URL_DEL_BACKEND', {
                method: 'POST',
                body: datos
            })
            .then(response => response.json())
            .then(data => {
                // Aquí puedes manejar la respuesta del backend
                console.log('Respuesta del backend:', data);

                // Después de enviar el formulario, redirige a la página de productos
                window.location.href = 'Productos.html';
            })
            .catch(error => {
                console.error('Error al enviar el formulario:', error);
            });
        }*/

    // Después de enviar el formulario, redirige a la página de productos
    //window.location.href = 'Productos.html';
