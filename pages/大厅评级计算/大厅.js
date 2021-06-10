// pages/大厅评级计算/大厅.js
let interstitialAd = null
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gongjiInput:0,
    xueInput:0,
    fangyuInput:0,
    zuduigongjiInput:0,
    zuduifangyuInput:0,
    zuduixueInput:0,
    adOnceShow:false,
    bingZhongList:[
      {
        id:0,
        title:'枪兵',
        select:true,
        repaireGong:42,
        repaireFangyu:0,
        repaireXue:144,
        des:'秦琼固有技能“撒手锏”增加攻击42.38，取整42，枪兵多个“钩镰枪”技能，分别修正\n生命：项羽：69.87，秦琼：69.22\n 君主技能多5点生命\n总计144.09 取整144'
      },
      {
        id:1,
        title:'骑射手',
        select:false,
        repaireGong:34,
        repaireFangyu:-4,
        repaireXue:72,
        des:'极限骑射多个“陷阵冲锋”技能，分别修正\n攻击：芈月17.47，韩信：16.98\n生命：芈月17.47，韩信：16.98\n防御：芈月17.47，韩信：16.98\n神兽第四技能相对于枪弓少38.7防御多38.7生命\n总计攻防血34.45 -4.87 72.7 取整34 -4 72'
      },
      {
        id:2,
        title:'近战骑',
        select:false,
        repaireGong:42.38,
        repaireFangyu:-38,
        repaireXue:38,
        des:'极限近战骑神兽第四技能相对于枪弓少38.7防御多38.7生命，尉迟恭固有技能增加42.38\n总计攻防血42.38 -38.7 38.7 取整42 -38 38'
      },
      {
        id:3,
        title:'弓兵',
        select:false,
        repaireGong:103,
        repaireFangyu:61,
        repaireXue:103,
        des:'极限弓嬴政固有技能增加42.78的生命加成，逍遥少侠固有技能增加42.38攻击，多个“意气风发”技能，分别修正\n攻击：嬴政30.73，李逍遥：30.44\n生命：嬴政30.73，李逍遥：30.44\n防御：嬴政30.73，李逍遥：30.44\n总计攻防血103.55，61.17，103.95取整103，61，103'
      },
      {
        id:4,
        title:'投石车',
        select:false,
        repaireGong:221,
        repaireFangyu:69,
        repaireXue:108,
        des:'极限投石刘邦固有技能增加71.3的攻击加成，多个“攻守兼备”技能，分别修正\n攻：刘邦34.94，李白：34.61\n生命：刘邦34.94，李白：34.61\n防御：刘邦34.94，李白：34.61\n神兽第三技能比枪弓多38.7攻击，第四技能相对于枪弓多38.7生命，\n李白固有技能增加42.3的攻击加成，总计攻血防221.85，69.85，108.55取整221，69，108'
      },
      {
        id:5,
        title:'弩',
        select:false,
        repaireGong:0,
        repaireXue:0,
        repaireFangyu:0,
        des:'弩兵暂时不需要对齐三围'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 在页面onLoad回调事件中创建插屏广告实例
     if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-850617ebb834bb2e'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
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
  gongjiInput:function(e){
    this.setData({
      gongjiInput:e.detail.value
    })
},
zuduigongjiInput:function(e){
  this.setData({
    zuduigongjiInput:e.detail.value
  })
},
xueInput:function(e){
   this.setData({
     xueInput:e.detail.value
   })
},
zuduixueInput:function(e){
  this.setData({
    zuduixueInput:e.detail.value
  })
},
fangyuInput:function(e){
 this.setData({
   fangyuInput:e.detail.value
 })
},
zuduifangyuInput:function(e){
  this.setData({
    zuduifangyuInput:e.detail.value
  })
},
calculateAction:function(){
  if (this.data.gongjiInput==0||
    this.data.xueInput == 0 ||
    this.data.fangyuInput == 0||
    this.data.zuduifangyuInput == 0||
    this.data.zuduigongjiInput == 0||
    this.data.zuduixueInput == 0) {
      wx.showToast({
        title: '数据录入错误',
        icon:'none'
      })
      return;
  }
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
  var result = '计算结果：';
  let totalGongji = Number(this.data.zuduigongjiInput)+Number(this.data.gongjiInput);
  let totalShengming = Number(this.data.zuduixueInput)+Number(this.data.xueInput);
  console.log("攻击="+totalGongji+'血='+totalShengming);
  let gongjiBase = Number(totalGongji-1900);
  let gongjiLevel = -1;
  if (gongjiBase>=0) {
      gongjiLevel = Math.floor(gongjiBase/100);
  }
  let shengmingBase = Number(totalShengming-1425);
  let shengmingLevel = -1;
  if (shengmingBase>=0) {
      shengmingLevel = Math.floor(shengmingBase/75);
  }
  console.log("gongjiBase="+gongjiBase+'\ngongjiLevel='+gongjiLevel+"\nshengmingBase="+shengmingBase+"\nshengmingLevel="+shengmingLevel);
  const imageData = [
    {
      
    }
  ]
  if (Math.min(gongjiLevel,shengmingLevel)<0) {
      result = result+'\n主公当前的评级低于红A';
      let needGongji = -gongjiBase;
      let needXue = -shengmingBase;
      result = result+'\n需要提升'
      if (needGongji>0) {
         result = result+'\n'+needGongji+"点攻击"
      }
      if (needXue>0) {
         result = result+'\n'+needXue+"点血"
      }
      result = result+'\n到红A评级'
  }else{
      const levelArray = [
        '红A','红A+','红S','红S+','红SS','红SS+','红SSS','金A'
        ,'金A+','金S','金S+','金SS','金SS+','金SSS'
      ]
      let nowLevel = Math.min(gongjiLevel,shengmingLevel);
      let nowLevelStr = levelArray[nowLevel];
      result = result+'\n主公当前的评级为'+nowLevelStr;
      let nextLevel = nowLevel+1
      if (nextLevel>13) {
        result = result+'\n主公已经提升到了极致，太厉害了！'
      }else{
        let needGongji = nextLevel*100-gongjiBase;
        let needXue = nextLevel*75-shengmingBase;
        result = result+'\n需要提升'
        if (needGongji>0) {
           result = result+'\n'+needGongji+"点攻击"
        }
        if (needXue>0) {
          result = result+'\n'+needXue+"点血"
        }
         result = result+'\n到'+levelArray[nextLevel];
      }
  }
  result=result+'\n计算误差为1点 攻或者血 左右'
  this.setData({
    resultStr:result
  })
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
    [current]:true
  })
  console.log( this.data.bingZhongList[index]);
},
})