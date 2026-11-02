import { setupThemeToggle } from "./shared/theme.ts";

setupThemeToggle();

const yearEl = document.querySelector<HTMLSpanElement>("#year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
