//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  onLoad: function() {},
  handleSelecteDate(e) {
    wx.showToast({ title: `${e.detail.date}`, icon: false })
  },
})
