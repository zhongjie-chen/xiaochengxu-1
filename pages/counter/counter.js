Page({
  data: {
    counter: 0,
    userInfo: {}
  },
  increase: function() {
    this.setData({counter: this.data.counter + 1})
  },
  decrease: function() {
    this.setData({counter: this.data.counter - 1})
  }
})