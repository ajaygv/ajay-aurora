export function renderFooter(mount) {
  const footer = document.createElement("footer");
  footer.className = "app-footer";

  const year = new Date().getFullYear();
  footer.textContent = `Aurora · ${year}`;

  mount.replaceWith(footer);
}
