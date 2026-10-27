# Aurora

A tiny to-do list built with plain HTML, CSS and JavaScript. No framework, no build step.

## Getting started

You need a modern browser and, to use ES modules, a local server (opening the
file directly over `file://` will block the module imports).

```bash
# from the project folder, pick either:
npx serve .                  # http://localhost:3000
python3 -m http.server 8000  # http://localhost:8000
```

Then open the address it prints.

## Project layout

```text
aurora/
├── index.html          # markup + mount points
├── style.css           # styles
├── app.js              # app logic (add / toggle / delete)
├── components/
│   ├── header.js       # header render
│   └── footer.js       # footer render
└── utils/
    └── helpers.js      # id generation + localStorage
```

## Features

- Add, complete (click the text) and delete tasks
- Tasks persist in `localStorage`

## Contributing

Commit messages follow Conventional Commits: `type(scope): subject`.
