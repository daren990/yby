//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    recommend:[
      {
        touxiangimg:'../images/10.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }

})
