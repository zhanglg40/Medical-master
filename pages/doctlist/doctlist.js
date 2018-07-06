// doctlist.js
var appInstance = getApp();
var LoadDoct = require('onLoadDoct.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctlist:{},
    listinfo:{
      "gc": {
        "banner": "http://usr.nianman18.com/images/index_gck.jpg",
        "title": "产科推荐专家"
      },
      "wc": {
        "banner": "http://usr.nianman18.com/images/index_wck.jpg",
        "title": "妇科推荐专家"
      }
    },
    diagnosisType:"gc",
    offset:0,
    is_more: true,
    is_loadnull: false,
    imgpath: appInstance.globalData.urlpath
  },
  onMakePhone:function(){
    wx.makePhoneCall({
      phoneNumber: appInstance.globalData.yebotel
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      diagnosisType: options.diagnosisType
    })
    LoadDoct.onLoadDoctList(options, that, appInstance)
  },
  onLoadMoreDoctList:function(){
    var that = this;
    LoadDoct.onLoadDoctList(that.data.diagnosisType, that, appInstance)
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