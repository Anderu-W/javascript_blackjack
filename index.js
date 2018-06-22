const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        show: false
    });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.show()
})