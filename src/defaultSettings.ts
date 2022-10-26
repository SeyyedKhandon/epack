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
  "errorLens.statusBarMessageType": "closestSeverity",
  "errorLens.followCursor": "closestProblem",
  "errorLens.scrollbarHackEnabled": true,
  "errorLens.fontStyleItalic": true,
  "errorLens.messageBackgroundMode": "message",
  "workbench.colorCustomizations": {
    "editorInfo.foreground": "#0080ff6a",
  },
};
