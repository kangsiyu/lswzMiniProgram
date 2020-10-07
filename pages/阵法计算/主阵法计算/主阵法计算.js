// pages/阵法计算/主阵法计算/主阵法计算.js
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
      resultStr:"计算结果:",
      targetLevel:0,
      currentLevel:0,
      adOnceShow:false,
      levelInfo:[
        {
          level:0,
           yuanbao:0,
           qijing:0,
           pianzhang:0,
           xingpan:0
        },
        {
          level:1,
          yuanbao:1000,
          qijing:0,
          pianzhang:0,
          xingpan:0
       },
       {
        level:2,
        yuanbao:0,
        qijing:0,
        pianzhang:5,
        xingpan:5
       },
       {
        level:3,
        yuanbao:0,
        qijing:0,
        pianzhang:5,
        xingpan:5
       },
       {
        level:4,
        yuanbao:0,
        qijing:0,
        pianzhang:5,
        xingpan:5
       },
       {
        level:5,
        yuanbao:0,
        qijing:0,
        pianzhang:5,
        xingpan:5
       },
       {
        level:6,
        yuanbao:0,
        qijing:0,
        pianzhang:10,
        xingpan:5
       },
       {
        level:7,
        yuanbao:0,
        qijing:0,
        pianzhang:10,
        xingpan:5
       },
       {
        level:8,
        yuanbao:0,
        qijing:0,
        pianzhang:10,
        xingpan:5
       },
       {
        level:9,
        yuanbao:0,
        qijing:0,
        pianzhang:10,
        xingpan:5
       },
       {
        level:10,
        yuanbao:0,
        qijing:0,
        pianzhang:10,
        xingpan:5
       },
       {
        level:11,
        yuanbao:0,
        qijing:20,
        pianzhang:20,
        xingpan:10
       },
       {
        level:12,
        yuanbao:0,
        qijing:0,
        pianzhang:20,
        xingpan:10
       },
       {
        level:13,
        yuanbao:0,
        qijing:0,
        pianzhang:20,
        xingpan:10
       },
       {
        level:14,
        yuanbao:0,
        qijing:0,
        pianzhang:20,
        xingpan:10
       },
       {
        level:15,
        yuanbao:0,
        qijing:0,
        pianzhang:20,
        xingpan:10
       },
       {
        level:16,
        yuanbao:0,
        qijing:0,
        pianzhang:40,
        xingpan:20
       },
       {
        level:17,
        yuanbao:0,
        qijing:0,
        pianzhang:40,
        xingpan:20
       },
       {
        level:18,
        yuanbao:0,
        qijing:0,
        pianzhang:40,
        xingpan:20
       },
       {
        level:19,
        yuanbao:0,
        qijing:0,
        pianzhang:40,
        xingpan:20
       },
       {
        level:20,
        yuanbao:0,
        qijing:0,
        pianzhang:40,
        xingpan:20
       },
       {
        level:21,
        yuanbao:0,
        qijing:40,
        pianzhang:80,
        xingpan:20
       },
       {
        level:22,
        yuanbao:0,
        qijing:0,
        pianzhang:80,
        xingpan:20
       },
       {
        level:23,
        yuanbao:0,
        qijing:0,
        pianzhang:80,
        xingpan:20
       },
       {
        level:24,
        yuanbao:0,
        qijing:0,
        pianzhang:80,
        xingpan:20
       },
       {
        level:25,
        yuanbao:0,
        qijing:0,
        pianzhang:80,
        xingpan:20
       },
       {
        level:26,
        yuanbao:0,
        qijing:0,
        pianzhang:240,
        xingpan:40
       },
       {
        level:27,
        yuanbao:0,
        qijing:0,
        pianzhang:240,
        xingpan:40
       },
       {
        level:28,
        yuanbao:0,
        qijing:0,
        pianzhang:240,
        xingpan:40
       },
       {
        level:29,
        yuanbao:0,
        qijing:0,
        pianzhang:240,
        xingpan:40
       },
       {
        level:30,
        yuanbao:0,
        qijing:0,
        pianzhang:240,
        xingpan:40
       },
       {
        level:31,
        yuanbao:0,
        qijing:100,
        pianzhang:80,
        xingpan:360
       },
       {
        level:32,
        yuanbao:0,
        qijing:0,
        pianzhang:80,
        xingpan:400
       },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-476688c10e729369'
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
  currentInput:function(e){
    this.setData({
      currentLevel:e.detail.value
    })
  },
  targetInput:function(e){
    this.setData({
      targetLevel:e.detail.value
    })
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
    let current = Number(this.data.currentLevel);
    let target = Number(this.data.targetLevel);
    if (current<0 ||
      target>40 ||
        current >= 40 ||
        target <= 0 ||
        target<=current) {
       wx.showToast({
         title: '数据错误',
         icon:'none'
       })
       return;
    }
    if (target>32) {
      wx.showToast({
        title: '32级后小窝还不知道，主公稍等下哦',
        icon:'none'
      })
      return;
    }
    let totalyuanbao = 0;
    let totalpianzhang = 0;
    let totalxingpan = 0;
    let totalqijing = 0;
    for (let index = current+1; index <= target; index++) {
      const element = this.data.levelInfo[index];
      totalyuanbao = totalyuanbao+Number(element.yuanbao);
      totalpianzhang = totalpianzhang+Number(element.pianzhang);
      totalxingpan = totalxingpan +Number(element.xingpan);
      totalqijing = totalqijing + Number(element.qijing);
    }
    var resultStr = "计算结果：\n需要星盘："+totalxingpan+"个\n需要阵法篇章："+totalpianzhang +"个\n需要阵法奇经："+totalqijing+'个\n需要元宝：'+totalyuanbao;
    this.setData({
      resultStr:resultStr
    })
  }
})