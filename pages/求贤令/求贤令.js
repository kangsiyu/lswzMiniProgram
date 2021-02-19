// pages/求贤令/求贤令.js
const app = getApp()
var databaseUtil = require('../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:0,
    wechatNumber:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.openid) {
      
    }else{
      console.log(11);
      var that = this;
      app.loginInfo(function(openid){
        console.log('回调成功');
        
      });
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
  priceInput:function(e){
    console.log(e.detail.value)
    this.setData({
      price:Number(e.detail.value)
    })
  },
  wechatNumInput:function(e){
    console.log(e.detail.value)
    this.setData({
      wechatNumber:e.detail.value
    })
  },
  realUpload:function(){
    var that = this;
    var myDate = parseInt(new Date().getTime()/1000);
    console.log(myDate)
    db.collection('qiuxianList').where(
      {
        userId:app.globalData.openid
      }
    ).get({
      success:function(res){
        console.log(res.data);
        wx.hideLoading({
          success: (res) => {},
        })
        if (res.data.length==0) {
          console.log('数据库找不到新增一条')
          db.collection('qiuxianList').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              userId:app.globalData.openid,
              price:that.data.price,
              wechatNumber:that.data.wechatNumber,
              date:myDate
            },
            success: function(res) {
              wx.showToast({
                title: '发布成功',
              })
            }
          })
        }else{
          console.log('需要更新数据库')
          var element = res.data[0]
          if (element.date && myDate-parseInt(element.date)<7200 && myDate-parseInt(element.date)>0) {
            myDate = parseInt(element.date)
          }
          db.collection('qiuxianList').where(
            {
              userId:app.globalData.openid
            }
          ).update({
            data: {
              price:that.data.price,
              wechatNumber:that.data.wechatNumber,
              date:myDate
            },
            success: function(res) {
              
            }
          })
          
        }
      }
    })
  },
  uploadAction:function(e){
    var that = this
    if (this.data.wechatNumber.length == 0) {
      wx.showToast({
        title: '请输入微信号',
        icon:'none'
      })
      return
    }
    wx.showLoading({
      title: '正在发布',
    })
    wx.cloud.callFunction({
      name: 'checkImageOrContent',
      data: {
        msg:that.data.wechatNumber
      },
      success(res) {
        console.log(res)
        if (res.result.errCode == 87014) {
          wx.showToast({
            title: '微信号违规',
            icon:'none'
          })
        }else{
          that.realUpload()
        }
      }
    })
  }
})