# DX Enhancer Pack (EPack)

### EPack

Developer Experience Enhancer/Management Essentials Extension Pack for Visual Studio Code (EPack)

### Pre-defined settings which you maybe want to use:

1. press `ctrl+shift+p`
2. type `settings`
3. click on `Preferences: Open settings (JSON)` to open your settings.json file
4. add these lines to the `Settings`:

```json
{
  "files.autoSave": "afterDelay",
  "window.zoomLevel": 1,
  "projectManager.openInNewWindowWhenClickingInStatusBar": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Extensions Included

- 1- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) - Easily switch between projects.

- 2- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Improve your code commenting by annotating with alert, informational, TODOs, and more!

- 3- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - A customizable extension for colorizing matching brackets.

- 4- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - Markdown Preview Enhanced ported to vscode.

- 5- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - Markdown Preview Enhanced ported to vscode.

- 6- [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle) - A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.

## Relevant Links

- [Github](https://github.com/SeyyedKhandon/epack)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=SeyyedKhandon.epack)

## Generate Package

You can customize this pack via forking and changing it in the `package.json` and use these instructions to generate a new one:

> If you don't have [node.js](https://nodejs.org/en/), first download and install the latest version. then you have to install `vsce` via `npm install -g vsce`.

1. `vsce package`
2. `vsce publish`

**Enjoy!**
