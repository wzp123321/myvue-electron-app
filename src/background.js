'use strict'

const path = require('path');
import {
  Menu,
  app,
  protocol,
  BrowserWindow,
  ipcMain
} from 'electron'

import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'


const isDevelopment = process.env.NODE_ENV !== 'production'


const {
  WINDOW_WIDTH,
  WINDOW_HEIGHT
} = require('./common/index')




let win = null;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: {
    secure: true,
    standard: true
  }
}])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    frame: false, // 无边框
    center: true,
    title:'拼嘻嘻音乐',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    },
    icon: '../public/favicon.ico'
  })
  win.openDevTools({
    mode: 'bottom'
  });

  // 创建菜单
  createMenu()

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}

// 设置菜单栏
function createMenu() {
  // darwin表示macOS，针对macOS的设置
  if (process.platform === 'darwin') {
    const template = [{
      label: 'App Demo',
      submenu: [{
        role: 'about'
      },
      {
        role: 'quit'
      }
      ]
    }]
    let menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  } else {
    // windows及linux系统
    Menu.setApplicationMenu(null)
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

/**
 * 进程间通信
 */
// 窗口关闭
ipcMain.on('all-window-close', () => {
  win.close()
})
// 窗口最小化
ipcMain.on('all-window-mini', () => {
  win.minimize()
})
// 窗口最大化
ipcMain.on('all-window-maxi', () => {
  win.maximize()
})
// 窗口正常化
ipcMain.on('all-window-normal', () => {
  win.setBounds({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  })
  // 窗口居中函数
  win.center();
})


app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    BrowserWindow.addDevToolsExtension(path.resolve(__dirname, '../devTools/vue-devtools'));
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

