// Mostrar modal
function mostrarInfo(titulo, descripcion) {
    document.getElementById('info-titulo').innerText = titulo;
    document.getElementById('info-texto').innerText = descripcion;

    document.getElementById('modal').style.display = 'flex';
}

// Cerrar modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Pantalla completa
function activarPantallaCompleta() {
    const elementoMapa =
        document.getElementById('componente-mapa');

    if (!document.fullscreenElement) {

        if (elementoMapa.requestFullscreen) {
            elementoMapa.requestFullscreen();
        }
        else if (elementoMapa.webkitRequestFullscreen) {
            elementoMapa.webkitRequestFullscreen();
        }
        else if (elementoMapa.msRequestFullscreen) {
            elementoMapa.msRequestFullscreen();
        }

    } else {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}