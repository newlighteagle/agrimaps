import { setupThemeToggle } from "../../../../src/shared/theme.ts";

setupThemeToggle();

const statusEl = document.querySelector<HTMLParagraphElement>("#map-status");

if (statusEl) {
  statusEl.textContent = "The map is coming soon";
}
