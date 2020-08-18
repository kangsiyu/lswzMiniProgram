// pages/运营活动信息落地页/运营活动信息落地页.js
const app = getApp()
var databaseUtil = require('../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultStr:'',
    resultDes:'',
    resultTips:'',
    imageShow:false,
    imageFile:'',
    adOnceShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    db.collection('configInfo').get({
      success:function(res){
        if (res.data.length) {
           const element = res.data[0];
           if (element.needActiveEntrance) {
              that.setData({
                resultStr:element.title,
                resultDes:element.des,
                resultTips:element.tips,
                imageShow:element.imageFile.length>0,
                imageFile:element.imageFile
              })
           }
        }
      }
    })
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-5c619c8d7d63ae58'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  calAction:function(){
    if (interstitialAd && this.data.adOnceShow == false) {
      var that = this;
      that.setData({
        adOnceShow:true
       })
      interstitialAd.show().catch((err) => {
       console.error(err)
       that.setData({
        adOnceShow:false
       })
       
    })
    }
    wx.previewImage({
      urls: [this.data.imageFile],
    })
  }
})