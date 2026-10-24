document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar la lista de servicios desde services-data.js
  const container = document.getElementById("services-grid");

  if (typeof servicesData !== "undefined" && Array.isArray(servicesData)) {
    servicesData.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";

      card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="service-img" loading="lazy">
        <div class="service-info">
          <div class="service-header">
            <h3 class="service-title">${service.title}</h3>
            <span class="service-price">${service.price}</span>
          </div>
          <p class="service-desc">${service.description}</p>
        </div>
      `;

      container.appendChild(card);
    });
  } else {
    console.error("Error: No se encontró el archivo de datos services-data.js");
  }

  // 2. Lógica para el menú desplegable
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu) {
    const icon = menuToggle.querySelector("i");

    const setMenuOpen = isOpen => {
      navMenu.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      if (icon) icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    };

    menuToggle.addEventListener("click", () => {
      setMenuOpen(!navMenu.classList.contains("active"));
    });

    // Cerrar menú al presionar cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && navMenu.classList.contains("active")) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });
  }
});