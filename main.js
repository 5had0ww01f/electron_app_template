const {
    app,
    BrowserWindow,
} = require('electron')

if( isDev() ) require('electron-reload')(__dirname);

const path = require('path')
const url = require('url')

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // darwin = MacOS
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

function createWindow() {
    
    // Create the browser window.
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        maximizable: false
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open DevTools.
    win.webContents.openDevTools()

    // When Window Close.
    win.on('closed', () => {
        win = null
    })

}

// ================ //
function isDev() { // check if in dev environment
    return process.mainModule.filename.indexOf('app.asar') === -1;
}