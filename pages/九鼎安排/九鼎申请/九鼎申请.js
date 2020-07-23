// pages/九鼎安排/九鼎申请/九鼎申请.js
var databaseUtil = require('../../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      applyTeamId:null,
      applyTeamName:null,
      teamOwner:null,
      teamOwnerId:null,
      showApplyCard:false,
      bingZhongList:[
      {
        id:0,
        title:'枪兵',
        select:false,
      },
      {
        id:1,
        title:'盾兵',
        select:false,
      },
      {
        id:2,
        title:'骑射手',
        select:false,
      },
      {
        id:3,
        title:'近战骑',
        select:false,
      },
      {
        id:4,
        title:'弓兵',
        select:false,
      },
      {
        id:5,
        title:'弩兵',
        select:false,
      },
      {
        id:6,
        title:'投石车',
        select:false,
      },
      {
        id:7,
        title:'攻城车',
        select:false,
      },
    ],
      userInputName:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
      applyTeamId:options.applyTeamId,
      applyTeamName:options.applyTeamName,
      teamOwner:options.teamOwner,
      teamOwnerId:options.teamOwnerId
     });
     console.log(this.data.applyTeamId+"\n"+this.data.applyTeamName+'\n'+this.data.teamOwner);
     if (app.globalData.openid == null) {
      var that = this;
      app.loginInfo(function(openid){
        console.log('鉴权回调成功');
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
  applyButtonAction:function(){
    this.setData({
      showApplyCard:true
    })
  },
  setGameName:function(e){
    this.setData({
      userInputName: e.detail.value
    })
  },
  cancel: function () {
    var that = this
    that.setData({
      userInputName:null,
      showApplyCard: false,
    })
  },
  confirmAcceptance:function(){
    var that = this;
    if (this.data.applyTeamId == null||
      app.globalData.openid == null ||
      this.data.teamOwnerId == null) {
      wx.showToast({
        title: '数据错误',
        icon:'none'
      })
      return;
    }
    // if (this.data.teamOwnerId == app.globalData.openid) {
    //   wx.showToast({
    //     title: '主公已经是这个团的团长了哦',
    //     icon:'none'
    //   })
    //   return;
    // }
    if (this.data.userInputName) {
      let isHaveJiXian = false;
      var jixianList = [];
      for (let index = 0; index < this.data.bingZhongList.length; index++) {
        const element = this.data.bingZhongList[index];
        if (element.select) {
          isHaveJiXian = true;
          jixianList.push(element.title);
        }
      }
      if (isHaveJiXian && jixianList.length) {
        db.collection('applyPersonList').where(
          {
            applyTeamId:that.data.applyTeamId,
            applyPersonId:app.globalData.openid
          }
        ).get({
          success:function(res){
            console.log(res.data);
            if (res.data.length!=0) {
              wx.showToast({
                title: '已经申请过了',
                icon:'none'
              })
              that.setData({
                userInputName:null,
                showApplyCard: false,
              })
              console.log('haveAlreadyTeam');
            }else{
              console.log(jixianList);
              that.addApply(jixianList);
            }
          }
        })
      }else{
        wx.showToast({
          title: '请至少选一个极限吧',
          icon:'none'
        })
      }
    }else{
      wx.showToast({
        title: '请输入名称',
        icon:'none'
      })
    }
     
  },
  jixianCheckTap:function(e){
    console.log(e);
    var index = Math.floor(e.currentTarget.id);
    console.log(index);
    var value = this.data.bingZhongList[index];
    console.log(value);
    var current='bingZhongList['+index+'].select';
    this.setData({
      [current]:!value.select
    })
    console.log( this.data.bingZhongList[index]);
  },
  addApply:function(e){
    var that = this;
    db.collection('applyPersonList').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        applyTeamId: that.data.applyTeamId,
        applyTeamName:that.data.applyTeamName,
        applyPersonId:app.globalData.openid,
        applyUserName:that.data.userInputName,
        teamOwner:that.data.teamOwner,
        teamOwnerId:that.data.teamOwnerId,
        jixianList:e.value,
        enterStatus:false
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
        var that = this;
        wx.showToast({
          title: '申请成功',
        })
      }
    })
  }
})