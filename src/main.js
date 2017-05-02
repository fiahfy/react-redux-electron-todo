import { app, BrowserWindow } from 'electron';

function createWindow() {
  const window = new BrowserWindow();
  window.loadURL(`file://${__dirname}/app/index.html`);
  window.webContents.openDevTools();
}

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
