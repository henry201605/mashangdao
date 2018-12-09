// pages/userinfo/userinfo.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    clickDown:false
  },
    // //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  avatarTip:function(){
    var that = this;

    that.setData({
      clickDown:!that.data.clickDown
    })
  }
})