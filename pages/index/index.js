//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goCounter: function() {
    wx.navigateTo({
      url: '../counter/counter'
    })
  },
  goTodo: function() {
    wx.navigateTo({
      url: '../todo/todo'
    })
  },
  goRepo: function() {
    wx.navigateTo({
      url: '../repo/repo'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
