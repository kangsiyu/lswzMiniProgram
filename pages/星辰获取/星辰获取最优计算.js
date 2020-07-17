// pages/星辰获取/星辰获取最优计算.js
let videoAd = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultStr:"星辰获取最优计算参考：",
    money:0,
    onceLoad:false,
    adShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-ad27f0a8535a2694'
      })
      videoAd.onLoad(() => {

      })
      videoAd.onError((err) => {

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
  moneyInput:function(e){
    this.setData({
      money:e.detail.value
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
    console.log(this.data.money);
    let money = Math.floor(this.data.money);
    var resultStr = '星辰获取最优计算参考:\n';
    if (money >= 0) {
       resultStr = resultStr + '玩命打野怪\n' + '各种星辰免费活动\n'+'每日任务完成\n'+'攒金币破灵\n';
    }
    if (money >= 6 && money<68) {
       resultStr = resultStr+"天道酬勤\n";
    }else if (money >= 68 && money<74) {
      resultStr = resultStr+"星辰俸禄\n";
    }else if (money > 74) {
      resultStr = resultStr+"星辰月卡\n天道酬勤\n";
    }
    //4周的天道+月卡68+6的最低累充
    if (money>146 && money <214) {
      resultStr = resultStr+'累充道具换星辰\n';
    }else if (money>=214 && money<=220) {
      resultStr = resultStr+'金币月卡，金币留着去破灵或者等消费活动再买星辰\n';
    }
    //够790抽双倍
    if (money>152) {
      resultStr = resultStr+'等双倍凤舞的时候选星辰，得到的幸运币换星辰或等礼包折上折的时候（双11可能会有）买星辰礼包\n';
    }
    if (money>=3000) {
      resultStr = resultStr+'买日常的星辰礼包\n';
    }
    if (money>=10000) {
      resultStr = resultStr+'买星辰的限时礼包\n如果已经可以买超核商城，优先买超核商城\n';
    }
    if (money >= 50000) {
      resultStr = '星辰获取最优计算参考：\n大佬你不需要考虑，见到星辰买就对了，都划算！'
    }
    var adShow = this.data.onceLoad?false:true;
    this.setData({
      resultStr:resultStr,
      adShow:adShow,
    })
  }
})