//logs.js
const util = require('../../utils/util.js')
const app = getApp()      // 在logs.js的Page函数外获取应用实例

Page({
  data: {
    logs: [],
    userName:"1",
    passWord:"1",
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      userName:app.ropeokData.ropeokUser.username,
      passWord:app.ropeokData.ropeokUser.password
    })
    console.log(this.data.userName)
    console.log(this.data.passWord)
  }
})