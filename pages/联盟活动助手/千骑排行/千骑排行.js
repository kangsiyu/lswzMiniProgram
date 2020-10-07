// pages/联盟活动助手/千骑排行/千骑排行.js
const app = getApp()
var databaseUtil = require('../../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canAdd:false,
    canEnter:false,
    applyInfo:false,
    name:'',
    lowLevel:0,
    lianMengId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      userId:app.globalData.openid
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
            canAdd:false,
            canEnter:true,
            lianMengId:element._id
           })
        }else{
          that.setData({
            canAdd:true
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

  },
  addAction:function(){
    this.setData({
      applyInfo:true
    })
  },
  cancel: function () {
    var that = this
    that.setData({
      applyInfo:false
    })
  },
  confirmAcceptance:function(){
     if (this.data.name.length==0||
        this.data.lowLevel==0) {
       wx.showToast({
         title: '数据录入错误',
         icon:'none'
       })
        return
     }
     var that = this
     db.collection('qianqitachen').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        userId:app.globalData.openid,
        name:that.data.name,
        lowestScore:that.data.lowLevel
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res._id)
        var lianMengId = res._id;
        var that = this;
        wx.showToast({
          title: '申请成功',
        })
        wx.navigateTo({
          url: '千骑联盟落地/千骑联盟落地?lianMengId='+lianMengId,
        })
      }
    })
  },
  setName:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  setLowLevel:function(e){
    this.setData({
      lowLevel:e.detail.value
    })
  }
})