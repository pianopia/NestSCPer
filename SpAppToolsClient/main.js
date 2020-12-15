const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const fs = require("fs");
const exec = require("child_process").exec;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
//var {fileLists} = null;

// 新しいウィンドウ(Webページ)を生成
let win;
function createWindow() {
  // BrowserWindowインスタンスを生成
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // ココ
    }
  });
  // index.htmlを表示
  //win.loadURL(`file://${__dirname}/signup.html`);
  //win.loadURL(`file://${__dirname}/menu.html`);
  win.loadURL(`file://${__dirname}/mypage.html`);

  // 開発者モード
  //win.webContents.openDevTools();

  win.on('closed', () => {   // ()は　function ()と書いていい
      win = null;
  });
}

// アプリの準備が整ったらウィンドウを表示
app.on('ready', createWindow);

// 全てのウィンドウを閉じたらアプリを終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

