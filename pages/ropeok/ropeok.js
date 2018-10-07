const app = getApp()      // 在index.js的Page函数外获取应用实例

Page({
  data: {
    username: null,
    password: null,
  },

  usernameInput: function (event) {
    console.log(event)
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    console.log(event)
    this.setData({ password: event.detail.value })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  imgClick: function () {
  },
  // 用户名和密码输入框事件
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  pasWInput: function (e) {
    this.setData({
      SFZ: e.detail.value
    })
  },

  loginBtnClick: function () {
    app.ropeokData.ropeokUser= { username: this.data.username, password: this.data.password }
    // wx.redirectTo({ url: "../logs/logs" })
    wx.navigateTo({
      url: '../logs/logs',
    })
  }

})