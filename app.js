import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { uid, loadTodos, saveTodos } from "./utils/helpers.js";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");

let todos = loadTodos();

function render() {
  list.innerHTML = "";
  emptyState.style.display = todos.length ? "none" : "block";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.done ? " done" : "");

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;
    text.addEventListener("click", () => toggle(todo.id));

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => remove(todo.id));

    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);
  });
}

function addTodo(textValue) {
  const value = textValue.trim();
  if (!value) return;
  todos.push({ id: uid(), text: value, done: false });
  saveTodos(todos);
  render();
}

function toggle(id) {
  todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  saveTodos(todos);
  render();
}

function remove(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos(todos);
  render();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(input.value);
  input.value = "";
  input.focus();
});

renderHeader(document.getElementById("header"));
renderFooter(document.getElementById("footer"));
render();
