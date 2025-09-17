document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#filters [data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  const emptyState = document.getElementById("empty-state");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // reset button states
      buttons.forEach((b) => b.classList.remove("btn-active"));
      btn.classList.add("btn-active");

      let visibleCount = 0;

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      // toggle empty state
      if (emptyState) {
        emptyState.classList.toggle("hidden", visibleCount > 0);
      }
    });
  });
});
