export function renderHeader(mount) {
  const header = document.createElement("header");
  header.className = "app-header";

  const title = document.createElement("h1");
  title.textContent = "Aurora";

  const tagline = document.createElement("p");
  tagline.textContent = "A tiny to-do list.";

  header.appendChild(title);
  header.appendChild(tagline);
  mount.replaceWith(header);
}
