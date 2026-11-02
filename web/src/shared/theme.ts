type Theme = "light" | "dark";

const STORAGE_KEY = "agrimaps-theme";

function getStartTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

export function setupThemeToggle(): void {
  let theme = getStartTheme();
  applyTheme(theme);

  const button = document.querySelector<HTMLButtonElement>("#theme-toggle");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  });
}
