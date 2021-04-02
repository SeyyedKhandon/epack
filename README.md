# Visual Studio Code Git Extension Pack (GPack)

### GPack

Git Essentials Extension Pack for Visual Studio Code (GPack)

> These are some of my favorite git extensions which makes `VSCode` git management like `WebStorm`.

**Notes**:

- You can use `Local History` instead of `Checkpoints`, it has a closer experience to `Webstorm` `Local History`, but it can be annoying because will create anywhere a `.history` folder.
  - [Local History](https://marketplace.visualstudio.com/items?itemName=xyz.local-history) - Save files into local history like `Webstorm` localhistory, to have a checkpoints on each save change which you are working.
  -

## Extensions Included

- 1- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) - Easily switch between projects.

- 2- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Improve your code commenting by annotating with alert, informational, TODOs, and more!

- 3- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - A customizable extension for colorizing matching brackets.

- 4- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - Markdown Preview Enhanced ported to vscode.

## Relevant Links

- [Github](https://github.com/SeyyedKhandon/gpack)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=SeyyedKhandon.gpack)

## Generate Package

You can customize this pack via forking and changing it in the `package.json` and use these instructions to generate a new one:

> If you don't have [node.js](https://nodejs.org/en/), first download and install the latest version. then you have to install `vsce` via `npm install -g vsce`.

1. `vsce package`
2. `vsce publish`

**Enjoy!**
