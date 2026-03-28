document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  // Default is dark mode — apply light only if saved
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    if (toggleBtn) toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    if (toggleBtn) toggleBtn.textContent = "☀ Light Mode";
  }

  // Toggle button (if exists on page)
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");

      if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark Mode";
      } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀ Light Mode";
      }
    });
  }
});