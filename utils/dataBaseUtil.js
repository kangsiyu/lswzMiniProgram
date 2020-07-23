const db = wx.cloud.database({
  env: 'lswztool-debug-ngiig'
})

var getDataBaseEnv = function () {
  return 'lswztool-debug-ngiig'
}

module.exports = {
  getDataBaseEnv:getDataBaseEnv
}
