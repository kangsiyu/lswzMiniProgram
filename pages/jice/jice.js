// pages/jice/jice.js
let videoAd = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
     price:790,
     currentOne:0,
     targetOne:0,
     currentTwo:0,
     targetTwo :0,
     resultStr:'计算结果',
     onceLoad:false,
     adShow:false,
     adError:false,
     item:[
       {
         needSuipian:0
       },
       {
        needSuipian:50
       },
       {
        needSuipian:51
      },
      {
        needSuipian:53
      },
      {
        needSuipian:56
      },
      {
        needSuipian:60
      },
      {
        needSuipian:65
      },
      {
        needSuipian:71
      },
      {
        needSuipian:78
      },
      {
        needSuipian:86
      },
      {
        needSuipian:95
      },
      {
        needSuipian:105
      },
      {
        needSuipian:116
      },
      {
        needSuipian:128
      },
      {
        needSuipian:141
      },
      {
        needSuipian:155
      },
      {
        needSuipian:170
      },
      {
        needSuipian:186
      },
      {
        needSuipian:203
      },
      {
        needSuipian:221
      },
      {
        needSuipian:240
      },
      {
        needSuipian:260
      },
      {
        needSuipian:281
      },
      {
        needSuipian:303
      },
      {
        needSuipian:326
      },
      {
        needSuipian:350
      },
      {
        needSuipian:375
      },
      {
        needSuipian:401
      },
      {
        needSuipian:428
      },
      {
        needSuipian:456
      },
      {
        needSuipian:485
      },
      {
        needSuipian:515
      },
      {
        needSuipian:546
      },
      {
        needSuipian:578
      },
      {
        needSuipian:611
      },
      {
        needSuipian:645
      },
      {
        needSuipian:680
      },
      {
        needSuipian:716
      },
      {
        needSuipian:753
      },
      {
        needSuipian:791
      },
      {
        needSuipian:830
      },
      {
        needSuipian:870
      },
      {
        needSuipian:915
      },
      {
        needSuipian:965
      },
      {
        needSuipian:1020
      },
      {
        needSuipian:1080
      },
      {
        needSuipian:1145
      },
      {
        needSuipian:1215
      },
      {
        needSuipian:1290
      },
      {
        needSuipian:1370
      },
      {
        needSuipian:1455
      },
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-ac442b9e6cae78e6'
      })
      videoAd.onLoad(() => {})
      videoAd.onError((err) => {
        if (err) {
          this.setData({
            adError:true
          })
        }
      })
      videoAd.onClose((res) => {
        if (res && res.isEnded) {
          wx.showToast({
            title: '感谢支持',
          })
        } else {
          // 播放中途退出，不下发游戏奖励
          wx.showToast({
            title: '完整看完\n才算支持哦',
            icon:'none'
          })
          this.setData({
            adShow:true,
            onceLoad:false
          })
        }
      })
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
  calculateAction:function(){
    var currentOne = this.data.currentOne;
     var targetOne = this.data.targetOne;
     var currentTwo = this.data.currentTwo;
     var targetTwo = this.data.targetTwo;
    if (targetOne == 0) {
      wx.showToast({
        title: '输入正确数据',
        icon:'none'
      })
      return;
    }
     
     var needSuipian = this.data.item[targetOne].needSuipian-this.data.item[currentOne].needSuipian;
     var needSuipian2 = this.data.item[targetTwo].needSuipian-this.data.item[currentTwo].needSuipian;
     needSuipian = needSuipian +needSuipian2;
     var price = this.data.price;
     var resultStr = Math.ceil(needSuipian/50)*price;
     console.log("needSuipian = "+needSuipian);
     var adShow = (this.data.onceLoad || this.data.adError)?false:true;
     this.setData({
       resultStr:'计算结果：\n需要计策碎片：'+needSuipian+'个\n花费：'+resultStr+"元宝",
       adShow:adShow,
     })
  },
  current_one:function(e){
    var currentOne = e.detail.value;
    this.setData({
      currentOne:currentOne
    })
    console.log(currentOne+this.data.currentOne);
  },
  target_one:function(e){
    var targetOne = e.detail.value;
    this.setData({
      targetOne:targetOne
    })
    console.log(targetOne+this.data.targetOne);
  },
  current_two:function(e){
    var currentTwo = e.detail.value;
    this.setData({
      currentTwo:currentTwo
    })
    console.log(currentTwo+this.data.currentTwo);
  },
  target_two:function(e){
    var targetTwo = e.detail.value;
    this.setData({
      targetTwo:targetTwo
    })
    console.log(targetTwo+this.data.targetTwo);
  },
  priceChange:function(e){
    var price = e.detail.value;
    this.setData({
      price:price
    })
    console.log("price = "+this.data.price);
  },
  clickAd:function(){
    console.log('click');
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
})