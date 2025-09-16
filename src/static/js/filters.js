document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#filters button");
  const cards = document.querySelectorAll("#project-grid .card");
  const emptyState = document.getElementById("empty-state");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button styling
      buttons.forEach(btn => btn.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");

      let visibleCount = 0;

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      // Toggle empty state
      if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
      } else {
        emptyState.classList.add("hidden");
      }
    });
  });
});
