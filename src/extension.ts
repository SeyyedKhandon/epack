import * as vscode from "vscode";
import { defaultSettings, GeneralObject } from "./defaultSettings";

const updateUserSettings = async (settings: GeneralObject) => {
  Object.entries(settings).forEach(async ([key,value]) => {
    await vscode.workspace
      .getConfiguration()
      .update(key, value, vscode.ConfigurationTarget.Global);
  });
};
export async function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "DX Enhancer" is now active!');
  let disposable = vscode.commands.registerCommand(
    "epack.updateConfig",
    async () => {
      console.log(JSON.stringify(defaultSettings, null, 1));
      await updateUserSettings(defaultSettings);
      await vscode.window.showInformationMessage(
        "DX Enhancer Config has been updated."
      );
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
