 
document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector("#sobremi");

    if (titulo) {
        const texto = titulo.textContent;
        titulo.textContent = "";

        let i = 0;

        function escribir() {
            if (i < texto.length) {
                titulo.textContent += texto.charAt(i);
                i++;

                setTimeout(escribir, 50);
            }
        }

        escribir();
    }
});
