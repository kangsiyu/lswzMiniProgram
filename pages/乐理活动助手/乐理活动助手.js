// pages/乐理活动助手/乐理活动助手.js
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
    yueqiInfo:[],
    remainColor:['#3399ff','#3bd863','#ec6912','#ece812','#12eccf','#470099','#ec1236','#da12ec'],
    inputInfo:[
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
      {
        inputText:'',
        color:'#ffffff'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    db.collection('yueliInfo').get({
      success:function(res){
        if (res.data.length) {
           const element = res.data[0];
           console.log(element)
           if (element.yueqiInfo) {
              that.setData({
                yueqiInfo:element.yueqiInfo
              })
              console.log(that.data.yueqiInfo)
           }
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
  inputNumber:function(e){
    var index = e.currentTarget.dataset.name;
    console.log(index);
    if (Number(index)<this.data.inputInfo.length) {
      const element = this.data.inputInfo[index];
      element.inputText = e.detail.value;
      let isHaveColor = false;
      for (let i = 0; i < this.data.inputInfo.length; i++) {
        const elementList = this.data.inputInfo[i];
        if (i != index && elementList.inputText == element.inputText) {
           if (elementList.color != '#000000') {
             element.color = elementList.color;
             isHaveColor = true;
             this.setData({
              inputInfo:this.data.inputInfo
            })
             break;
           }
        }
      }
      if (!isHaveColor && this.data.remainColor.length>0 &&element.color=='#ffffff') {
        const color = this.data.remainColor.pop();
        element.color = color;
        console.log(this.data.inputInfo)
        this.setData({
          inputInfo:this.data.inputInfo
        })
      }
    }
  }
})