// pages/注灵玉计算/注灵玉计算.js
let videoAd = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultStr:"计算结果:",
    targetLevel:0,
    currentLevel:0,
    levelInfo:[
      0,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,107,111,115,119,123,127,131,135,139,143,153,163,173,183,193,203,213,223,233,243,253,263,273,283,293,303,313,323,333,343,353,363,373,383,393,403,413,423,433,443,453,463,473,483,493,503,513,523,533,543,553,563,573,583,593,603,613,623,633
    ],
    onceLoad:false,
    adShow:false,
    adError:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-0d7844021f9a0a8b'
      })
      videoAd.onLoad(() => {

      })
      videoAd.onError((err) => {
        console.log(err)
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
  calculateAction:function(){
    console.log(this.data.currentLevel+'\n'+this.data.targetLevel)
    let current = Math.floor(this.data.currentLevel);
    let target = Math.floor(this.data.targetLevel);
    if (current<=0 ||
      target>100 ||
        current >= 100 ||
        target <= 0 ||
        target<=current) {
       wx.showToast({
         title: '数据错误',
         icon:'none'
       })
       return;
    }
     let total = 0;
     for (let index = current; index < target; index++) {
       const element = this.data.levelInfo[index];
       console.log(element+'\n');
       total = total + element;
     }
     var result = '计算结果:\n'+ '共消耗'+total+'个注灵玉';
     var adShow = (this.data.onceLoad || this.data.adError)?false:true;
    this.setData({
      resultStr:result,
      adShow:adShow,
    })
  }

})