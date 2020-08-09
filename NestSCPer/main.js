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
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
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

/*
var fs = require('fs');
fs.readdir('/Users/shota.nakagawa/', function(err, files){
    if (err) throw err;
    var fileList = files.filter(function(file){
        return fs.statSync(file).isFile() && /.*\.csv$/.test(file); //絞り込み
    })
    fileLists = fileList;
    //console.log(fileList);
});

function loadFolder() {
    this.images = []
    this.folders = []

    if(fs.existsSync(this.path)) {
        const extensions = ['.png', '.jpg', '.jpeg', '.gif', '.bpm', '.webp']
        const files = fs.readdirSync(this.path)
            .map(name => {
                const stat = fs.statSync(this.path +'/'+ name)
                const extension = path.extname(name)
                return {
                    name: name,
                    extension: extension,
                    path: this.path +'/'+ name,
                    type: stat.isFile() ? 'file' : 'folder',
                    time: stat.mtime.getTime()
                }
            })
            .filter(file => {
                if(file.type == 'file') {
                    return (extensions.includes(file.extension))
                }
                return (!file.name.startsWith('.'))
            })

        for(file of files) {
            if(file.type == 'folder') {
                this.folders.push(file)
            } else {
                this.images.push(file)
            }
        }

    }
}

function sortFiles(files) {
    const sort = this.sortOptions[this.sort].value
    let sorted
    if(sort == 'name asc') {
        sorted = files.sort((a, b) => {
            return (b.name < a.name) ? 1 : -1
        })
    } else if(sort == 'name desc') {
        sorted = files.sort((a, b) => {
            return (b.name < a.name) ? -1 : 1
        })
    } else if(sort == 'modified asc') {
        sorted = files.sort((a, b) => {
            return a.time - b.time
        })
    } else if(sort == 'modified desc') {
        sorted = files.sort((a, b) => {
            return b.time - a.time
        })
    }
    return sorted
}

*/
