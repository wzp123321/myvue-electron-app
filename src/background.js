'use strict'
const path = require('path');
import {
  Menu,
  app,
  protocol,
  BrowserWindow,
  ipcMain,
  Tray, // 托盘
} from 'electron'

import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'


const isDevelopment = process.env.NODE_ENV !== 'production'

// 引入窗口宽高常量
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
    title: '拼嘻嘻音乐',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    },
    icon: '../public/favicon.ico'
  })
  // 打开调试工具
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
    win.loadURL(`file://${__dirname}/index.html`)
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
      submenu: []
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

// 声明托盘变量
let tray = null;
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
  tray = new Tray('./assets/imgs/icon.jpg')
  tray.setTitle('拼嘻嘻音乐')
})

// 应用更新-----相关配置
require('update-electron-app')({
  repo: 'wzp123321/https://github.com/wzp123321/myvue-electron-app.git', // github存储库
  updateInterval: '1 hour', // 检查更新的频率
  logger: require('electron-log'), // 定义log功能的自定义记录器对象
  notifyUser: true, //启用后，将提示用户下载后立即应用更新。
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
