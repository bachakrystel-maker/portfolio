document.addEventListener("DOMContentLoaded", () => {
    // Affichage dynamique de l'année
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = `• ${new Date().getFullYear()}`;
    }

    // Effet dynamique au survol des cartes
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            card.style.transform = `translate(${x * 0.002}px, ${y * 0.002}px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "none";
            card.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        });
    });
});
