// pages/三围分享/三围分享.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareGone:0,
    shareFang:0,
    shareXue:0,
    head:null,
    nickName:null,
    bingzhong:null,
    resultStr:'',
    showPKCard:false,
    pkGoneInput:0,
    pkFangInput:0,
    pkXueInput:0,
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
    this.setData({
      shareGone:options.shareGone,
      shareFang:options.shareFang,
      shareXue:options.shareXue,
      head:options.head,
      nickName:options.nickName+'的'+options.bingZhong,
      bingzhong:options.bingZhong
    })
    console.log(this.data.shareGone + this.data.shareFang + this.data.shareXue+'\n'+this.data.nickName+this.data.bingzhong+this.data.head);
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
  pkAction:function(){
    console.log('111');
    this.setData({
      showPKCard:true
    })
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
            var pkGongji = this.data.pkGoneInput-pkElement.repaireGong;
            var pkFangyu = this.data.pkFangInput - pkElement.repaireFangyu;
            var pkXue = this.data.pkXueInput-pkElement.repaireXue;
            let pkTotal = Number(pkGongji)+Number(pkFangyu)+Number(pkXue);
            if (total<pkTotal) {
              result = result + '\nPK结果：主公胜\n主公对齐后三围高出对方'+Number(pkTotal-total) +'点\n';
              result = result + '主公对齐后的三围为:\n攻击：';
              result = result+pkGongji+'  防御：'+pkFangyu +'  生命：'+pkXue+'\n总三围：'+pkTotal;
              result = result + '\n对方对齐后的总三围为:\n'+total;
            }else if(total == pkTotal){
              result = result +'\nPK结果：打平了\n太巧了。主公和对方的三围竟是相同的\n';
              result = result +'主公对齐后的三围为:\n攻击：';
              result = result+pkGongji+'  防御：'+pkFangyu +'  生命：'+pkXue+'\n总三围：'+pkTotal;
              result = result + '\n对方对齐后的总三围为:\n'+total;
            }else{
              result = result +'\nPK结果：对方胜\n主公加油变强呀\n';
              result = result +'主公对齐后的三围为:\n攻击：';
              result = result+pkGongji+'  防御：'+pkFangyu +'  生命：'+pkXue+'\n总三围：'+pkTotal;
              result = result + '\n对方对齐后的总三围为:\n'+total;
            }
            result = result +'\n组队三围后续版本增加，请各位主公稍安勿躁'
          }
        }
    this.setData({
      showPKCard:false,
      pkGoneInput:0,
      pkXueInput:0,
      pkFangInput:0,
      resultStr:result
    })
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
    
  },
})