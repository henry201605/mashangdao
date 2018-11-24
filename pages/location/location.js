// pages/location/location.js
// var qqMap = require('../lib/mapLib/qqmap-wx-jssdk.min.js');
var QQMapWX = require('../lib/mapLib/qqmap-wx-jssdk.js');
var qmapSDK;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationList:[],
    hidden: true
  },
  onTap: function (e) {
    wx.setStorageSync('location',e.currentTarget.dataset.key)
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  // getLocation: function () {
  //   wx.getLocation({
  //     type: 'gcj02',
  //     success: function (res) {
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //       console.log("latitude------------" + latitude);
  //       console.log("longitude------------" + longitude);

  //       wx.request({
  //         url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&coordtype=gcj02ll&location=' + latitude + ',' + longitude + '&output=json&pois=0',
  //         method: "get",
  //         success: function (res) {
  //           console.log(res.data.result.formatted_address)
  //           wx.setStorageSync('location', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10))
  //         }
  //       })
  //     }
  //   })
  //   wx.switchTab({
  //     url: '/pages/home/home'
  //   })
  // },
  getLocation: function (e) {
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
            that.setData({
              location: location
            })
          },
          fail: function () {
            console.log("定位失败，-已有经纬度-----------");
            that.setData({
              province: '定位失败',

            })
          }
        })
      wx.switchTab({
      url: '/pages/home/home'
    })
      },
      fail: function () {
        console.log("定位失败----未获取到经纬度--------");
        that.setData({
          province: '定位失败',

        })
      }
    })
  },
  input: function (e){
    if(e.detail.value){
      this.setData({
        hidden: false
      })
      this.search(e.detail.value);
    }else{
      this.setData({
        hidden: true
      })
    }
  },
  search: function (text){
    var that = this;
    wx.request({
      url: 'http://api.map.baidu.com/place/v2/search?query=' + text +'&page_size=20&page_num=0&scope=2&region=南昌&output=json&ak=btsVVWf0TM1zUBEbzFz6QqWF',
      success: function(res){
        console.log(res);
        that.setData({
          locationList:res.data.results
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      location: wx.getStorageSync('location')
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})