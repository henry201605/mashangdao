//app.js
var QQMapWX = require('/pages/lib/mapLib/qqmap-wx-jssdk.js');
var qmapSDK;
var app = getApp();
App({
  onLaunch: function() {
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     wx.request({
    //       url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&coordtype=gcj02ll&location=' + latitude + ',' + longitude + '&output=json&pois=0',
    //       method: "get",
    //       success: function (res) {     
    //         // console.log(res.data.result.formatted_address)
    //         // wx.setStorageSync('location', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10))
    //       }
    //     })
    //   }
    // })
    var that = this;
    //初始化
    qmapSDK = new QQMapWX({
      key: 'NO2BZ-4YL65-VXBIH-Q32N3-SCGUV-ARBD3'
    })
    //获取地址
    wx.getLocation({
      success: function (res) {
        console.log("latitude------------" + res.latitude);
        console.log("longitude------------" + res.longitude);
        // type: 'wgs84', 
        type: 'gcj02',
          qmapSDK.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function (e) {
              var location = e.result.address;
              console.log("location------------" + location);
              wx.setStorageSync('location', location);
             
            },
            fail: function () {
              console.log("定位失败，-已有经纬度-----------");

            }
          })
     
      },
      fail: function () {
        console.log("定位失败----未获取到经纬度--------");
      }
      
    })
    wx.switchTab({
      url: '/pages/home/home'
    })
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    location: ""
  }
})