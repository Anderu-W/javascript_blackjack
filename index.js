const path = require('path');

const {
    app,
    BrowserWindow,
    protocol
} = require('electron');

function createWindow() {
    protocol.interceptFileProtocol('file', function(req, callback) {
        let url = req.url.substr(5);
        callback({
            path: path.normalize(__dirname + url),
        });
    });

    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      show: false,
      backgroundColor: '#572b9c',
    });

    // and load the index.html of the app.
    mainWindow.loadURL('file://app/index.html');
    mainWindow.show();
}
app.on('ready', function() {
    createWindow();
});
