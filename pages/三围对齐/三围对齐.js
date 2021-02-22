// pages/三围对齐/三围对齐.js
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
    showActiveModule:false,
    showPKCard:false,
    pkGoneInput:0,
    pkFangInput:0,
    pkXueInput:0,
    zuduipkGoneInput:0,
    zuduipkFangInput:0,
    zuduipkXueInput:0,
    shareGone:0,
    shareFang:0,
    shareXue:0,
    openTypeShare:true,
    showIntro:false,
    showIntroCard:false,
    showIntroText:'',
    resultStr:'三围对齐是指各个兵种的极限由于武将和技能的不同导致三围的起始标准不同。例如投石刘邦固有技能就加攻击，而其他兵种没有加的话，那衡量的标准就应该是不一样的。本工具就是减去除攻击技能外（每个兵种都有）附加的三围来达到统一的标准(忽略因为战争值带来的技能数值差距，数值均为满科技数值)',
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
        repaireGong:61,
        repaireFangyu:61,
        repaireXue:103,
        des:'极限弓嬴政固有技能增加42.78的生命加成，多个“意气风发”技能，分别修正\n攻击：嬴政30.73，李逍遥：30.44\n生命：嬴政30.73，李逍遥：30.44\n防御：嬴政30.73，李逍遥：30.44\n总计攻防血61.17，61.17，103.95取整61，61，103'
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
        title:'盾',
        select:false,
        repaireGong:0,
        repaireXue:0,
        repaireFangyu:0,
        des:'盾暂时不需要对齐三围'
      },
      {
        id:6,
        title:'攻城车',
        select:false,
        repaireGong:0,
        repaireXue:0,
        repaireFangyu:0,
        des:'攻城车暂时不需要对齐三围'
      },
      {
        id:7,
        title:'弩',
        select:false,
        repaireGong:0,
        repaireXue:0,
        repaireFangyu:0,
        des:'弩兵暂时不需要对齐三围'
      },
    ],
    pkBingZhongList:[
      {
        id:0,
        title:'枪兵',
        select:true,
        repaireGong:0,
        repaireFangyu:0,
        repaireXue:142,
        des:'极限枪兵多个“枪兵生命”技能，分别修正\n生命：项羽：69.97，关羽/司马：67.92\n 君主技能多5点生命\n总计142.89 取整142'
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
        repaireGong:0,
        repaireFangyu:-38,
        repaireXue:38,
        des:'极限近战骑神兽第四技能相对于枪弓少38.7防御多38.7生命\n总计攻防血0 -38.7 38.7 取整0 -38 38'
      },
      {
        id:3,
        title:'弓兵',
        select:false,
        repaireGong:61,
        repaireFangyu:61,
        repaireXue:103,
        des:'极限弓嬴政固有技能增加42.78的生命加成，多个“意气风发”技能，分别修正\n攻击：嬴政30.73，李逍遥：30.44\n生命：嬴政30.73，李逍遥：30.44\n防御：嬴政30.73，李逍遥：30.44\n总计攻防血61.17，61.17，103.95取整61，61，103'
      },
      {
        id:4,
        title:'投石车',
        select:false,
        repaireGong:178,
        repaireFangyu:68,
        repaireXue:107,
        des:'极限投石刘邦固有技能增加71.3的攻击加成，多个“攻守兼备”技能，分别修正\n攻：刘邦34.94，庞统：33.96\n生命：刘邦34.94，庞统：33.96\n防御：刘邦34.94，庞统：33.96\n神兽第三技能比枪弓多38.7攻击，第四技能相对于枪弓多38.7生命，\n总计攻血防178.9，68.9，107.6取整178，68，107'
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
      if (app.globalData.userInfo) {
         
      }else{
        app.userInfoReadyCallback = res => {
          console.log('回调')
         
        }
        this.setData({
          openTypeShare:false
        })
      }
  },
  bindGetUserInfo:function(e){
    console.log('回调')
    var userInfo = JSON.stringify(e.detail.userInfo);
    console.log(userInfo);
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      console.log('有用户信息了'+app.globalData.userInfo)
      this.setData({
        openTypeShare:true
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
  pkGoneInput:function(e){
    this.setData({
      pkGoneInput:e.detail.value
    })
  },
  pkFangInput:function(e){
    this.setData({
      pkFangInput:e.detail.value
    })
  },
  pkXueInput:function(e){
    this.setData({
      pkXueInput:e.detail.value
    })
  },
  zuduipkGoneInput:function(e){
    this.setData({
      zuduipkGoneInput:e.detail.value
    })
  },
  zuduipkFangInput:function(e){
    this.setData({
      zuduipkFangInput:e.detail.value
    })
  },
  zuduipkXueInput:function(e){
    this.setData({
      zuduipkXueInput:e.detail.value
    })
    console.log(this.data.zuduipkXueInput);
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
  pkJixianCheckTap:function(e){
    for (let index = 0; index < this.data.pkBingZhongList.length; index++) {
      var current='pkBingZhongList['+index+'].select';
      this.setData({
        [current]:false
      })
      
    }
    var index = Math.floor(e.currentTarget.id);
    var value = this.data.pkBingZhongList[index];
    var current='pkBingZhongList['+index+'].select';
    this.setData({
      [current]:true
    })
    console.log( this.data.bingZhongList[index]);
  },
  calculateAction:function(){
    if (this.data.gongjiInput==0||
      this.data.xueInput == 0 ||
      this.data.fangyuInput == 0) {
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
    var result = '';
    var pKModuleShow = true;
    var showIntro = true;
    for (let index = 0; index < this.data.bingZhongList.length; index++) {
      const element = this.data.bingZhongList[index];
      if (element.select) {
        console.log(element);
        result = '对齐后三围(包括组队)为:\n攻击：';
        var gongji = this.data.gongjiInput-element.repaireGong+Number(this.data.zuduigongjiInput);
        var xue = this.data.xueInput-element.repaireXue+Number(this.data.zuduixueInput);;
        var fangyu = this.data.fangyuInput - element.repaireFangyu+Number(this.data.zuduifangyuInput);
        this.setData({
          shareGone:gongji,
          shareFang:fangyu,
          shareXue:xue
        })
        result = result+gongji+'\n防御：'+fangyu +'\n生命：'+xue;
        let total = Number(gongji)+Number(xue)+Number(fangyu);
        console.log('gongji'+gongji +'\nxue'+xue +'\nfangyu'+fangyu + '\n三围：'+total);
        if (index > 4 && index<7) {
          result = result +'\n对齐说明:'+element.des;
          total = Number(xue)+Number(fangyu);
          result = result + '\n主公的两围为：'+total;
          if (total>=3000) {
            result = result + '\n评级为 S 级了，请接受我的膜拜';
         }else if(total >= 2600){
           result = result + '\n评级为 A+ 级了，距离 S 级还差'+(3000-total)+'点两围';
         }else if (total>=2200) {
           result = result + '\n评级为 A 级了，距离 A+ 级还差'+(2600-total)+'点两围';
         }else{
           result = result + '\n评级为 B 级了，距离 A 级还差'+(2200-total)+'点两围';
         }
         pKModuleShow = false;
         showIntro = false;
        }else{
          result = result + '\n主公的三围为：'+total;
          if (total>=4500) {
            result = result + '\n评级为 S 级了，请接受我的膜拜';
         }else if(total >= 4000){
           result = result + '\n评级为 A+ 级了，距离 S 级还差'+(4500-total)+'点三围';
         }else if (total>3500) {
           result = result + '\n评级为 A 级了，距离 A+ 级还差'+(4000-total)+'点三围';
         }else{
           result = result + '\n评级为 B 级了，距离 A 级还差'+(3500-total)+'点三围';
         }
        }
        
        this.setData({
          showIntro:showIntro,
          showIntroText:element.des,
          showActiveModule:pKModuleShow,
          resultStr:result
        })
        break;
      }
    }
  },
  pkAction:function(){
    this.setData({
      showPKCard:true
    })
  },
  shareAction:function(){

  },
  cancel: function () {
    var that = this
    that.setData({
      showPKCard:false
    })
  },
  confirmAcceptance:function(){
    if (this.data.pkGoneInput==0||
      this.data.pkXueInput == 0 ||
      this.data.pkFangInput == 0) {
        wx.showToast({
          title: '数据录入错误',
          icon:'none'
        })
        return;
    }
    var result = '';
    let total = Number(this.data.shareGone)+Number(this.data.shareFang)+Number(this.data.shareXue);
    for (let j = 0; j < this.data.pkBingZhongList.length; j++) {
      const pkElement = this.data.pkBingZhongList[j];
      if (pkElement.select) {
        var pkGongji = this.data.pkGoneInput-pkElement.repaireGong+Number(this.data.zuduipkGoneInput);
        var pkFangyu = this.data.pkFangInput - pkElement.repaireFangyu+Number(this.data.zuduipkFangInput);
        var pkXue = this.data.pkXueInput-pkElement.repaireXue+Number(this.data.zuduipkXueInput);
        let pkTotal = Number(pkGongji)+Number(pkFangyu)+Number(pkXue);
        if (total>pkTotal) {
          result = result + '\nPK结果：主公胜\n主公对齐后三围高出对方'+Number(total-pkTotal) +'点\n';
          result = result + '主公对齐后的三围为:\n攻击：';
          result = result+this.data.shareGone+'  防御：'+this.data.shareFang +'  生命：'+this.data.shareXue+'\n总三围：'+total;
          result = result + '\n对方对齐后的三围为:\n攻击：';
          result = result+pkGongji+'  防御：'+pkFangyu +'  生命：'+pkXue+'\n总三围：'+pkTotal;
        }else if(total == pkTotal){
          result = result +'\nPK结果：打平了\n太巧了。主公和对方的三围竟是相同的\n';
          result = result +'主公对齐后的三围为:\n攻击：';
          result = result+this.data.shareGone+'  防御：'+this.data.shareFang +'  生命：'+this.data.shareXue+'\n总三围：'+total;
          result = result + '\n对方对齐后的三围为:\n攻击：';
          result = result+pkGongji+'  防御：'+pkFangyu +'  生命：'+pkXue+'\n总三围：'+pkTotal;
        }else{
          result = result +'\nPK结果：对方胜\n主公加油变强呀\n';
          result = result +'主公对齐后的三围为:\n攻击：';
          result = result+this.data.shareGone+'  防御：'+this.data.shareFang +'  生命：'+this.data.shareXue+'\n总三围：'+total;
          result = result + '\n对方对齐后的三围为:\n攻击：';
          result = result+pkGongji+'  防御：'+pkFangyu +'  生命：'+pkXue+'\n总三围：'+pkTotal;
        }
        result = result +'\n组队三围后续版本增加，请各位主公稍安勿躁'
      }
    }
    this.setData({
      showPKCard:false,
      pkGoneInput:0,
      pkXueInput:0,
      pkFangInput:0,
      showIntro:false,
      resultStr:result
    })
  },
  introAction:function(){
    this.setData({
      showIntroCard:true
    })
  },
  introCancel: function () {
    var that = this
    that.setData({
      showIntroCard:false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var bingzhong = '';
    for (let index = 0; index < this.data.bingZhongList.length; index++) {
      const element = this.data.bingZhongList[index];
      if (element.select) {
        bingzhong = element.title;
        break;
      }
    }
    let url = 'pages/三围分享/三围分享?shareGone=' + this.data.shareGone+'&shareFang='+this.data.shareFang+'&shareXue='+this.data.shareXue+'&bingZhong='+bingzhong+'&nickName='+app.globalData.userInfo.nickName+'&head='+app.globalData.userInfo.avatarUrl;
    console.log('title = '+bingzhong+'\nurl='+url);
    return {
      title:'我的极限'+bingzhong+'好厉害，不服来PK',
      path:url
    }
  }
})