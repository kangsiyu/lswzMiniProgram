// pages/鬼斧神工/鬼斧神工.js
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
     originIronCount:0,
     purpleIronCount:0,
     blueIronCount:0,
     greenIronCount:0,
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  orangeIronInput:function(e){
    this.setData({
      originIronCount:e.detail.value
    })
    console.log('橙色炼钢'+this.data.originIronCount);
  },
  purpleIronInput:function(e){
    this.setData({
      purpleIronCount:e.detail.value
    })
    console.log('紫色炼钢'+this.data.purpleIronCount);
  },
  blueIronInput:function(e){
    this.setData({
      blueIronCount:e.detail.value
    })
    console.log('蓝色炼钢'+this.data.blueIronCount);
  },
  greenIronInput:function(e){
    this.setData({
      greenIronCount:e.detail.value
    })
    console.log('绿色炼钢'+this.data.greenIronCount);
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
    console.log('绿色炼钢'+this.data.greenIronCount);
    console.log('蓝色炼钢'+this.data.blueIronCount);
    console.log('紫色炼钢'+this.data.purpleIronCount);
    console.log('橙色炼钢'+this.data.originIronCount);
    var orangeCount = Math.floor(this.data.originIronCount/40);
    var purpleCount = Math.floor(this.data.purpleIronCount/24);
    var blueCount = Math.floor(this.data.blueIronCount/12);
    var greenCount = Math.floor(this.data.greenIronCount/10);
    //自带模具
    var score = orangeCount*850 + purpleCount*36 + blueCount*12 + greenCount*5;
    var ownMojuTie = orangeCount*1000+purpleCount*120+blueCount*30+greenCount*10;
    var noOwnMojuTie = orangeCount*1500+purpleCount*180+blueCount*45+greenCount*15;
    var resultStr = '计算结果：\n 可获得'+score+"活动分\n自带模具消耗：\n"+ownMojuTie+"个黑铁\n不带模具消耗：\n"+noOwnMojuTie+"黑铁";
    this.setData({
      resultStr:resultStr
    })
  }
})