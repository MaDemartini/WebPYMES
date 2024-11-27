document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    // Detectar dispositivo
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Mostrar botón de descarga
        content.innerHTML = `
            <button id="download-button">Descargar PYMEsGPS</button>
            <p>O copia este enlace en tu navegador: <a href="https://www.mediafire.com/file/9w79nte46foxsyd/PYMESGPS.apk/file" target="_blank">Descargar PYMEsGPS</a></p>
        `;

        // Evento del botón
        document
            .getElementById("download-button")
            .addEventListener("click", () => {
                window.location.href = "https://www.mediafire.com/file/9w79nte46foxsyd/PYMESGPS.apk/file";
            });
    } else {
        // Mostrar QR
        content.innerHTML = `
            <p>Escanea el siguiente código QR para descargar PYMEsGPS:</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.mediafire.com/file/9w79nte46foxsyd/PYMESGPS.apk/file" alt="Código QR">
            <p>O copia este enlace en tu navegador: <a href="https://www.mediafire.com/file/9w79nte46foxsyd/PYMESGPS.apk/file" target="_blank">Descargar PYMEsGPS</a></p>
        `;
    }

    // Validación adicional
    if (!isMobile && !content.innerHTML) {
        content.innerHTML = `
            <p>No se pudo detectar el dispositivo. Intenta nuevamente.</p>
        `;
    }
});
