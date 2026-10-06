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
function initSidebarSearch() {
    const searchInput = document.getElementById('site-search');
    const searchStatus = document.getElementById('search-status');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mobileToggle = document.getElementById('sidebar-mobile-toggle');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            const groups = document.querySelectorAll('.nav-details');

            groups.forEach((group) => {
                const textNodes = group.querySelectorAll('a, .accordion-toggle span');
                let match = false;

                textNodes.forEach((node) => {
                    const text = (node.textContent || '').toLowerCase();
                    const isMatch = text.includes(query);
                    node.classList.toggle('search-match', isMatch);
                    if (isMatch) match = true;
                });

                group.open = !!query && match;
            });

            if (searchStatus) {
                searchStatus.textContent = query
                    ? (document.querySelector('.search-match') ? `Mostrando coincidencias para "${searchInput.value.trim()}"` : 'No hay coincidencias en el menú')
                    : '';
            }

            if (!query) {
                groups.forEach((group) => group.removeAttribute('open'));
            }
        });
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            const bodyCollapsed = document.body.classList.toggle('sidebar-collapsed');
            const sidebarCollapsed = sidebar ? sidebar.classList.toggle('collapsed') : false;
            const isCollapsed = bodyCollapsed || sidebarCollapsed;
            const expanded = !isCollapsed;

            sidebarToggle.setAttribute('aria-expanded', String(expanded));
            sidebarToggle.setAttribute('aria-label', expanded ? 'Plegar menú' : 'Expandir menú');

            const toggleText = sidebarToggle.querySelector('span');
            if (toggleText) toggleText.textContent = expanded ? 'Plegar menú' : 'Expandir menú';

            const icon = sidebarToggle.querySelector('i');
            if (icon) icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';

            document.querySelectorAll('.nav-details').forEach((details) => {
                if (isCollapsed) details.removeAttribute('open');
            });
        });
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open');
        });
    }

    document.querySelectorAll('.nav-details').forEach((details) => details.removeAttribute('open'));

    const titulo = document.querySelector('#home, #herramientas');
    if (titulo) {
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
    }

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'scale(1.02)';
            card.style.borderLeft = '5px solid #17a2b8';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.borderLeft = 'none';
        });
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebarSearch);
} else {
    initSidebarSearch();
}

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
document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector("#mundo");

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
