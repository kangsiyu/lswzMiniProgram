// pages/baobing/baobing.js
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
    dropDownMenuTitle: ['选择兵种'],
    data1: [{
        id: 0,
        title: '枪兵',
        childModel: [{
            titleResult: '1级枪兵',
            title: '1级',
            zhanli:'1.0',
            mutou:'15',
            liangshi:'45',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '3级枪兵',
            title: '3级',
            zhanli:'1.9',
            mutou:'30',
            liangshi:'120',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '5级枪兵',
            title: '5级',
            zhanli:'3.2',
            mutou:'55',
            liangshi:'165',
            tie:'10',
            baoshi:'0'
          },
          {
            titleResult: '7级枪兵',
            title: '7级',
            zhanli:'4.9',
            mutou:'90',
            liangshi:'190',
            tie:'20',
            baoshi:'0'
          },
          {
            titleResult: '9级枪兵',
            title: '9级',
            zhanli:'7.0',
            mutou:'135',
            liangshi:'205',
            tie:'30',
            baoshi:'5'
          },
          {
            titleResult: '11级枪兵',
            title: '11级',
            zhanli:'9.5',
            mutou:'190',
            liangshi:'250',
            tie:'55',
            baoshi:'15'
          },
        ]
      },
      {
        id: 1,
        title: '盾兵',
        childModel: [{
            titleResult: '2级盾兵',
            title: '2级',
            zhanli:'1.4',
            mutou:'0',
            liangshi:'100',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '4级盾兵',
            title: '4级',
            zhanli:'2.5',
            mutou:'0',
            liangshi:'170',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '6级盾兵',
            title: '6级',
            zhanli:'4.0',
            mutou:'0',
            liangshi:'245',
            tie:'20',
            baoshi:'0'
          },
          {
            titleResult: '8级盾兵',
            title: '8级',
            zhanli:'5.9',
            mutou:'0',
            liangshi:'310',
            tie:'25',
            baoshi:'5'
          },
          {
            titleResult: '10级盾兵',
            title: '10级',
            zhanli:'8.2',
            mutou:'0',
            liangshi:'325',
            tie:'40',
            baoshi:'10'
          },
          {
            titleResult: '12级盾兵',
            title: '12级',
            zhanli:'10.9',
            mutou:'0',
            liangshi:'450',
            tie:'75',
            baoshi:'20'
          },
        ]
      },
      {
        id: 2,
        title: '骑射手',
        childModel: [{
            titleResult: '1级骑射手',
            title: '1级',
            zhanli:'1.0',
            mutou:'10',
            liangshi:'45',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '3级骑射手',
            title: '3级',
            zhanli:'1.9',
            mutou:'25',
            liangshi:'130',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '5级骑射手',
            title: '5级',
            zhanli:'3.2',
            mutou:'25',
            liangshi:'230',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '7级骑射手',
            title: '7级',
            zhanli:'4.9',
            mutou:'55',
            liangshi:'270',
            tie:'10',
            baoshi:'5'
          },
          {
            titleResult: '9级骑射手',
            title: '9级',
            zhanli:'7.0',
            mutou:'105',
            liangshi:'275',
            tie:'15',
            baoshi:'10'
          },
          {
            titleResult: '11级骑射手',
            title: '11级',
            zhanli:'9.5',
            mutou:'200',
            liangshi:'300',
            tie:'25',
            baoshi:'20'
          },
        ]
      },
      {
        id: 3,
        title: '近战骑',
        childModel: [{
            titleResult: '2级近战骑',
            title: '2级',
            zhanli:'1.4',
            mutou:'0',
            liangshi:'100',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '4级近战骑',
            title: '4级',
            zhanli:'2.5',
            mutou:'0',
            liangshi:'195',
            tie:'10',
            baoshi:'0'
          },
          {
            titleResult: '6级近战骑',
            title: '6级',
            zhanli:'4.0',
            mutou:'0',
            liangshi:'270',
            tie:'15',
            baoshi:'0'
          },
          {
            titleResult: '8级近战骑',
            title: '8级',
            zhanli:'5.9',
            mutou:'0',
            liangshi:'255',
            tie:'25',
            baoshi:'5'
          },
          {
            titleResult: '10级近战骑',
            title: '10级',
            zhanli:'8.2',
            mutou:'0',
            liangshi:'190',
            tie:'50',
            baoshi:'10'
          },
          {
            titleResult: '12级近战骑',
            title: '12级',
            zhanli:'10.9',
            mutou:'0',
            liangshi:'240',
            tie:'90',
            baoshi:'25'
          },
        ]
      },
      {
        id: 4,
        title: '弩兵',
        childModel: [{
            titleResult: '1级弩兵',
            title: '1级',
            zhanli:'1.0',
            mutou:'0',
            liangshi:'55',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '3级弩兵',
            title: '3级',
            zhanli:'1.9',
            mutou:'15',
            liangshi:'130',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '5级弩兵',
            title: '5级',
            zhanli:'3.2',
            mutou:'25',
            liangshi:'240',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '7级弩兵',
            title: '7级',
            zhanli:'4.9',
            mutou:'45',
            liangshi:'255',
            tie:'5',
            baoshi:'5'
          },
          {
            titleResult: '9级弩兵',
            title: '9级',
            zhanli:'7.0',
            mutou:'70',
            liangshi:'180',
            tie:'10',
            baoshi:'15'
          },
          {
            titleResult: '11级弩兵',
            title: '11级',
            zhanli:'9.5',
            mutou:'110',
            liangshi:'300',
            tie:'20',
            baoshi:'25'
          },
        ]
      },
      {
        id: 5,
        title: '弓兵',
        childModel: [{
            titleResult: '2级弓兵',
            title: '2级',
            zhanli:'1.4',
            mutou:'10',
            liangshi:'90',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '4级弓兵',
            title: '4级',
            zhanli:'2.5',
            mutou:'20',
            liangshi:'185',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '6级弓兵',
            title: '6级',
            zhanli:'4.0',
            mutou:'35',
            liangshi:'295',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '8级弓兵',
            title: '8级',
            zhanli:'5.9',
            mutou:'55',
            liangshi:'215',
            tie:'5',
            baoshi:'10'
          },
          {
            titleResult: '10级弓兵',
            title: '10级',
            zhanli:'8.2',
            mutou:'75',
            liangshi:'155',
            tie:'15',
            baoshi:'20'
          },
          {
            titleResult: '12级弓兵',
            title: '12级',
            zhanli:'10.9',
            mutou:'130',
            liangshi:'380',
            tie:'25',
            baoshi:'30'
          },
        ]
      },
      {
        id: 6,
        title: '攻城车/运粮车',
        childModel: [{
            titleResult: '1级运粮车',
            title: '1级',
            zhanli:'1.0',
            mutou:'25',
            liangshi:'35',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '3级攻城车',
            title: '3级',
            zhanli:'1.9',
            mutou:'60',
            liangshi:'85',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '5级攻城车',
            title: '5级',
            zhanli:'3.2',
            mutou:'115',
            liangshi:'130',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '7级攻城车',
            title: '7级',
            zhanli:'4.9',
            mutou:'175',
            liangshi:'160',
            tie:'10',
            baoshi:'0'
          },
          {
            titleResult: '9级攻城车',
            title: '9级',
            zhanli:'7.0',
            mutou:'255',
            liangshi:'210',
            tie:'15',
            baoshi:'5'
          },
          {
            titleResult: '11级攻城车',
            title: '11级',
            zhanli:'9.5',
            mutou:'360',
            liangshi:'260',
            tie:'25',
            baoshi:'15'
          },
        ]
      },
      {
        id: 7,
        title: '投石车',
        childModel: [{
            titleResult: '2级投石车',
            title: '2级',
            zhanli:'1.4',
            mutou:'40',
            liangshi:'60',
            tie:'0',
            baoshi:'0'
          },
          {
            titleResult: '4级投石车',
            title: '4级',
            zhanli:'2.5',
            mutou:'80',
            liangshi:'110',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '6级投石车',
            title: '6级',
            zhanli:'4.0',
            mutou:'145',
            liangshi:'165',
            tie:'5',
            baoshi:'0'
          },
          {
            titleResult: '8级投石车',
            title: '8级',
            zhanli:'5.9',
            mutou:'210',
            liangshi:'165',
            tie:'15',
            baoshi:'5'
          },
          {
            titleResult: '10级投石车',
            title: '10级',
            zhanli:'8.2',
            mutou:'320',
            liangshi:'225',
            tie:'20',
            baoshi:'5'
          },
          {
            titleResult: '12级投石车',
            title: '12级',
            zhanli:'10.9',
            mutou:'420',
            liangshi:'300',
            tie:'30',
            baoshi:'20'
          },
        ]
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
  selectedItem: function(e) {
    this.baobingInfo.zhanliUnit = e.detail.zhanli;
    this.baobingInfo.mutouUnit = e.detail.mutou;
    this.baobingInfo.liangshiUnit = e.detail.liangshi;
    this.baobingInfo.tieUnit = e.detail.tie;
    this.baobingInfo.baoshiUnit = e.detail.baoshi;
    console.log('titieReult --'+ e.detail.selectedTitle + "zhanli = " + this.baobingInfo.zhanliUnit + "mutou = "+this.baobingInfo.mutouUnit +"liangshi = "+this.baobingInfo.liangshiUnit + "tie = "+this.baobingInfo.tieUnit +"baoshi = "+this.baobingInfo.baoshiUnit + "timeall = "+this.timeAll);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  timeAllInput:function(e){
    var timeAllValue = e.detail.value;
    this.timeInfo.timeAll = timeAllValue;
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
  onceCountInput:function(e){
    var once = e.detail.value;
    this.timeInfo.countUnit = once;
    console.log(once + this.timeInfo.countUnit);
  },
  calculateAction:function(){
    if(this.baobingInfo.zhanliUnit == 0 ||
      this.timeInfo.timeUnit == 0 ||
      (this.timeInfo.minUnit == 0 && this.timeInfo.hoursUnit == 0 && this.timeInfo.secUnit == 0)){
        this.setData({
          resultStr:'请输入正确数据'
        });
        return;
      }else{
        console.log("时间hours:"+this.timeInfo.hoursUnit + "min:"+this.timeInfo.minUnit + "sec:"+this.timeInfo.secUnit);
        var secondAll = parseInt(this.timeInfo.hoursUnit*60*60)+parseInt(this.timeInfo.minUnit*60)+parseInt(this.timeInfo.secUnit);
        var bingAllCount = Math.floor(parseInt(1000*this.timeInfo.timeAll*60*60)/parseInt(secondAll));
        console.log(bingAllCount)
        var baobingCount = '';
        if (this.timeInfo.countUnit!=0) {
          baobingCount = '\n操作次数：\n'+String(Math.floor(bingAllCount/this.timeInfo.countUnit))+"\n主公注意别手酸了哦" ;
        }

        var zhanliStr = this.baobingInfo.zhanliUnit*bingAllCount;
        zhanliStr = formatStr(zhanliStr);
        var mutouResult = this.baobingInfo.mutouUnit*bingAllCount;
        mutouResult = formatStr(mutouResult);
        var liangshiResult = this.baobingInfo.liangshiUnit*bingAllCount;
        liangshiResult = formatStr(liangshiResult);
        var tieResult = this.baobingInfo.tieUnit*bingAllCount;
        tieResult = formatStr(tieResult);
        var baoshiResult = this.baobingInfo.baoshiUnit*bingAllCount;
        baoshiResult = formatStr(baoshiResult);
        var resultStr = '爆兵结果：\n可爆:'+zhanliStr+"战力\n消耗资源：\n木头："+mutouResult+'\n粮食：'+liangshiResult+"\n铁："+tieResult +"\n宝石："+baoshiResult + baobingCount;
        this.setData({
          resultStr:resultStr
        });
      }
    
    console.log("zhanli = " + this.baobingInfo.zhanliUnit + "mutou = "+this.baobingInfo.mutouUnit +"liangshi = "+this.baobingInfo.liangshiUnit + "tie = "+this.baobingInfo.tieUnit +"baoshi = "+this.baobingInfo.baoshiUnit + "timeall = "+this.timeInfo.timeAll + "timeUnit = "+this.timeInfo.timeUnit);
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