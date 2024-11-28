document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const downloadUrl = "https://www.mediafire.com/file/looz2whnoptiuap/PYMESGPS.apk/file";

    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(downloadUrl)}`;

    if (isMobile) {
        // Mostrar botón con diseño único
        content.innerHTML = `
            <button class="custom-button" id="download-button">
                <span class="custom-button__text">Descargar</span>
                <span class="custom-button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="custom-svg">
                        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                        <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                </span>
            </button>
            <p class="custom-qr-text">Click para descargar PYMEsGPS</p>
        `;

        // Evento del botón
        document.getElementById("download-button").addEventListener("click", () => {
            window.location.href = downloadUrl;
        });
    } else {
        // Mostrar QR con diseño único
        content.innerHTML = `
            <div class="custom-card">
                <div class="custom-bg"></div>
                <div class="custom-blob"></div>
                <img src="${qrApiUrl}" alt="Código QR" class="custom-qr">
            </div>
            <p class="custom-qr-text">Escanea el código QR para descargar PYMEsGPS</p>
        `;
    }

    if (!content.innerHTML) {
        content.innerHTML = `<p>No se pudo detectar el dispositivo. Intenta nuevamente.</p>`;
    }
});
