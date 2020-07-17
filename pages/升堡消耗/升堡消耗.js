// pages/升堡消耗/升堡消耗.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultStr:"王城升级计算结果",
    targetLevel:0,
    currentLevel:0,
    dependInfo:{
      '1':'城墙',
      '2':'伐木场',
      '3':'农田',
      '4':'仓库',
      '5':'太史院',
      '6':'征兵处',
      '7':'医院',
      '8':'车兵营',
      '9':'弓兵营',
      '10':'陷阱作坊',
      '11':'宝石矿',
      '12': '铁矿',
      '13':'使馆',
      '14':'步兵营',
      '15':'骑兵营',
      '16':'烽火台',
      '17':'祭坛',  
      '18':'校场'
    },
    levelInfo:[
      {
        dependInfo:[],
        mutou:0,
        liangshi:0,
        tie:0,
        baoshi:0,
        xingchen:0
     },
      {
         dependInfo:[{
            'dependId':1,
            'dependLevel':1
         }],
         mutou:2800,
         liangshi:2800,
         tie:0,
         baoshi:0,
         xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':2
        }],
        mutou:4000,
        liangshi:4000,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':3
        },{
          'dependId':2,
          'dependLevel':3
        }],
        mutou:5800,
        liangshi:5800,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':4
        },{
          'dependId':3,
          'dependLevel':4
        }],
        mutou:9400,
        liangshi:9400,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':5
        },{
          'dependId':4,
          'dependLevel':5
        }],
        mutou:18000,
        liangshi:18000,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':6
        }],
        mutou:32000,
        liangshi:32000,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':7
        },{
          'dependId':5,
          'dependLevel':7
        }],
        mutou:64000,
        liangshi:64000,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':8
        },{
          'dependId':6,
          'dependLevel':8
        }],
        mutou:120000,
        liangshi:120000,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':9
        },{
          'dependId':4,
          'dependLevel':9
        }],
        mutou:300000,
        liangshi:300000,
        tie:0,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':10
        },{
          'dependId':7,
          'dependLevel':10
        }],
        mutou:340000,
        liangshi:340000,
        tie:31000,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':11
        },{
          'dependId':8,
          'dependLevel':11
        }],
        mutou:640000,
        liangshi:640000,
        tie:59000,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':12
        }],
        mutou:1100000,
        liangshi:1100000,
        tie:100000,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':13
        },{
          'dependId':9,
          'dependLevel':13
        }],
        mutou:1900000,
        liangshi:1900000,
        tie:180000,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':14
        },{
          'dependId':10,
          'dependLevel':14
        }],
        mutou:3000000,
        liangshi:3000000,
        tie:280000,
        baoshi:0,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':15
        },{
          'dependId':11,
          'dependLevel':15
        }],
        mutou:3800000,
        liangshi:3800000,
        tie:350000,
        baoshi:22000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':16
        },{
          'dependId':12,
          'dependLevel':16
        }],
        mutou:5900000,
        liangshi:5900000,
        tie:540000,
        baoshi:34000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':17
        }],
        mutou:7600000,
        liangshi:7600000,
        tie:700000,
        baoshi:44000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':18
        },{
          'dependId':13,
          'dependLevel':18
        }],
        mutou:9900000,
        liangshi:9900000,
        tie:910000,
        baoshi:57000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':19
        }],
        mutou:14000000,
        liangshi:14000000,
        tie:1300000,
        baoshi:80000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':20
        },{
          'dependId':2,
          'dependLevel':20
        }],
        mutou:18000000,
        liangshi:18000000,
        tie:1700000,
        baoshi:110000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':21
        }],
        mutou:24000000,
        liangshi:24000000,
        tie:2200000,
        baoshi:140000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':22
        },{
          'dependId':14,
          'dependLevel':22
        }],
        mutou:34000000,
        liangshi:34000000,
        tie:3100000,
        baoshi:190000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':23
        },{
          'dependId':15,
          'dependLevel':23
        }],
        mutou:43000000,
        liangshi:43000000,
        tie:4000000,
        baoshi:250000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':24
        },{
          'dependId':5,
          'dependLevel':24
        }],
        mutou:57000000,
        liangshi:57000000,
        tie:5200000,
        baoshi:320000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':25
        },{
          'dependId':13,
          'dependLevel':25
        }],
        mutou:74000000,
        liangshi:74000000,
        tie:6700000,
        baoshi:420000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':26
        },{
          'dependId':4,
          'dependLevel':26
        }],
        mutou:100000000,
        liangshi:100000000,
        tie:9500000,
        baoshi:590000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':27
        },{
          'dependId':14,
          'dependLevel':27
        }],
        mutou:130000000,
        liangshi:130000000,
        tie:12000000,
        baoshi:770000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':28
        },{
          'dependId':8,
          'dependLevel':28
        }],
        mutou:170000000,
        liangshi:170000000,
        tie:16000000,
        baoshi:990000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':29
        },{
          'dependId':9,
          'dependLevel':29
        }],
        mutou:230000000,
        liangshi:230000000,
        tie:21000000,
        baoshi:1300000,
        xingchen:0
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':30
        }],
        mutou:300000000,
        liangshi:300000000,
        tie:27000000,
        baoshi:1700000,
        xingchen:2000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':31
        },{
          'dependId':13,
          'dependLevel':31
        }],
        mutou:370000000,
        liangshi:370000000,
        tie:34000000,
        baoshi:2100000,
        xingchen:4000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':32
        },{
          'dependId':16,
          'dependLevel':32
        }],
        mutou:440000000,
        liangshi:440000000,
        tie:40000000,
        baoshi:2500000,
        xingchen:6000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':33
        },{
          'dependId':5,
          'dependLevel':33
        }],
        mutou:540000000,
        liangshi:540000000,
        tie:49000000,
        baoshi:3100000,
        xingchen:8000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':34
        }],
        mutou:640000000,
        liangshi:640000000,
        tie:58000000,
        baoshi:3600000,
        xingchen:10000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':35
        },{
          'dependId':17,
          'dependLevel':35
        }],
        mutou:720000000,
        liangshi:720000000,
        tie:67000000,
        baoshi:4200000,
        xingchen:12000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':36
        },{
          'dependId':4,
          'dependLevel':36
        }],
        mutou:830000000,
        liangshi:830000000,
        tie:76000000,
        baoshi:4800000,
        xingchen:15000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':37
        },{
          'dependId':18,
          'dependLevel':37
        }],
        mutou:970000000,
        liangshi:970000000,
        tie:89000000,
        baoshi:5500000,
        xingchen:19000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':38
        },{
          'dependId':16,
          'dependLevel':38
        }],
        mutou:1100000000,
        liangshi:1100000000,
        tie:100000000,
        baoshi:6300000,
        xingchen:24000
      },
      {
        dependInfo:[{
          'dependId':1,
          'dependLevel':39
        },{
          'dependId':10,
          'dependLevel':39
        }],
        mutou:1200000000,
        liangshi:1200000000,
        tie:110000000,
        baoshi:7100000,
        xingchen:30000
      },
    ]
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
  currentInput:function(e){
      this.setData({
        currentLevel:e.detail.value
      })
  },
  targetInput:function(e){
    this.setData({
      targetLevel:e.detail.value
    })
  },
  calculateAction:function(){
    console.log('currentLevel = '+this.data.currentLevel+'targetLevel'+this.data.targetLevel);
    
    if ((Math.floor(this.data.targetLevel) <=Math.floor(this.data.currentLevel))||(this.data.targetLevel <= 0) ||(this.data.targetLevel>40)||(this.data.currentLevel<=0)) {
       wx.showToast({
         title: '请输入正确数据',
       })
       return;
    }
    var mutouTotal = 0;
    var liangshiTotal = 0;
    var tieTotal = 0;
    var baoshiTotal = 0;
    var xingchenTotal = 0;
    var dependInfo = '前置建筑';
    for (let index = Math.floor(this.data.currentLevel); index < Math.floor(this.data.targetLevel); index++) {
      const element = this.data.levelInfo[index];
      console.log('element'+element);
      mutouTotal = Math.floor(mutouTotal)+Math.floor(element.mutou);
      liangshiTotal = Math.floor(liangshiTotal) +Math.floor(element.liangshi);
      tieTotal = Math.floor(tieTotal) +Math.floor(element.tie);
      baoshiTotal = Math.floor(baoshiTotal) +Math.floor(element.baoshi);
      xingchenTotal = Math.floor(xingchenTotal) +Math.floor(element.xingchen);
      var dependStr = '';
      for (let j = 0; j < element.dependInfo.length; j++) {
        const depend = element.dependInfo[j];
        console.log('depend:'+depend);
        var dependId = depend.dependId;
        console.log('dependId:'+dependId);
        var dataName = this.data.dependInfo;
        dependStr = dependStr+'  '+depend.dependLevel+'级'+dataName[dependId];
      }
      dependInfo = dependInfo+'\n'+Math.floor(index+1)+'堡:'+dependStr;
    }
    var ziyuan = '资源消耗\n(仅王城升级，前置建筑的后续版本加入):\n木头:'+formatStr(mutouTotal)+'\n粮食:'+formatStr(liangshiTotal)+'\n铁:'+formatStr(tieTotal)+'\n宝石:'+formatStr(baoshiTotal)+'\n星辰:'+formatStr(xingchenTotal)+'\n';
    this.setData({
      resultStr:"王城计算结果:\n"+ziyuan+dependInfo
    })
  }
})

const formatStr = n => {
  var result = n;
  if(n>10000 && n<100000000){
    result = result/10000 + "w";
  }else if(n>100000000){
  result = Math.floor(n/100000000)  +"亿"+Math.floor( (n-Math.floor(n/100000000)*100000000)/10000)+ "w";
  }
  return result;
}