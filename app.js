//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'lswztool-debug-ngiig',
      traceUser:'ture'
    });
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this  //早success里面不能使用this 因为 success 是回调函数 它会不停的检测是否成功，因此在不断回调的过程中this的指向就发生了变化
    wx.getStorage({
      key:'app_openid',//获取key值
      success: function(res) {
        console.log(res)
        that.globalData.openid = res.data;
      },
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  loginInfo:function(cb){
    var that = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'login',
      // 传给云函数的参数
      data: {
      },
      success: function(res) {
        console.log(res);
        console.log(res.result.openid);
        that.globalData.openid = res.result.openid;
        wx.setStorageSync('app_openid', res.result.openid);
        typeof cb == "function" && cb(that.globalData.openid)
      },
      fail: console.error
    })
  },
  globalData: {
    userInfo: null,
    openid:null,
  }
})