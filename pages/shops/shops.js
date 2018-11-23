// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant: [{
      "name": "正新鸡排",
      "star": 5,
      "sales": 1161,
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003653958&di=d9e9bd607d5d799c26e5db78a53b1e1a&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbainuo%2Fcrop%3D0%2C0%2C470%2C285%3Bw%3D470%3Bq%3D80%2Fsign%3Dd878568ed858ccbf0ff3ef7a24e8900e%2F472309f79052982219a8c6ffdeca7bcb0a46d477.jpg",
      "initial_price": 20,
      "distribution_price": 0,
      "distance": "1.5km",
      "time": 30
    },
    {
      "name": "海底捞",
      "star": 4,
      "sales": 330,
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003709598&di=4cd6b0e9da716864136189520e65fb7c&imgtype=0&src=http%3A%2F%2Fci.xiaohongshu.com%2F14a5ca67-ea7d-4634-9876-e43b97f2afed%40r_640w_640h.jpg",
      "initial_price": 50,
      "distribution_price": 3,
      "distance": "3.3km",
      "time": 56
    },
    {
      "name": "味多美",
      "src": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2289035708,1932783504&fm=26&gp=0.jpg",
      "star": 0,
      "sales": 39,
      "initial_price": 35,
      "distribution_price": 3,
      "distance": "3.1km",
      "time": 44
    },
    {
      "name": "绝味鸭脖",
      "star": 0,
      "sales": 24,
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003803926&di=b9fd7412993012275f4d65791f34a0c9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F031faee569075fb000001ce9802b901.jpg",
      "initial_price": 30,
      "distribution_price": 1,
      "distance": "2.6km",
      "time": 44
    },
    {
      "name": "御膳房",
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003841211&di=455c731427598c31feae92e4306273f0&imgtype=0&src=http%3A%2F%2Fp6.sinaimg.cn%2F1802224253%2F180%2F58151282723421",
      "star": 4.5,
      "sales": 641,
      "initial_price": 0,
      "distribution_price": 0,
      "distance": "156m",
      "time": 33
    },
    {
      "name": "小肥羊",
      "star": 4.5,
      "sales": 731,
      "src": "http://fumenhu-10002785.file.myqcloud.com/Upload/imgs/20150128/file_54c892c3e0551.jpg",
      "initial_price": 15,
      "distribution_price": 0,
      "distance": "1.3km",
      "time": 52
    },
    {
      "name": "星巴克",
      "star": 4.5,
      "sales": 37,
      "src": "http://pic33.photophoto.cn/20141019/0017029495939520_b.jpg",
      "initial_price": 58,
      "distribution_price": 0,
      "distance": "6.8km",
      "time": 49
    }
    ],
    characteristicList: [{
      text: "免配送费"
    }, {
      text: "0元起送"
    }, {
      text: "新商家"
    }, {
      text: "品牌商家"
    }, {
      text: "跨天预定"
    }],
    sortList: [{
      sort: "综合排序",
      image: "",
    }, {
      sort: "速度最快",
      image: "",
    }, {
      sort: "评分最高",
      image: "",
    }, {
      sort: "起送价最低",
      image: "",
    }, {
      sort: "配送费最低",
      image: "",
    }],
    discountList: [{
      icon: "减",
      iconColor: "#FF635B",
      text: "满减优惠"
    }, {
      icon: "领",
      iconColor: "#FF7298",
      text: "进店领券"
    }, {
      icon: "返",
      iconColor: "#FB4343",
      text: "满返代金券"
    }, {
      icon: "折",
      iconColor: "#C183E2",
      text: "折扣商品"
    }, {
      icon: "订",
      iconColor: "#6FDF64",
      text: "提前下单优惠"
    }, {
      icon: "赠",
      iconColor: "#FDC41E",
      text: "满赠活动"
    }, {
      icon: "免",
      iconColor: "#43B697",
      text: "满免配送"
    }],
    categoryList: [
      [{
        id: 1,
        img: '/pages/images/index/icon_1.jpg',
        name: '美食',
        url: ''
      },
      {
        id: 2,
        img: '/pages/images/index/icon_2.jpg',
        name: '便利店',
        url: ''
      },
      {
        id: 3,
        img: '/pages/images/index/icon_3.jpg',
        name: '水果蔬菜',
        url: ''
      },
      {
        id: 4,
        img: '/pages/images/index/icon_11.jpg',
        name: '鲜花蛋糕',
        url: ''
      },
      {
        id: 5,
        img: '/pages/images/index/icon_5.jpg',
        name: '正餐优选',
        url: ''
      },
      {
        id: 6,
        img: '/pages/images/index/icon_6.jpg',
        name: '外卖专送',
        url: ''
      },
      {
        id: 7,
        img: '/pages/images/index/icon_7.jpg',
        name: '饮品站',
        url: ''
      },
      {
        id: 8,
        img: '/pages/images/index/icon_8.jpg',
        name: '小吃馆',
        url: ''
      }
      ],
      [{
        id: 1,
        img: '/pages/images/index/icon_1.jpg',
        name: '美食',
        url: ''
      },
      {
        id: 2,
        img: '/pages/images/index/icon_2.jpg',
        name: '便利店',
        url: ''
      },
      {
        id: 3,
        img: '/pages/images/index/icon_3.jpg',
        name: '水果蔬菜',
        url: ''
      },
      {
        id: 4,
        img: '/pages/images/index/icon_11.jpg',
        name: '鲜花蛋糕',
        url: ''
      },
      {
        id: 5,
        img: '/pages/images/index/icon_5.jpg',
        name: '正餐优选',
        url: ''
      },
      {
        id: 6,
        img: '/pages/images/index/icon_6.jpg',
        name: '外卖专送',
        url: ''
      },
      {
        id: 7,
        img: '/pages/images/index/icon_7.jpg',
        name: '饮品站',
        url: ''
      },
      {
        id: 8,
        img: '/pages/images/index/icon_8.jpg',
        name: '小吃馆',
        url: ''
      }
      ]
    ],
    selected: 0,
    mask1Hidden: true,
    mask2Hidden: true,
    animationData: "",
    location: "",
    characteristicSelected: [false, false, false, false, false, false, false],
    discountSelected: null,
    selectedNumb: 0,
    sortSelected: "综合排序"

  },
  finish: function () {
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/596257bc9adc231f357c4664/restaurant/filter",
      method: "GET",
      success: function (res) {
        that.setData({
          restaurant: res.data.data.restaurant,
        })
      }
    });
  },
  sortSelected: function (e) {
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/596257bc9adc231f357c4664/restaurant/overAll",
      method: "GET",
      success: function (res) {
        console.log("sortSelected---->restaurant--->" + res.data.data.restaurant);
        console.log("sortSelected---->sortSelected--->" + that.data.sortList[e.currentTarget.dataset.index].sort);

        that.setData({
          restaurant: res.data.data.restaurant,
          sortSelected: that.data.sortList[e.currentTarget.dataset.index].sort
        })
      }
    });
  },
  clearSelectedNumb: function () {
    this.setData({
      characteristicSelected: [false],
      discountSelected: null,
      selectedNumb: 0
    })
  },
  characteristicSelected: function (e) {
    var info = this.data.characteristicSelected;
    info[e.currentTarget.dataset.index] = !info[e.currentTarget.dataset.index];
    this.setData({
      characteristicSelected: info,
      selectedNumb: this.data.selectedNumb + (info[e.currentTarget.dataset.index] ? 1 : -1)
    })
    console.log(e.currentTarget.dataset.index);
  },
  discountSelected: function (e) {
    if (this.data.discountSelected != e.currentTarget.dataset.index) {
      this.setData({
        discountSelected: e.currentTarget.dataset.index,
        selectedNumb: this.data.selectedNumb + (this.data.discountSelected == null ? 1 : 0)
      })
    } else {
      this.setData({
        discountSelected: null,
        selectedNumb: this.data.selectedNumb - 1
      })
    }
  },
  onTapTag: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    });
  },
  mask1Cancel: function () {
    this.setData({
      mask1Hidden: true
    })
  },
  mask2Cancel: function () {
    this.setData({
      mask2Hidden: true
    })
  },
  onOverallTag: function () {
    this.setData({
      mask1Hidden: false
    })
  },
  onFilter: function () {
    this.setData({
      mask2Hidden: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("onShow-------------->" + restaurant)
    that.setData({
      restaurant: this.restaurant,
      location: wx.getStorageSync('location')
    })
    // var that = this;
    // wx.request({
    //   url: "https://www.easy-mock.com/mock/5bee36406142a550e9bdd954/wmpro/restaurant",
    //   method: "GET",
    //   success: function(res) {
    //     that.setData({
    //        restaurant: res.data.data.restaurant,
    //       location: wx.getStorageSync('location')
    //     })
    //   }
    // });
  },
  toNearby: function () {
    console.log("toNearby-------------->")
    var self = this;
    self.setData({
      scrollIntoView: 'nearby'
    });
    self.setData({
      scrollIntoView: null
    });
  },
  coinclick: function () {
    console.log("coinclick----->")
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