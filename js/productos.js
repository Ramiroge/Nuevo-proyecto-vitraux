function abrirDetalle(id) {
    const modal = document.getElementById("modal-" + id);  // Aquí debe ser 'modal-lampara1'
    const fondo = document.getElementById("fondoModal");
    if (modal && fondo) {
      modal.classList.add("mostrar");
      fondo.classList.add("mostrar");
    }
}

function cerrarModal() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove("mostrar"));
    const fondo = document.getElementById("fondoModal");
    if (fondo) {
      fondo.classList.remove("mostrar");
    }
}
