// pages/九鼎安排/九鼎安排.js
const app = getApp()
const db = wx.cloud.database({
  env: 'lswztool-debug-ngiig'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isShowConfirm:false,
    teamInputName:null,
    userInputName:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openJiudingTeam:function(){
    console.log(app.globalData.openid);
    if (app.globalData.openid) {
      this.openTeam();
    }else{
      console.log(11);
      var that = this;
      app.loginInfo(function(openid){
        console.log('回调成功');
        that.openTeam();
      });
    }
  },
  openTeam:function(){
    console.log('openTeam');
    var that = this;
    db.collection('jiudingTeamList').where(db.command.or([
      {
        ownerId:app.globalData.openid
      },
      {
        'teamPerson.personId':app.globalData.openid
      }
    ])).get({
      success:function(res){
        console.log(res.data);
        if (res.data.length!=0) {
          wx.showToast({
            title: '已经有团了\r\n点击我参加的团吧',
            icon:'none'
          })
          console.log('haveAlreadyTeam');
        }else{
          console.log('emptyTeam');
          that.setData({
            isShowConfirm:true
          })
        }
      }
    })
  },
  setValue: function (e) {
    this.setData({
      teamInputName: e.detail.value
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
      teamInputName:null,
      isShowConfirm: false,
    })
  },
  confirmAcceptance:function(){
    var that = this
    if (this.data.teamInputName &&
        this.data.userInputName) {
      db.collection('jiudingTeamList').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          teamName: that.data.teamInputName,
          ownerId:app.globalData.openid,
          ownName:that.data.userInputName,
          teamPerson:[{
             personId:app.globalData.openid,
             personName:that.data.userInputName
          }]
        },
        success: function(res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
          that.realGotoJoinTeam();
        }
      })
    }else{
      wx.showToast({
        title: '请先输入名字',
      })
    }
    that.setData({
      isShowConfirm: false,
    })
  },
  openMyJoinTeam:function(){
    var that = this;
    db.collection('jiudingTeamList').where(db.command.or([
      {
        ownerId:app.globalData.openid
      },
      {
        'teamPerson.personId':app.globalData.openid
      }
    ])).get({
      success:function(res){
        console.log(res.data);
        if (res.data.length!=0) {
          that.realGotoJoinTeam();
          console.log('haveAlreadyTeam');
        }else{
          wx.showToast({
            title: '您还未参加团\r\n快去创建或加入一个吧',
            icon:'none'
          })
        }
      }
    })
  },
  realGotoJoinTeam:function(){
    console.log('successgotoJoin')
    wx.navigateTo({
      url: '九鼎开团/九鼎开团',
    })
  },
  testApply:function(){
    wx.navigateTo({
      url: '九鼎申请/九鼎申请?applyId=1503f3385f145762003a714d4f5f085e&applyTeamName=teamTest&teamOwner=beiwo'
    })
  }
})