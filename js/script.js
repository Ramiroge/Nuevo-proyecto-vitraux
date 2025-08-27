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

// Modo Nocturno
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('modo-btn');
  if (!btn) return;

  // Detectar preferencia del sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
  const initial = saved || (prefersDark ? 'dark' : 'light');

  setTheme(initial);

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
});


// Menu Hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const accionesHeader = document.querySelector(".acciones-header");

menuToggle.addEventListener("click", () => {
  accionesHeader.classList.toggle("activo");
});

document.querySelectorAll(".acciones-header a").forEach(link => {
  link.addEventListener("click", () => {
    accionesHeader.classList.remove("activo");
  });
});

