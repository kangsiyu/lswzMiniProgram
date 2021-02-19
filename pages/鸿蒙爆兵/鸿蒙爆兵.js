// pages/鸿蒙爆兵/鸿蒙爆兵.js
let interstitialAd = null
Page({
  baobingInfo:{
    zhanliUnit:0,
    mutouUnit:0,
    liangshiUnit:0,
    tieUnit:0,
    baoshiUnit:0,
  },
  timeInfo:{
    timeAll:0,
    hoursUnit:0,
    minUnit:0,
    secUnit:0,
    countUnit:0,
  },
  /**
   * 页面的初始数据
   */
  data: {
    resultStr:'爆兵结果：',
    adOnceShow:false,
    bingZhongList:[{
        id: 0,
        title: '9级鸿蒙',
        zhanli:'0.6',
        meiqi:'5',
        select:true,
      },
      {
        id: 1,
        title: '10级鸿蒙',
        zhanli:'0.6',
        meiqi:'7',
        select:false
      },
      {
        id: 2,
        title: '11级鸿蒙',
        zhanli:'0.7',
        meiqi:'10',
        select:false
      },
      {
        id: 3,
        title: '12级鸿蒙',
        zhanli:'0.7',
        meiqi:'15',
        select:false
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-c1b36d3bcab460be'
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
  timeAllInput:function(e){
    var timeAllValue = e.detail.value;
    this.timeInfo.timeAll = Number(timeAllValue)*10000;
    console.log(timeAllValue + this.timeInfo.timeAll);
  },
  hoursInput:function(e){
    var hoursUnitSpent = e.detail.value;
    this.timeInfo.hoursUnit = hoursUnitSpent;
    console.log(hoursUnitSpent + this.timeInfo.hoursUnit);
  },
  minInput:function(e){
    var minUnitSpent = e.detail.value;
    this.timeInfo.minUnit = minUnitSpent;
    console.log(minUnitSpent + this.timeInfo.minUnit);
  },
  secondInput:function(e){
    var secUnitSpent = e.detail.value;
    this.timeInfo.secUnit = secUnitSpent;
    console.log(secUnitSpent + this.timeInfo.secUnit);
  },
  calculateAction:function(){
    if (this.timeInfo.timeAll==0||
      (this.timeInfo.hoursUnit == 0 &&
      this.timeInfo.minUnit == 0&&
      this.timeInfo.secUnit == 0)) {
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
    var result = '爆兵结果：';
    for (let index = 0; index < this.data.bingZhongList.length; index++) {
      const element = this.data.bingZhongList[index];
      if (element.select) {
        var secondAll = parseInt(this.timeInfo.hoursUnit*60*60)+parseInt(this.timeInfo.minUnit*60)+parseInt(this.timeInfo.secUnit);
        var bingAllCount = Number(this.timeInfo.timeAll)/Number(element.meiqi);
        var zhanli =  bingAllCount * element.zhanli;
        zhanli = formatStr(zhanli);
        var meiqiTotal = bingAllCount * element.meiqi;
        meiqiTotal = formatStr(meiqiTotal);
        var jiasuTotal = formatStr(((bingAllCount/1000)*secondAll)/3600);
        console.log(bingAllCount + '\n战力：'+zhanli +'\n需要加速：'+jiasuTotal+'小时');
        var bingAllCountStr = formatStr(bingAllCount);
        result = result + '\n可爆:'+bingAllCountStr+'个鸿蒙兵'+'\n共计'+zhanli+'战力（活动分）'+'\n需要加速：'+jiasuTotal+'小时';
        this.setData({
          resultStr:result
        })
      }
    }
  }
})
const formatStr = n => {
  var result = n;
  if(n>10000 && n<100000000){
    result = (result/10000).toFixed(1) + "w";
  }else if(n>100000000){
  result = (Math.floor(n/100000000)).toFixed(1)  +"亿"+(Math.floor( (n-Math.floor(n/100000000)*100000000)/10000)).toFixed(1)+ "w";
  }
  return result;
}