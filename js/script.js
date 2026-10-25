// Theme toggle (remembers choice, falls back to system preference)
const root = document.documentElement;
const btn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {}
applyTheme(
  saved ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
);

btn?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});
