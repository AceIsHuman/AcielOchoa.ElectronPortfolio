const { app, BrowserWindow } = require('electron');
const path = require('path');

// Enable electron remote to communicate with render process
require('@electron/remote/main').initialize();

const isMacOS = process.platform === 'darwin';
const isDev = !app.isPackaged;

function createWindow() {
  // Create browser window
  const win = new BrowserWindow({
    width: 1200,
    height: 1080,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  // Set load URL
  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  win.loadURL(startUrl);
  win.once('ready-to-show', () => {
    win.show();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // Quit when all windows are closed, except on macOS
  if (!isMacOS) app.quit();
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
