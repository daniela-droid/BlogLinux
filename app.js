// let num1=8
// let num="8"

// if (num1 === num) {
//     console.log("No son iguales")
// }else{
//      console.log("Son iguales")
// }

// const dayOfweek = 'Wenesday';

// if (dayOfweek === 'Monday'){
//     console.log("Es lunes")
// }else if(dayOfweek === 'Saturday'){
//       console.log("Sabado es dia de fiesta")
// }else if(dayOfweek === 'Friday'){
//     console.log("Es viernes")
// }else{
//     console.log("ninguno de los anteriores")
// }

// const password = prompt("ingrese nueva contrasenia");
// //pass con + de 6 caracteres
// if(password.length >= 6){
//    if (password.indexOf(' ') === -1){
//     console.log("pass validada");
// }else{
//       console.log("la pass no puede tener espacios");
// }

// }else{
//     console.log("demasiado corta, debe tener mas caracteres!");
// }
//pass sin espacios
document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de escritura en el saludo (Efecto Terminal)
    const titulo = document.querySelector('#home','#herramientas');
    
    const texto = titulo.innerText;
    titulo.innerText = '';
    let i = 0;

    function escribir() {
        if (i < texto.length) {
            titulo.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    escribir();

    // 2. Animación de las tarjetas de proyectos al pasar el mouse
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'scale(1.02)';
            card.style.borderLeft = '5px solid #17a2b8'; // Color info de Bootstrap
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.borderLeft = 'none';
        });
    });

    // 3. Suavizar el scroll de los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// const day= 5;
// switch (day) {
//     case 1:
//         console.log("lunes 1");
//         break;
//     case 2:
//         console.log("martes 2");
//         break;
//     case 3:
//         console.log("miercoles 3");
//         break;
//     case 4:
//         console.log("jueves 4");
//         break;
//     case 5:
//         console.log("viernes 5");
//         break;
//     default:
//         break;
// }
