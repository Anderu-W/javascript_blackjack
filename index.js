const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        show: false,
        frame: false,
        backgroundColor: '#572b9c',
    });
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    mainWindow.show();
});
