export interface GeneralObject {
  [index: string]: string | number | boolean | GeneralObject;
}

export const defaultSettings = {
  "files.autoSave": "afterDelay",
  "explorer.compactFolders": false,
  "editor.guides.bracketPairs": true,
  "editor.mouseWheelZoom": true,
  "projectManager.openInNewWindowWhenClickingInStatusBar": true,
  "errorLens.statusBarColorsEnabled": true,
  "errorLens.statusBarMessageEnabled": true,
  "errorLens.statusBarMessageType": "closestProblem",
  "errorLens.followCursor": "closestProblem",
  "errorLens.gutterIconsEnabled": true,
  "errorLens.scrollbarHackEnabled": true,
  "errorLens.fontStyleItalic": true,
};
