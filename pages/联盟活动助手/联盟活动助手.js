// pages/联盟活动助手/联盟活动助手.js
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
    activeList:[],
    testPath:'https://6c73-lswztool-debug-ngiig-1302666573.tcb.qcloud.la/1531599296524_.pic.jpg?sign=ab40fa93129ddaa92dcc1194b785d175&t=1599296720'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      method:'GET',
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      data:{
        grant_type:"client_credentials",
        client_id:'Pi5lCGZOLBlkYULtRtjBmq9a',
        client_secret:'qhX5splezfPzE1yhTilhmBGxAgX0VC1g'
      },
      success (res) {
        console.log(res.data)
        if (res.data.access_token.length) {
          that.requestPicOCR(res.data.access_token)
          
        }
      }
    })
  },
  requestPicOCR:function(e){
    var that = this;
    console.log(that.data.testPath)
    wx.request({
      url:'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic',
      method:'POST',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        'url':that.data.testPath,
        access_token:e
      },
      success (res) {
        console.log(res.data)
        
      },
      fail (res){
        console.log('失败了'+res.data)
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

  }
})