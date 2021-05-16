// Modules to control application life and create native browser window
const {
    app,
    BrowserView,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 550,
        minHeight: 550
    })

    const view = new BrowserView()

    win.setBrowserView(view)
    view.setBounds({
        x: 0,
        y: 50,
        width: 800,
        height: 601
    })
    view.webContents.loadURL('https://electronjs.org')
    // To dynamically resize the BrowserView
    view.setAutoResize({
        // This scales in the y-axis so it covers 100% of the app window
        width: true,
        // This scales in the y-axis (downwards) proportionally
        vertical: true
    });

    //   and load the index.html of the app.
    win.loadFile('index.html')

    // Open the DevTools.
    // win.webContents.openDevTools()
}

// When app is ready
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})