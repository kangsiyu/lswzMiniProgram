// pages/联盟情报/我的上传/我的上传.js
const app = getApp()
var databaseUtil = require('../../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
let videoAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage:0,
    dataList: [], //放置返回数据的数组  
    loadMore: false, //"上拉加载"的变量，默认false，隐藏  
    loadAll: false, //“没有数据”的变量，默认false，隐藏 
    alreadyLoad:false,
    needAd:false,
    onceLoad:false,
    adShow:false,
    adError:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.openid) {
      this.requestData()
    }else{
      var that = this;
      app.loginInfo(function(openid){
        console.log('回调成功');
        that.requestData()
      });
    }
  },
  requestData:function(){
    var that = this
    wx.showLoading({
      title: '正在加载',
    })
    db.collection('qiuxianList').orderBy('date','desc')
    .skip(this.data.currentPage*20)
    .get({
      success(res) {
        wx.hideLoading({
          success: (res) => {},
        })
        that.setData({
          alreadyLoad:true
        })
        if (res.data && res.data.length > 0) {
          console.log("请求成功", res.data)
          //把新请求到的数据添加到dataList里  
          let list = that.data.dataList.concat(res.data)
          that.setData({
            dataList: list, //获取数据数组    
            loadMore: false //把"上拉加载"的变量设为false，显示  
          });
          if (res.data.length < 20) {
            that.setData({
              loadMore: false, //隐藏加载中。。
              loadAll: true //所有数据都加载完了
            });
          }
        } else {
          that.setData({
            loadAll: true, //把“没有数据”设为true，显示  
            loadMore: false //把"上拉加载"的变量设为false，隐藏  
          });
        }
      },
      fail(res) {
        console.log("请求失败", res)
        that.setData({
          loadAll: false,
          loadMore: false
        });
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
    console.log("上拉触底事件")
    let that = this
    if (!that.data.loadMore) {
      let currentPage = this.data.currentPage
      currentPage++
      that.setData({
        loadMore: true, //加载中  
        loadAll: false, //是否加载完所有数据
        currentPage:currentPage
      });
      console.log(currentPage)
      //加载更多，这里做下延时加载
      setTimeout(function() {
        that.requestData()
      }, 2000)
    }else{
      wx.showToast({
        title: '暂无更多',
        icon:"none"
      })
    }
  },
  tapCopy:function(e){
    var index = e.currentTarget.dataset.name;
    console.log(index)
    var element = this.data.dataList[index]
    console.log(element.wechatNumber)
    wx.setClipboardData({
      data: element.wechatNumber,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})