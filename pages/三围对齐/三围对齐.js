// pages/三围对齐/三围对齐.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bingZhongList:[
      {
        id:0,
        title:'枪兵',
        select:true,
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
  jixianCheckTap:function(e){
    for (let index = 0; index < this.data.bingZhongList.length; index++) {
      var current='bingZhongList['+index+'].select';
      this.setData({
        [current]:false
      })
      
    }
    var index = Math.floor(e.currentTarget.id);
    var value = this.data.bingZhongList[index];
    var current='bingZhongList['+index+'].select';
    this.setData({
      [current]:!value.select
    })
    console.log( this.data.bingZhongList[index]);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})