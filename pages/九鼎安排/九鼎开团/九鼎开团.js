// pages/九鼎安排/九鼎开团/九鼎开团.js
const app = getApp()
const db = wx.cloud.database({
  env: 'lswztool-debug-ngiig'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
     title:'我的任务',
     teams:null,
     teamPersons:[],
     isShowApplyInfo:false,
     applyPersons:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
          var item = res.data[0];
          console.log(item);
          if (item.ownerId == app.globalData.openid) {
              //为创建者
              that.setData({
                title:'我的团员',
                teamPersons:item.teamPerson
              })
          }
        }else{
          
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
  ballMoveEvent: function (e) {
    console.log('我被拖动了....')
    var touchs = e.touches[0];
    var pageX = touchs.pageX;
    var pageY = touchs.pageY;
    console.log('pageX: ' + pageX)
    console.log('pageY: ' + pageY)
   },
   ballMoveEnd:function(e){
     console.log('结束拖动');
     console.log(e.changedTouches[0]);
     
   },
   applyInfoClick:function(){
      this.setData({
        isShowApplyInfo:true
      })
   },
})