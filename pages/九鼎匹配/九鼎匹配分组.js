// pages/九鼎匹配/九鼎匹配分组.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamList:[
      {
        id:1,
        name:'第一赛区',
        select:true
      },
      {
        id:2,
        name:'第二赛区',
        select:false
      },
      {
        id:3,
        name:'第三赛区',
        select:false
      },
      {
        id:4,
        name:'第四赛区',
        select:false
      },
      {
        id:5,
        name:'第五赛区',
        select:false
      },
      {
        id:6,
        name:'第六赛区',
        select:false
      },
      {
        id:7,
        name:'第七赛区',
        select:false
      },
      {
        id:8,
        name:'第八赛区',
        select:false
      },
      {
        id:9,
        name:'第九赛区',
        select:false
      },
      {
        id:10,
        name:'第十赛区',
        select:false
      },
      {
        id:11,
        name:'第十一赛区',
        select:false
      },
      {
        id:12,
        name:'第十二赛区',
        select:false
      },
      {
        id:13,
        name:'第十三赛区',
        select:false
      },
      {
        id:14,
        name:'第十四赛区',
        select:false
      },
      {
        id:15,
        name:'第十五赛区',
        select:false
      },
      {
        id:16,
        name:'第十六赛区',
        select:false
      },
    ],
    smallTeamList:[
      {
        id:1,
        name:'麒麟组',
        select:true
      },
      {
        id:2,
        name:'朱雀组',
        select:false
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  teamTap:function(e){
    for (let index = 0; index < this.data.teamList.length; index++) {
      var current='teamList['+index+'].select';
      this.setData({
        [current]:false
      })
      
    }
    var index = Math.floor(e.currentTarget.id)-1;
    var value = this.data.teamList[index];
    var current='teamList['+index+'].select';
    this.setData({
      [current]:true
    })
    this.refreshData()
  },
  smallTeamTap:function(e){
    for (let index = 0; index < this.data.smallTeamList.length; index++) {
      var current='smallTeamList['+index+'].select';
      this.setData({
        [current]:false
      })
      
    }
    var index = Math.floor(e.currentTarget.id)-1;
    var value = this.data.smallTeamList[index];
    var current='smallTeamList['+index+'].select';
    this.setData({
      [current]:true
    })
    this.refreshData()
  },
  refreshData:function(){
    
  }
})