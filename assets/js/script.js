// Seleccionamos el modal, la imagen dentro del modal y el contenedor de texto
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const textContainer = document.getElementById("textContainer");

// Seleccionamos todas las imágenes que se pueden expandir
const images = document.querySelectorAll(".expandable-image");

// Recorremos cada imagen para agregarle el evento de clic
images.forEach((image) => {
  image.addEventListener("click", function () {
    // Cambiamos la fuente de la imagen en el modal a la de la imagen seleccionada
    modalImage.src = this.src;
    // Cambiamos el texto del modal al valor de data-text de la imagen seleccionada
    textContainer.textContent = this.getAttribute("data-text"); 
    // Mostramos el modal agregando la clase 'active'
    modal.classList.add("active");
  });
});

// Cerramos el modal al hacer clic en cualquier parte fuera de la imagen
modal.addEventListener("click", function (event) {
  // Verificamos que el clic no haya sido en la imagen (para no cerrar al hacer clic en ella)
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
