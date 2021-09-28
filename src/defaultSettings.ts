import { GeneralObject } from "./util";

export const defaultSettings = [
  { "files.autoSave": "afterDelay" },
  { "explorer.compactFolders": false },
  { "projectManager.openInNewWindowWhenClickingInStatusBar": true },
  { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  { "editor.formatOnSave": true },
  { "errorLens.statusBarColorsEnabled": true },
  { "errorLens.statusBarMessageEnabled": true },
  { "errorLens.statusBarMessageType": "closestProblem" },
  { "errorLens.followCursor": "closestProblem" },
  { "errorLens.gutterIconsEnabled": true },
  { "errorLens.scrollbarHackEnabled": true },
  { "errorLens.fontStyleItalic": true },
] as GeneralObject[];
