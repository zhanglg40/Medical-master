//index.js
//获取应用实例
var appInstance = getApp();
var GetCommentList = require('../../utils/getuserinfo.js');
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    　　showShouquan: true,
    commentlist:null,
    offset:0,
    is_more:true,
    is_loadnull: false,
    imgpath: appInstance.globalData.urlpath
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    // 查看是否授权
    　　wx.getSetting({
      　　　　success: function (res) {
        　　　　　　console.log(res.authSetting['scope.userInfo'])
        　　　　　　if (res.authSetting['scope.userInfo']) {
          　　　　　　// 已经授权，可以直接调用 getUserInfo 获取头像昵称
          　　　　　　wx.getUserInfo({
            　　　　　　　　success: function (res) {
              　　　　　　　　console.log(res)
              　　　　　　　　getApp().globalData.userInfo = res.userInfo 　　//将授权信息传递给全局变量
            　　　　　　}
          　　　　})
        　　　　}
      　　}
    　　})
    var that=this;
      GetCommentList.getcomment(that, appInstance)
  },
  bindGetUserInfo: function (e) {
    　　getApp().globalData.userInfo = e.detail.userInfo     //将授权信息传递给全局变量
    　　console.log(getApp().globalData.userInfo)
  },

  onLoadMoreDoctList: function () {
    var that = this;
    GetCommentList.getcomment(that, appInstance)
  },
  onAddZanNum:function(res){
    var zannum = res.currentTarget.dataset.zannum;
    var index = res.currentTarget.dataset.index;
    var id = res.currentTarget.dataset.id;
    if (wx.getStorageSync('zannum' + id) != ""){
      wx.showToast({
        title: "不可重复点赞哦！",
        icon: 'waiting',
        duration: 2000
      })
    }else{
      var newcommentlist = this.data.commentlist;
      newcommentlist[index]["zan"] = parseInt(zannum) + 1
      this.setData({
        commentlist: newcommentlist
      })
      wx.setStorageSync('zannum' + id, (parseInt(zannum) + 1))
    }
  },
  onShareAppMessage: function (res) {//转发默认设置
   
  },
  onMakePhone: function () {
    wx.makePhoneCall({
      phoneNumber: appInstance.globalData.yebotel
    })
  }
})
