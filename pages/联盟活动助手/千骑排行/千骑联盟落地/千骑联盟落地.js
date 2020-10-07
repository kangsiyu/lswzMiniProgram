// pages/联盟活动助手/千骑排行/千骑联盟落地/千骑联盟落地.js
const app = getApp()
var databaseUtil = require('../../../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lianMengId:'',
    lianMengName:'',
    lianMengScore:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.lianMengId)
    this.setData({
      lianMengId:options.lianMengId
    })
    wx.showLoading({
      title: '正在加载',
    })
    if (app.globalData.openid) {
      this.requestData();
    }else{
      console.log(11);
      var that = this;
      app.loginInfo(function(openid){
        console.log('回调成功');
        that.requestData();
      });
    }
  },
  requestData:function(){
    var that = this;
    db.collection('qianqitachen').where({
      _id:that.data.lianMengId
    })
    .get({
      success:function(res){
        wx.hideLoading({
          success: (res) => {},
        })
        console.log(res.data)
        if (res.data.length) {
           const element = res.data[0];
           console.log(element)
           that.setData({
            lianMengName:element.name,
            lianMengScore:element.lowestScore,
           })
        }
      }
    })
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
    let url = 'pages/联盟活动助手/千骑排行/千骑联盟落地/千骑上传?lianMengId='+this.data.lianMengId
    return {
      title:this.data.lianMengName+'千骑绝尘点我上传作业',
      path:url
    }
  }
})