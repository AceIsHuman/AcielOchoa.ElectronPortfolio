const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const screenshot = require('./utils/screenshot');
const cmcRequest = require('./utils/cmcRequest');

// Enable electron remote to communicate with render process
require('@electron/remote/main').initialize();

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

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

ipcMain.on('screenshot', screenshot);

ipcMain.on('cmcRequest', (e, endpoint) => {
  cmcRequest()
    .get(endpoint)
    .then((res) => {
      let data = [];
      for (let id in res.data.data) {
        const coin = res.data.data[id];
        // Extract required data and pass to ipcRenderer
        data.push({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          price: `$${coin.quote.USD.price.toFixed(5)}`,
        });
      }

      // Return data to ipcRenderer
      e.sender.send('cmcResponse', data);
    })
    .catch((err) => {
      e.sender.send('alertRenderer', { type: 'error', message: err.message });
      e.sender.send('cmcResponse', []);
      console.error(err.message)
    });
});
