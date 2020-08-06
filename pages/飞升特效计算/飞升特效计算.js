// pages/飞升特效计算/飞升特效计算.js
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
    userData:[
      {
       title:'长啸星',
       main:[
        {
          title:'斗宿',
          level:20,
          tongpaiUnit:12,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:2.5
        },
        {
         title:'牛宿',
         level:20,
         tongpaiUnit:20,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:4
       },
       {
         title:'女宿',
         level:20,
         tongpaiUnit:27,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:5.5
       },
       {
         title:'虚宿',
         level:20,
         tongpaiUnit:35,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:7
       },
       {
         title:'危宿',
         level:20,
         tongpaiUnit:42,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:8.5
       },
       {
         title:'室宿',
         level:20,
         tongpaiUnit:50,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:10
       },
       {
         title:'壁宿',
         level:20,
         tongpaiUnit:62,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:12.5
       },
       {
         title:'原宿',
         level:20,
         tongpaiUnit:75,
         zipaiUnit:0,
         huangpaiUnit:0,
         timeUnit:15
       },
       ],
       chuanshuo:[
        {
          title:'阻宿',
          level:20,
          tongpaiUnit:0,
          zipaiUnit:0,
          huangpaiUnit:42,
          timeUnit:17
        },
        {
          title:'苦宿',
          level:20,
          tongpaiUnit:0,
          zipaiUnit:0,
          huangpaiUnit:62,
          timeUnit:25
        },
       ]
      },
      {
        title:'天狼星',
        main:[
         {
           title:'奎宿',
           level:20,
           tongpaiUnit:62,
           zipaiUnit:0,
           huangpaiUnit:0,
           timeUnit:12.5
         },
         {
          title:'娄宿',
          level:20,
          tongpaiUnit:75,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:15
        },
        {
          title:'未宿',
          level:20,
          tongpaiUnit:87,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:17.5
        },
        {
          title:'昂宿',
          level:20,
          tongpaiUnit:100,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:20
        },
        {
          title:'毕宿',
          level:20,
          tongpaiUnit:112,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:22.5
        },
        {
          title:'觜宿',
          level:20,
          tongpaiUnit:125,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:25
        },
        {
          title:'参宿',
          level:20,
          tongpaiUnit:137,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:27.5
        },
        {
          title:'里宿',
          level:20,
          tongpaiUnit:150,
          zipaiUnit:0,
          huangpaiUnit:0,
          timeUnit:30
        },
        ],
        chuanshuo:[
         {
           title:'离宿',
           level:20,
           tongpaiUnit:0,
           zipaiUnit:0,
           huangpaiUnit:137,
           timeUnit:55
         },
         {
           title:'归宿',
           level:20,
           tongpaiUnit:0,
           zipaiUnit:0,
           huangpaiUnit:150,
           timeUnit:60
         },
        ]
       },
       {
        title:'凤舞星',
        main:[
         {
           title:'心宿',
           level:20,
           tongpaiUnit:137,
           zipaiUnit:34,
           huangpaiUnit:0,
           timeUnit:27.5
         },
         {
          title:'鬼宿',
          level:20,
          tongpaiUnit:150,
          zipaiUnit:37,
          huangpaiUnit:0,
          timeUnit:30
        },
        {
          title:'柳宿',
          level:20,
          tongpaiUnit:170,
          zipaiUnit:42,
          huangpaiUnit:0,
          timeUnit:34
        },
        {
          title:'星宿',
          level:20,
          tongpaiUnit:190,
          zipaiUnit:47,
          huangpaiUnit:0,
          timeUnit:38
        },
        {
          title:'张宿',
          level:20,
          tongpaiUnit:210,
          zipaiUnit:52,
          huangpaiUnit:0,
          timeUnit:42
        },
        {
          title:'翼宿',
          level:20,
          tongpaiUnit:230,
          zipaiUnit:57,
          huangpaiUnit:0,
          timeUnit:46
        },
        {
          title:'轸宿',
          level:20,
          tongpaiUnit:250,
          zipaiUnit:62,
          huangpaiUnit:0,
          timeUnit:50
        },
        {
          title:'辘宿',
          level:20,
          tongpaiUnit:270,
          zipaiUnit:67,
          huangpaiUnit:0,
          timeUnit:54
        },
        ],
        chuanshuo:[
         {
           title:'木宿',
           level:20,
           tongpaiUnit:0,
           zipaiUnit:0,
           huangpaiUnit:210,
           timeUnit:84
         },
         {
           title:'乾宿',
           level:20,
           tongpaiUnit:0,
           zipaiUnit:0,
           huangpaiUnit:250,
           timeUnit:100
         },
        ]
       },
       {
        title:'飞龙星',
        main:[
         {
           title:'角宿',
           level:20,
           tongpaiUnit:250,
           zipaiUnit:62,
           huangpaiUnit:0,
           timeUnit:50
         },
         {
          title:'亢宿',
          level:20,
          tongpaiUnit:270,
          zipaiUnit:67,
          huangpaiUnit:0,
          timeUnit:54
        },
        {
          title:'氐宿',
          level:20,
          tongpaiUnit:290,
          zipaiUnit:72,
          huangpaiUnit:0,
          timeUnit:58
        },
        {
          title:'房宿',
          level:20,
          tongpaiUnit:310,
          zipaiUnit:77,
          huangpaiUnit:0,
          timeUnit:62
        },
        {
          title:'挪宿',
          level:20,
          tongpaiUnit:337,
          zipaiUnit:84,
          huangpaiUnit:0,
          timeUnit:67.5
        },
        {
          title:'尾宿',
          level:20,
          tongpaiUnit:365,
          zipaiUnit:91,
          huangpaiUnit:0,
          timeUnit:73
        },
        {
          title:'簸宿',
          level:20,
          tongpaiUnit:392,
          zipaiUnit:98,
          huangpaiUnit:0,
          timeUnit:78.5
        },
        {
          title:'牙宿',
          level:20,
          tongpaiUnit:420,
          zipaiUnit:105,
          huangpaiUnit:0,
          timeUnit:84
        },
        ],
        chuanshuo:[
         {
           title:'周宿',
           level:20,
           tongpaiUnit:0,
           zipaiUnit:0,
           huangpaiUnit:392,
           timeUnit:157
         },
         {
           title:'盘宿',
           level:20,
           tongpaiUnit:0,
           zipaiUnit:0,
           huangpaiUnit:420,
           timeUnit:170
         },
        ]
       },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    db.collection('feiShengList').where(
      {
        userId:app.globalData.openid
      }
    ).get({
      success:function(res){
        console.log(res.data);
        wx.hideLoading({
          success: (res) => {},
        })
        if (res.data.length!=0) {
           
        }else{
          const element = res.data[0];
          that.setData({
            userData:element.useData
          })
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

  }
})