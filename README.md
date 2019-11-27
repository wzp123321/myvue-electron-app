# electron-vue-app-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##vue-cli3.0创建项目
```
vue create electron-vue-demo
```
这时候报了一个错
![image.png](https://upload-images.jianshu.io/upload_images/15325248-fcfcf97af2b09925.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
因为我们的vue-cli版本不是3.0以上
所以卸载重新安装
```
vue uninstall -g vue-cli

cnpm install @vue/cli -g
```
重新创建项目

##安装electron
```
vue add electron-builder
```
![![image.png](https://upload-images.jianshu.io/upload_images/15325248-894e98ba0321ab83.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
](https://upload-images.jianshu.io/upload_images/15325248-7f078fdc1a8cbd0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选择6.0.0 然后安装

也可以手动安装:加上下面这几条
```
{
  "name": "electron-vue-demo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
+   "electron:build": "vue-cli-service electron:build",
+   "electron:serve": "vue-cli-service electron:serve",
+   "postinstall": "electron-builder install-app-deps",
+  "postuninstall": "electron-builder install-app-deps"

  },
+  "main": "background.js",
  "dependencies": {
    "core-js": "^3.3.2",
    "vue": "^2.6.10",
    "vue-router": "^3.1.3",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.0.0",
    "@vue/cli-plugin-eslint": "^4.0.0",
    "@vue/cli-plugin-router": "^4.0.0",
    "@vue/cli-plugin-vuex": "^4.0.0",
    "@vue/cli-service": "^4.0.0",
    "babel-eslint": "^10.0.3",
  +  "electron": "^5.0.6",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "less": "^3.0.4",
    "less-loader": "^5.0.0",
 +   "vue-cli-plugin-electron-builder": "^1.3.5",
    "vue-template-compiler": "^2.6.10"
  }
}
```
![image.png](https://upload-images.jianshu.io/upload_images/15325248-51f2fb9cdec3cbd7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

src文件夹下新建backgroun.js
```
'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import {
    createProtocol,
    installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

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
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

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

app.on('ready-to-show', () => {
    win.show()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async() => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        try {
            await installVueDevtools()
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
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
```
然后再次安装依赖安(考虑到网络问题，之前可能存在安装失败的情况) cnpm i 

然后编译启动项目npm run electron:serve
![image.png](https://upload-images.jianshu.io/upload_images/15325248-dfb8e62f7c7a353f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

启动之后就是这样了

![image.png](https://upload-images.jianshu.io/upload_images/15325248-afb56066aa8305b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##然后就是一些项目相关配置
1.eslint:
在src下新建.eslintrc.js文件，eslint是语法检测用的，不过有一说一确实很管用，不过有时候也挺烦人的，有时候多一个或者少一个空格都会报错(手动狗头)
```
module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      '@vue/standard'
    ],
    rules: {
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // 不检测语句末尾的分号
      'semi': ['off', 'always'],
      // 强制缩进为2个空格
      'indent': ['error', 2],
      // 关闭函数名称跟括号之间的空格检测
      'space-before-function-paren': 0,
      // 忽略大括号内的空格
      'object-curly-spacing': 0
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  ```
关于indent缩进的配置，要配合项目根目录下的.editorconfig
```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space   <--这里定义缩进类型是空格还是tab
indent_size = 2        <--这里需要与.eslintrc.js的indent对应
trim_trailing_whitespace = true
insert_final_newline = true
```
2.项目配置vue.config.js
```
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',  
    port: 8089
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  }
};
```
跨域配置:
```
 win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  })
createMenu()
```

菜单栏设置:
```
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
```

##打包
需要修改路由模式为hash(默认就是hash)
```
npm run electron:build
```
![image.png](https://upload-images.jianshu.io/upload_images/15325248-fef0c9555e908224.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/15325248-01a2361ae9865b17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#项目效果图
1.歌单
![image.png](https://upload-images.jianshu.io/upload_images/15325248-ed897f376800d59a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/15325248-06ace97dcc5b25e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2.MV
![image.png](https://upload-images.jianshu.io/upload_images/15325248-6b5a5f8c351dd64e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/15325248-8bb95201d874a09d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.歌手
![image.png](https://upload-images.jianshu.io/upload_images/15325248-7e6f495896e6c1dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/15325248-cf5ba2dcb9f4037d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4.播放历史
![image.png](https://upload-images.jianshu.io/upload_images/15325248-6cc18ae64207fd72.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





