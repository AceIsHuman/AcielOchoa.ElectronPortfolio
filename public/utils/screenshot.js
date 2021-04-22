const { BrowserWindow, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

function screenshot(event) {
  const win = BrowserWindow.getFocusedWindow();
  win.webContents.capturePage({ x: 0, y: 0 }).then((img) => {
    dialog
      .showSaveDialog({
        title: 'Select file path to save screenshot',
        defaultPath: path.join(__dirname, '../assets/image.png'),
        buttonLabel: 'Save',
        filters: [{ name: 'Image Files', extensions: ['png'] }],
        properties: [],
      })
      .then((file) => {
        if (!file.canceled) {
          fs.writeFile(
            file.filePath.toString(),
            img.toPNG(),
            'base64',
            (err) => {
              if (err) throw err;
              event.sender.send('alertRenderer', {
                type: 'success',
                message: `Screenshot saved!\n${file.filePath.toString()}`,
              });
            }
          );
        }
      })
      .catch((err) => console.error(err));
  });
}

module.exports = screenshot;
