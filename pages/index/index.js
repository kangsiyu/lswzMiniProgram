//index.js
//获取应用实例
const app = getApp()
var databaseUtil = require('../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
let videoAd = null;
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
    imageBrowers:[],
    needShowTip:false,
    needJiudingShow:true,
    jiudingEntranceType:0,
    jiudingEntranceTitle:'',
    //jiudingEntranceTitle:'九鼎数据维护中，点击鼓励一下吧',
    onceLoad:false,
    adShow:false,
    adError:false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showAdTap:function(){
    this.setData({
      onceLoad:true,
      adShow:false,
    })
    if (videoAd) {
      videoAd.show().catch(() => {
        // 失败重试
        videoAd.load()
          .then(() => videoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }
  },
  onLoad: function () {
    // if (wx.createRewardedVideoAd) {
    //   videoAd = wx.createRewardedVideoAd({
    //     adUnitId: 'adunit-ad27f0a8535a2694'
    //   })
    //   videoAd.onLoad(() => {

    //   })
    //   videoAd.onError((err) => {
    //     console.log(err)
    //       if (err) {
    //         this.setData({
    //           adError:true
    //         })
    //       }
    //   })
    //   videoAd.onClose((res) => {
    //     if (res && res.isEnded) {
    //       wx.showToast({
    //         title: '感谢支持',
    //       })
    //       this.setData({
    //         jiudingEntranceType:0
    //       })
    //     } else {
    //       // 播放中途退出，不下发游戏奖励
    //       wx.showToast({
    //         title: '完整看完\n才算支持哦',
    //         icon:'none'
    //       })
    //       this.setData({
    //         adShow:true,
    //         onceLoad:false
    //       })
    //     }
    //   })
    // }
    try {
      var value = wx.getStorageSync('PLUG-ADD-MYAPP-KEY')
      if (value) {
        console.log(value)
      }else{
        this.setData({
          needShowTip:true
        })
        wx.setStorageSync('PLUG-ADD-MYAPP-KEY', true)
      }
    } catch (e) {
      
    }
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

