// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // 渲染器-主进程 设置路径
  setValue: (key) => {
    ipcRenderer.invoke('setValue', key)
  },
  // 监听器主进程信息
  uploadValue: (callback) => ipcRenderer.on('uploadValue', callback)
})