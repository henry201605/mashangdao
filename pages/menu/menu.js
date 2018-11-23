// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperTitle: [{
      text: "点菜",
      id: 1
    },{
      text: "评价",
      id: 2
    },{
      text: "商家",
      id: 3
    }],
    cart: {
      count: 0, //购物车数量
      total: 0,//总价格
      list: {}
    },
    menu:[],
    goods:{},
    // goodsObject:{},
    shopinfo:{},
    currentPage: 0,
    selected: 0,
    howMuch: 12,
    total:0,
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
     } else if (typeof (e.currentTarget.dataset.id) != "undefined"){
       foodid = e.currentTarget.dataset.id;
       singlemenu = this.data.cart.list[foodid].food;
    }
    //购物车列表
     //购物车里的菜
      //说明该类菜单还没有加入到列表中
     if (typeof (this.data.cart.list[foodid]) == "undefined") {
       this.data.cart.list[foodid] = {
         food: singlemenu,
         foodnum : 1
       }
       }else{
       this.data.cart.list[foodid].foodnum ++ ;
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
    } else if(typeof (e.currentTarget.dataset.id) != "undefined"){    
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
    if(e.detail.source=="touch"){
      this.setData({
        currentPage: e.detail.current
      })
    }
  },
  turnMenu: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    console.log("turnMenu----selected-----"+e.currentTarget.dataset.index);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/5bee36406142a550e9bdd954/wmpro/menuList",
      method: "GET",
      success: function (res) {
        that.setData({
          shopinfo: res.data,
          menu: res.data.data,
        })
      }
    });
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