// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperTitle: [{
      text: "点菜",
      id: 1
    }, {
      text: "评价",
      id: 2
    }, {
      text: "商家",
      id: 3
    }],
    cart: {
      count: 0, //购物车数量
      total: 0,//总价格
      list: {}
    },

    menu: [],
    goods: {},
    // goodsObject:{},
    shopinfo: {},
    currentPage: 0,
    selected: 0,
    howMuch: 12,
    total: 0,
    pullBar: false,
    isShowCartDetail: false
  },
  pullBar: function () {
    this.setData({
      pullBar: !this.data.pullBar
    })
  },
  addToTrolley: function (e) {
    let foodid, singlemenu;
    //判断是购物车的加号还是菜单页面
    if (typeof (e.currentTarget.dataset.index) != "undefined") { //说明是菜单
      //菜单
      var info = this.data.menu;
      singlemenu = info[this.data.selected].menuContent[e.currentTarget.dataset.index];
      singlemenu.numb++; //数量增加
      foodid = singlemenu.id;
    } else if (typeof (e.currentTarget.dataset.id) != "undefined") {
      foodid = e.currentTarget.dataset.id;
      singlemenu = this.data.cart.list[foodid].food;
    }
    //购物车列表
    //购物车里的菜
    //说明该类菜单还没有加入到列表中
    if (typeof (this.data.cart.list[foodid]) == "undefined") {
      this.data.cart.list[foodid] = {
        food: singlemenu,
        foodnum: 1
      }
    } else {
      this.data.cart.list[foodid].foodnum++;
    }
    this.data.cart.count++;
    this.data.cart.total = this.data.cart.total + singlemenu.price;
    console.log("this.data.cart.total-------------" + this.data.cart.total)
    console.log("this.data.cart.count-------------" + this.data.cart.count)

    this.setData({
      cart: this.data.cart,
      menu: info
    })
  },
  removeFromTrolley: function (e) {
    let foodid, singlemenu;
    if (typeof (e.currentTarget.dataset.index) != "undefined") { //说明是菜单
      //菜单
      var info = this.data.menu;
      singlemenu = info[this.data.selected].menuContent[e.currentTarget.dataset.index];
      singlemenu.numb--;//数量减1
      foodid = singlemenu.id;
    } else if (typeof (e.currentTarget.dataset.id) != "undefined") {
      foodid = e.currentTarget.dataset.id;
      singlemenu = this.data.cart.list[foodid].food;
    }
    let num = this.data.cart.list[foodid].foodnum || 0;
    if (num <= 1) {
      delete this.data.cart.list[foodid];
    } else {
      this.data.cart.list[foodid].foodnum = num - 1;
    }
    //购物车列表
    this.data.cart.count--;
    this.data.cart.total = this.data.cart.total - singlemenu.price;
    console.log("this.data.cart.total-------------" + this.data.cart.total)
    console.log("this.data.cart.count-------------" + this.data.cart.count)
    this.setData({
      cart: this.data.cart,
      menu: info,
    })
  },
  turnPage: function (e) {
    this.setData({
      currentPage: e.currentTarget.dataset.index
    })
  },
  turnTitle: function (e) {
    if (e.detail.source == "touch") {
      this.setData({
        currentPage: e.detail.current
      })
    }
  },
  turnMenu: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    console.log("turnMenu----selected-----" + e.currentTarget.dataset.index);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shop = {
      "logo": "http://img5.imgtn.bdimg.com/it/u=3575629611,204566984&fm=200&gp=0.jpg",
      "name": "kfc开封菜",
      "desc": "本店不以大欺小",
      "data": [
        {
          "id": 1,
          "typeName": "快餐类",
          "menuContent": [
            {
              "name": "炸鸡",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003110025&di=75a4882426ca2208baca6d093a038fcc&imgtype=0&src=http%3A%2F%2Fpic143.nipic.com%2Ffile%2F20171022%2F22554547_140500232000_2.jpg",
              "sales": 22,
              "rating": 3,
              "price": 15,
              "numb": 0,
              "id": 1
            },
            {
              "name": "汉堡",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003161746&di=154e70f4f4a78c70af41b693a797f433&imgtype=0&src=http%3A%2F%2Fuserimages15.51sole.com%2F20170901%2Fb_4046932_201709011637431308.jpg",
              "sales": 22,
              "rating": 3,
              "price": 10,
              "numb": 0,
              "id": 2
            },
            {
              "name": "鸡翅",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003192890&di=7e2b588b9836bf4fa6e3adc5fb87e928&imgtype=0&src=http%3A%2F%2Fpic19.photophoto.cn%2F20110408%2F0042040279234121_b.jpg",
              "sales": 22,
              "rating": 3,
              "price": 11,
              "numb": 0,
              "id": 3
            }
          ]
        },
        {
          "id": 2,
          "typeName": "盖浇饭类",
          "menuContent": [
            {
              "name": "土豆牛肉盖浇饭",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003233830&di=4c3d4252860b9c610ca971f76ada3fa2&imgtype=0&src=http%3A%2F%2Fi2.chuimg.com%2F46873857a74c11e58aa67bbb2057a659.jpg%3FimageView2%2F2%2Fw%2F600%2Finterlace%2F1%2Fq%2F90",
              "sales": 22,
              "rating": 3,
              "price": 9,
              "numb": 0,
              "id": 5
            },
            {
              "name": "肉末茄子盖浇饭",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003257676&di=6994ac85756250e4a137ec47c24a75c3&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2F3%2Ff%2Fd%2Fyuan_3fdcd0e079d67bc7e8020d3e37e4899d.jpg",
              "sales": 22,
              "rating": 3,
              "price": 21,
              "numb": 0,
              "id": 6
            },
            {
              "name": "番茄炒蛋盖浇饭",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003390282&di=1b10aacb688212fcfcdc6342a9897a1c&imgtype=0&src=http%3A%2F%2Fwww.8887.tv%2Fupload%2F201706%2F12%2F201706121128021061.jpg",
              "sales": 22,
              "rating": 3,
              "price": 50,
              "numb": 0,
              "id": 7
            }
          ]
        },
        {
          "id": 3,
          "typeName": "养生粥类",
          "menuContent": [
            {
              "name": "桂圆莲子粥",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003293814&di=6f2720dc3244ee0e784479c0236bccf8&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FgJe1ZQNYipKYTsh7EI7Myjl5ND4yeI%3DAts2OBi4PMpyFt1528607172064.jpg",
              "sales": 22,
              "rating": 3,
              "price": 15,
              "numb": 0,
              "id": 8
            },
            {
              "name": "皮蛋瘦肉粥",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003347859&di=bd93d8f12b742865aa2b7ccfa459638a&imgtype=0&src=http%3A%2F%2Fwww.blk9dg.com%2Fimages%2Fimage%2F47751504662411.jpg",
              "sales": 22,
              "rating": 3,
              "price": 12,
              "numb": 0,
              "id": 9
            }
          ]
        },
        {
          "id": 4,
          "typeName": "小吃类",
          "menuContent": [
            {
              "name": "肉夹馍",
              "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543003318205&di=fb9d74ceb3d898ec6b6f78054bc5fe72&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fc9fcc3cec3fdfc035e462395df3f8794a4c226e5.jpg",
              "sales": 22,
              "rating": 3,
              "price": 4,
              "numb": 0,
              "id": 10
            }
          ]
        }
      ]
    };
    this.setData({
      shopinfo: shop,
      menu: shop.data,
    })
    // var that = this;
    // wx.request({
    //   url: "https://www.easy-mock.com/mock/5bee36406142a550e9bdd954/wmpro/menuList",
    //   method: "GET",
    //   success: function (res) {
    //     that.setData({
    //       shopinfo: res.data,
    //       menu: res.data.data,
    //     })
    //   }
    // });
  },
  /**
   * 购物车信息
   */
  showCartDetail: function () {

    console.log("isShowCartDetail------->" + this.data.isShowCartDetail);
    console.log("cart.count------->" + this.data.cart.count);

    this.setData({
      isShowCartDetail: !this.data.isShowCartDetail
    });
  },
  hideCartDetail: function () {
    this.setData({
      isShowCartDetail: false
    });
  },
  tapAddCart: function (e) {
    this.addCart(e.target.dataset.id);
  },
  tapReduceCart: function (e) {
    this.reduceCart(e.target.dataset.id);
  },
  addCart: function (id) {
    var num = this.data.cart.list[id] || 0;
    this.data.cart.list[id] = num + 1;
    this.countCart(id);
  },
  reduceCart: function (id) {
    var num = this.data.cart.list[id] || 0;
    if (num <= 1) {
      delete this.data.cart.list[id];
    } else {
      this.data.cart.list[id] = num - 1;
    }
    this.countCart(id);
  },
  countCart: function (id) {
    var count = 0,
      total = 0;
    var info = this.data.menu;
    info[this.data.selected].menuContent[id].numb++;
    for (var id in this.data.cart.list) {
      // var goods = this.data.goods[id];
      var goods = info[this.data.selected].menuContent[id]
      count += this.data.cart.list[id];
      total += goods.price * this.data.cart.list[id];
    }
    this.data.cart.count = count;
    this.data.cart.total = total;
    this.setData({
      cart: this.data.cart,
      menu: info
    });
    console.log("cart---------------" + cart)
  },
  follow: function () {
    this.setData({
      followed: !this.data.followed
    });
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