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

  // 2. Lógica para el menú desplegable en pantallas móviles
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu) {
    // Abrir/Cerrar menú
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });

    // Cerrar menú al presionar cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }
});