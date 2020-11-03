// pages/九鼎匹配/九鼎匹配分组.js
const app = getApp()
var databaseUtil = require('../../utils/dataBaseUtil')
const db = wx.cloud.database({
  env: databaseUtil.getDataBaseEnv()
})
let interstitialAd = null
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
    currentTeamList:[],
    teamId:1,
    smallTeamId:1,
    showMatchCard:false,
    showMatchText:'',
    adOnceShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-5c619c8d7d63ae58'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    } 
    this.refreshData()
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
      [current]:true,
      teamId:Number(e.currentTarget.id)
    })
    this.refreshData()
  },
  smallTeamTap:function(e){
    for (let index = 0; index < this.data.smallTeamList.length; index++) {
      var current='smallTeamList['+index+'].select';
      this.setData({
        [current]:false,
      })
      
    }
    var index = Math.floor(e.currentTarget.id)-1;
    var value = this.data.smallTeamList[index];
    var current='smallTeamList['+index+'].select';
    this.setData({
      [current]:true,
      smallTeamId:Number(e.currentTarget.id)
    })
    this.refreshData()
  },
  zhanduiTap:function(e){
     
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
     var positon = Number(e.currentTarget.id)
     console.log(positon)
     var that = this;
     var teamId = this.data.teamId
     var smallTeamId = this.data.smallTeamId
    db.collection('matchList').where(db.command.or([
      {
        teamId:teamId,
        leftPosition:positon,
      },
      {
        teamId:teamId,
        rightPosition:positon,
      }
    ])).get({
      success:function(res){
        console.log(res);
        wx.hideLoading({
          success: (res) => {},
        })
        if (res.data.length==0) {
           wx.showToast({
             title: '抱歉呢主公，未找到匹配结果',
             icon:'none'
           })
        }else{
          const element = res.data[0];
          console.log(element)
          if (element.leftPosition == positon) {
            that.findMatch(element.rightPosition)
          }else{
            that.findMatch(element.leftPosition)
          }
        }
      }
    })
  },
  findMatch:function(e){
    console.log(e)
    var teamId = this.data.teamId
    var smallTeamId = this.data.smallTeamId
    console.log("teamId"+teamId +"\nsmallTeamId"+smallTeamId)
    var that = this;
    wx.showLoading({
      title: '正在查询',
    })
    db.collection('jiudingTeamList').where(
      {
        teamId:teamId,
        position:e
      }).get({
      success:function(res){
        console.log(res);
        wx.hideLoading({
          success: (res) => {},
        })
        if (res.data.length==0) {
           wx.showToast({
             title: '抱歉呢主公，未找到匹配结果',
             icon:'none'
           })
        }else{
          const element = res.data[0];
          console.log(element)
          var text = "对阵军团:"+element.name +"\n所属区服:"+element.serverName+"\n入围方式:"+element.enterName+"\n入围时排名："+element.rank
          that.setData({
            showMatchCard:true,
            showMatchText:text
          })
        }
      }
    })
  },
  introCancel: function () {
    var that = this
    that.setData({
      showMatchCard:false
    })
  },
  refreshData:function(){
    var teamId = this.data.teamId
    var smallTeamId = this.data.smallTeamId
    
    var that = this;
    wx.showLoading({
      title: '正在加载',
    })
    var param = {
      teamId:teamId,
      smallTeamId:smallTeamId
    }
    console.log(param)
    wx.cloud.callFunction({
      name: 'jiudingTeamList',
      data:param,
      success(res) {
        console.log(res);
        wx.hideLoading({
          success: (res) => {},
        })
        that.setData({
          currentTeamList:res.result.data
        })
      },
      fail(err) {
        console.log(err)
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })

  }
})