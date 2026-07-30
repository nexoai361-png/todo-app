# Simple Code Editor

This is a web-based code editor powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/) - the same editor that powers VS Code.

## Features

- Syntax highlighting for JavaScript (and many other languages)
- Dark theme (VS Code Dark)
- Auto-resizing to fit browser window
- Basic keyboard shortcuts (Ctrl+S to save demo)
- Line numbers, gutter, minimap (can be enabled)

## How to Use

1. Open `editor.html` in any modern web browser
2. Start typing code in the editor
3. Enjoy VS Code-like editing experience in your browser!

## Supported Languages

The editor can be easily configured to support many languages including:
- JavaScript/TypeScript
- Python
- Java
- C/C++
- HTML/CSS
- JSON
- And many more...

To change the language, modify the `language` property in the editor initialization code.

## Customization

You can customize the editor by modifying the options in `editor.html`:

- **Theme**: Change `'vs-dark'` to `'vs'` (light) or other available themes
- **Language**: Change `'javascript'` to any supported language
- **Initial Content**: Modify the `value` property
- **Font Size**: Add `fontSize: 14` to editor options
- And many more options available in the [Monaco Editor API](https://microsoft.github.io/monaco-editor/api/index.html)

## Technical Details

This editor uses:
- Monaco Editor v0.47.0 loaded from CDN
- RequireJS for module loading
- Pure HTML/CSS/JavaScript - no build step required

## Note

This is a simplified editor for demonstration purposes. For a full-featured local development environment, consider:
- [VS Code](https://code.visualstudio.com/) (the real thing!)
- [GitHub Codespaces](https://github.com/features/codespaces)
- [Gitpod](https://www.gitpod.io/)