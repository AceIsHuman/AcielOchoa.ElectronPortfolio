const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const { app, BrowserWindow } = require('electron');

let mainWindow;
const isMacOS = process.platform === 'darwin';

function createWindow() {
  // Create browser window
  mainWindow = new BrowserWindow();

  // Set load URL
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true,
    });
  mainWindow.loadURL(startUrl);

  // Open dev tools is environment is not production
  if (process.environment !== 'production')
    mainWindow.webContents.openDevTools();
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
