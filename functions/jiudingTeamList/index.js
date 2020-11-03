// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection('jiudingTeamList')
  var teamId = Number(event.teamId)
  var smallTeamId = Number(event.smallTeamId)
  .where({
     teamId:teamId,
     smallTeamId:smallTeamId
  })
  .get({
    success(res) {
        return res;
    },
    fail(err) {
        return err;
    }
})
}