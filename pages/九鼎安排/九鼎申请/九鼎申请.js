// pages/九鼎安排/九鼎申请/九鼎申请.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      applyTeamId:null,
      applyTeamName:null,
      teamOwner:null,
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
      applyTeamId:options.applyId,
      applyTeamName:options.applyTeamName,
      teamOwner:options.teamOwner,
     });
     console.log(this.data.applyTeamId+"\n"+this.data.applyTeamName+'\n'+this.data.teamOwner);
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

  },
  jixianCheckTap:function(e){
    console.log(e);
    var index = e.currentTarget.id;
    console.log(index);
    this.setData({
      'bingZhongList[index].select':bingZhongList[index].select?false:true
    })
  }
})