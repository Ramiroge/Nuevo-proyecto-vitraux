// Resaltar el link activo
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("scroll", function () {
    const rows = document.querySelectorAll("#el-vitraux .row");
    rows.forEach(row => {
        const position = row.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            row.classList.add("appear");
        }
    });
});



