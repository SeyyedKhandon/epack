export interface GeneralObject {
  [index: string]: string | number | boolean | GeneralObject;
}

export const defaultSettings = {
  "files.autoSave": "afterDelay",
  "window.zoomLevel": 1,
  "editor.wordWrap": "on",
  "workbench.editor.labelFormat": "short",
  "explorer.compactFolders": false,
  "editor.guides.bracketPairs": true,
  "editor.mouseWheelZoom": true,
  "projectManager.openInNewWindowWhenClickingInStatusBar": true,
  "errorLens.gutterIconsEnabled": false,
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
