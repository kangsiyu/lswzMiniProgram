// pages/联盟情报/联盟情报上传/联盟情报上传.js
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
    options:[
      {
        city_id: '2',
        city_name: '手Q'
      },
    ],
    areaId:1,
    seviceIndex:0,
    lianmengKeyWords:'',
    juntuanKeyWords:'',
    canUpload:false,
    tempFiles:[],
    adOnceShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title:'联盟军团情报'})
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
  change:function(e){
    this.setData({
      areaId:Number(e.detail.id)
    })
    console.log(this.data.areaId)
  },
  seviceInput:function(e){
    this.setData({
      seviceIndex:e.detail.value
    })
    console.log(this.data.seviceIndex)
  },
  lianmengInput:function(e){
    this.setData({
      lianmengKeyWords:e.detail.value
    })
    console.log(this.data.lianmengKeyWords)
  },
  juntuanInput:function(e){
    this.setData({
      juntuanKeyWords:e.detail.value
    })
    console.log(this.data.juntuanKeyWords)
  },
  introAction:function(){
    wx.previewImage({
      urls: ["cloud://lswztool-debug-ngiig.6c73-lswztool-debug-ngiig-1302666573/1781604391241_.pic.jpg"],
    })
  },
  calculateAction:function(){
    if (this.data.seviceIndex == 0) {
      wx.showToast({
        title: '区服序号不能为空',
        icon:"none"
      })
      return
    }
    if (this.data.juntuanKeyWords.length == 0 &&
      this.data.lianmengKeyWords.length == 0) {
        wx.showToast({
          title: '联盟关键字和军团关键字\n不能都为空',
          icon:"none"
        })
        return
    }
    var that = this
    wx.cloud.callFunction({
      name: 'checkImageOrContent',
      data: {
        msg:that.data.juntuanKeyWords+that.data.lianmengKeyWords 
      },
      success(res) {
        console.log(res)
        if (res.result.errCode == 87014) {
          wx.showToast({
            title: '关键字违规',
            icon:'none'
          })
        }else{
          that.realUpload()
        }
      }
    })
  },
  realUpload:function(){
    var that = this
    var timestamp = Date.parse(new Date());
    var n = timestamp;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var date = String(Y)+String(M)+String(D)
    wx.showLoading({
      title: '正在上传',
    })
    db.collection('lianmengInfoPreCheckList').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        userId:app.globalData.openid,
        image:that.data.tempFiles,
        date:date,
        areaId:that.data.areaId,
        serviceIndex:that.data.seviceIndex,
        juntuanKeyWords:that.data.juntuanKeyWords,
        lianmengKeyWords:that.data.lianmengKeyWords,
        status:1
      },
      success: function(res) {
        wx.hideLoading({
          success: (res) => {},
        })
        wx.showToast({
          title: '上传成功\n请耐心等待审核',
          icon:'none'
        })
        that.setData({
          tempFiles:[]
        })
      }
    })
  },
  lookImgAction:function(){
    wx.previewImage({
      urls: this.data.tempFiles,
    })
  },
  uploadAction:function(){
    var that = this
    wx.chooseImage({
      count: 9-that.data.tempFiles.length,
      sizeType:'compressed',
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res)
        wx.showLoading({
          title: '正在上传',
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var result = that.data.tempFiles
        let checkErrorCount = 0
        let failCount = 0
        let successCount = 0
        for (let index = 0; index < res.tempFilePaths.length; index++) {
          let tempFilePaths = res.tempFilePaths[index];
          wx.cloud.callFunction({
            name: 'checkImageOrContent',
            data: {
              img:tempFilePaths 
            },
            success(res) {
              console.log(res.result)
              if (res.result.errCode == 87014) {
                checkErrorCount = checkErrorCount+1
              }else{
                wx.cloud.uploadFile({
                  cloudPath:'lianmengInfo/'+new Date().getTime()+'.png', // 上传至云端的路径
                  filePath: tempFilePaths, // 小程序临时文件路径
                  success: res => {
                    // 返回文件 ID
                    console.log("上传成功",res)
                    successCount = successCount + 1
                    result.push(res.fileID)
                    
                    wx.hideLoading({
                      success: (res) => {},
                    })
                    if (checkErrorCount ||
                        failCount) {
                      wx.showToast({
                        title: '有'+failCount+"张图上传失败\n有"+checkErrorCount+"张图违规",
                        icon:"none"
                      })
                    }
                    that.setData({
                      tempFiles:result
                    })
                  },
                  fail:res =>{
                    failCount = failCount + 1
                  }
                  })
              }
            }
          })
        }
      }
    })
  }
})