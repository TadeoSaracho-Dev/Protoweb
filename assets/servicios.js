const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModal = document.getElementById("closeModal");



const servicesInfo = {
    web: {
    title: "Desarrollo Web",
    text: "Creamos landing pages, tiendas online, blogs y sistemas a medida. Utilizamos HTML, CSS, JS y frameworks modernos."
},
    seo: {
    title: "SEO Profesional",
    text: "Mejoramos tu ranking en Google con optimización interna, palabras clave, velocidad y estructura técnica."
    },
    design: {
    title: "Diseño UI/UX",
    text: "Diseños profesionales, modernos, minimalistas y enfocados en la experiencia del usuario."
    }
};

// Abrir modal desde cualquier card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
    const serviceKey = card.getAttribute("data-service");

    modalTitle.textContent = servicesInfo[serviceKey].title;
    modalText.textContent = servicesInfo[serviceKey].text;

    modal.style.display = "flex";
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar clickeando afuera
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});
