//index.js
//获取应用实例
const app = getApp()
var databaseUtil = require('../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sysWidth:0,
    needActiveEntrance:false,
    entranceTitle:'',
    needYueLiEntrance:false,
    imageBrowers:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    db.collection('configInfo').get({
      success:function(res){
        if (res.data.length) {
           const element = res.data[0];
           if (element.needActiveEntrance) {
              that.setData({
                needActiveEntrance:element.needActiveEntrance,
                entranceTitle:element.entranceTitle
              })
           }
           if (element.needYueLiEntrance) {
             that.setData({
               needYueLiEntrance:element.needYueLiEntrance
             })
           }
           if (element.imageBrowers.length) {
             that.setData({
               imageBrowers:element.imageBrowers
             })
           }
        }
      }
    })
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

