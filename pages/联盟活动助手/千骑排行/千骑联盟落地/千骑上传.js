// pages/联盟活动助手/千骑排行/千骑联盟落地/千骑上传.js
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
    lianMengScore:'',
    token:'',
    applyInfo:false,
    userName:'',
    userScore:''
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
          that.setData({  
            token:res.data.access_token
          })
        }
      }
    })
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
  uploadExampleAction:function(){
    wx.previewImage({
      urls: ['cloud://lswztool-debug-ngiig.6c73-lswztool-debug-ngiig-1302666573/1531599296524_.pic.jpg'],
    })
  },
  uploadAction:function(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: function(res) {
        console.log(res)
        wx.showLoading({
          title: '正在上传',
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths[0];
        wx.cloud.uploadFile({
          cloudPath:'qianqi/'+new Date().getTime()+'.png', // 上传至云端的路径
          filePath: tempFilePaths, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log("上传成功",res)
            wx.cloud.getTempFileURL({
              fileList: [res.fileID],
              success: res => {
                var elementURL = res.fileList[0]
                console.log(elementURL)
                that.requestPicOCR(elementURL.tempFileURL)
              },
              fail: err => {
                // handle error
                wx.hideLoading({
                  success: (res) => {},
                })
                wx.showToast({
                  title: '失败了',
                  icon:'none'
                })
              }
            })
          },
          fail:console.error()
          
        })
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
  cancel: function () {
    var that = this
    that.setData({
      applyInfo:false
    })
  },
  confirmAcceptance:function(){
    
  },
  requestPicOCR:function(e){
    var that = this;
    wx.request({
      url:'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic',
      method:'POST',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        'url':e,
        access_token:that.data.token
      },
      success (res) {
        console.log(res.data)
        var words = res.data.words_result
        var pos = 0
        for (let index = 0; index < words.length; index++) {
          const element = words[index];
          if (element.words == '排名奖励') {
            pos = index
            break
          }
        }
        const name = words[pos-2]
        const score = words[pos-1]
        if (name.words.length &&
           score.words.length) {
          wx.hideLoading({
            success: (res) => {},
          })
          var nameArray = name.words
          var keyPos = nameArray.indexOf(']')
          var realName = nameArray.substring(keyPos+1)
          var numArray = score.words.split(',')
          var realNumber = ''
          for (let j = 0; j < numArray.length; j++) {
            const element = numArray[j];
            realNumber=realNumber+element
          }
          that.setData({
            applyInfo:true,
            userScore:realNumber,
            userName:realName
          })
        }
      },
      fail (res){
        wx.hideLoading({
          success: (res) => {},
        })
        wx.showToast({
          title: '失败了',
          icon:'none'
        })
        console.log('失败了'+res.data)
      }
    })
  },
})