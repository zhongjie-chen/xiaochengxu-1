Page({
  data:{
    // text:"这是一个页面"
    datas: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数 http://gank.io/api/data/Android/10/1
    var that = this;
    wx.request({
      url: 'http://gank.io/api/data/iOS/20/1',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        var data = res.data.results;
        that.setData({datas: data})
      },
      fail: function() {
        console.log("error");
      }
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})