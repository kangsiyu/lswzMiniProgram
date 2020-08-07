// pages/飞升特效计算/飞升特效计算.js
let interstitialAd = null
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
       index:0,
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
       ],
      },
      {
        title:'天狼星',
        index:1,
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
        ],
       },
       {
        title:'凤舞星',
        index:2,
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
        ],
       },
       {
        index:3,
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
        ],
       },
    ],
    resultStr:'',
    adOnceShow:false,
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
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-f6809d1c0cf8ad4e'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
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
        if (res.data.length==0) {
           
        }else{
          const element = res.data[0];
          console.log(element)
          that.setData({
            userData:element.userData
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

  },
  inputLevel:function(e){
    var index = e.currentTarget.dataset.name;
    let indexArray = String(index).split('-');
    var section = indexArray[0];
    index = indexArray[1];
    var star = this.data.userData[section];
    var current = 'userData['+section+'].main['+index+'].level';
    this.setData({
      [current]:Number(e.detail.value)
    })
    console.log(this.data.userData);
  },
  calAction:function(){
    wx.showLoading({
      title: '正在计算',
    })
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
        if (res.data.length==0) {
          console.log('数据库找不到新增一条')
          db.collection('feiShengList').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              userId:app.globalData.openid,
              userData:that.data.userData
            },
            success: function(res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              that.realCal(that);
            }
          })
        }else{
          console.log('需要更新数据库')
          db.collection('feiShengList').where(
            {
              userId:app.globalData.openid
            }
          ).update({
            data: {
              userData:that.data.userData
            },
            success: function(res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              that.realCal(that);
            }
          })
          
        }
      }
    })
  },
  realCal:function(e){
    var that = this;
    if (interstitialAd && this.data.adOnceShow == false) {
      var that = this;
      that.setData({
        adOnceShow:true
       })
      interstitialAd.show().catch((err) => {
       console.error(err)
       that.setData({
        adOnceShow:false
       })  
    })
    }
    var result = '计算结果';
    let lanlong_tongpai_remain = 0;
    let lanlong_zipai_remain = 0;
    let lanlong_jiasu = 0;
    let zilong_tongpai_remain = 0;
    let zilong_zipai_remain = 0;
    let zilong_huangpai_remain = 0;
    let zilong_jiasu = 0;
    for (let index = 0; index < this.data.userData.length; index++) {
      const element = this.data.userData[index];
      for (let j = 0; j < element.main.length; j++) {
        const star = element.main[j];
        let level = star.level;
        if (Number(star.level)>20) {
          level = 20;
        }else if (Number(star.level)<0) {
          level = 0;
        }
        let remainLevel = 20-level;
        zilong_tongpai_remain = Number(zilong_tongpai_remain)+Number((remainLevel*star.tongpaiUnit));
        zilong_zipai_remain = Number(zilong_zipai_remain)+Number((remainLevel*star.zipaiUnit));
        zilong_huangpai_remain =  Number(zilong_huangpai_remain)+Number((remainLevel*star.huangpaiUnit));
        zilong_jiasu =  Number(zilong_jiasu)+Number((remainLevel*star.timeUnit));
        if (index<3 && j<8) {
          lanlong_tongpai_remain = Number(lanlong_tongpai_remain)+Number((remainLevel*star.tongpaiUnit));
          lanlong_zipai_remain = Number(lanlong_zipai_remain)+Number((remainLevel*star.zipaiUnit));
          lanlong_jiasu = Number(lanlong_jiasu)+Number((remainLevel*star.timeUnit));
        }
      }
    }
    result = result + '\n距离蓝龙需要： '+lanlong_tongpai_remain+'个铜色印章 '+lanlong_zipai_remain + '个紫色印章 需要加速' + lanlong_jiasu +'小时\n距离紫龙需要： ' + zilong_tongpai_remain+'个铜色印章 '+zilong_zipai_remain +  '个紫色印章 ' + 
    zilong_huangpai_remain + '个传说印章 需要加速' + zilong_jiasu+'小时\n温馨提示：观星活动时的礼包性价比很高而且完成每日活动会送很多道具，祝主公早日紫龙在天'
    this.setData({
      resultStr:result
    })
  },
})