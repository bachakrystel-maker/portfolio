// Mise à jour automatique de l'année dans le footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = `• ${new Date().getFullYear()}`;
    }

    // Interaction subtile de déplacement sur les cartes de projet
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            
            // Applique une translation légère de façon dynamique
            card.style.transform = `translate(${x * 0.005}px, ${y * 0.005}px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "none";
            card.style.transition = "transform 0.4s ease, border-color 0.3s ease";
        });
    });
});
