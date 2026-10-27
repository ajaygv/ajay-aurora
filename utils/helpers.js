const STORAGE_KEY = "aurora.todos";

export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    // ignore write errors (private mode, quota, etc.)
  }
}
