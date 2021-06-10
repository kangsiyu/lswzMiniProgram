// pages/体力计算/体力计算列表.js
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
     humCount:0,
     fifthCount:0,
     twentyCount:0,
     resultStr:'计算结果：',
     adOnceShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-fef7aee9500a9c68'
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
  humInput:function(e){
    this.setData({
      humCount:e.detail.value
    })
  },
  fifthInput:function(e){
    this.setData({
      fifthCount:e.detail.value
    })
  },
  twentyInput:function(e){
    this.setData({
      twentyCount:e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  calculateAction:function(){
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
    console.log('100'+this.data.humCount);
    console.log('50'+this.data.fifthCount);
    console.log('20'+this.data.twentyCount);
    let total = Number(this.data.humCount)*100+Number(this.data.fifthCount)*50+Number(this.data.twentyCount)*20;
    console.log('总体为：'+total)
    var resultStr = '计算结果：\n千骑可以打：'+(total/5)*350+"分\n无尽全部十级可以打："+(total/20)*250+"分\n机关兽可以打："+(total/20)+"个\n"
    this.setData({
      resultStr:resultStr
    })
  }
})