//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sysWidth:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  baobing:function(){
    wx.navigateTo({
      url: '../baobing/baobing',
    })
  },
  jice:function(){
    wx.navigateTo({
      url: '../jice/jice',
    })
  },
  onShareAppMessage: function () {

  },
})
wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
})

