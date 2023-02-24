// pages/demo/demo.js
Page({

    /**
   * 页面的初始数据
   */
  data: {
    //message用于接收获取到的data.txt文件的内容
    message: "",
    //val接收输入框的内容
    val: ""
  },
 
  //自定义函数--请求服务器数据
    //url请求的地址，（服务器地址）
    //option 传递的数据，
    //callback 回调函数
  wxAjax: function(url, option, callback) {
    //小程序的内置请求函数
    wx.request({
      url: url,
      data: option,
      success: function(res) {
        //请求成功后执行回调函数
        console.log(option)
        callback && callback(res.data)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
 
  //监听输入框的值
  inp: function(event) {
    //定义变量接收输入的值
    //event为当前触发事件的对象
    let v2 = event.detail.value;
    //赋值
    this.setData({
      val: v2  //把获取到的值，传递给data下的val变量
    })
  },
 
  //点击写如数据到服务器的文件
  foo: function() {
    //page下的data的val赋值给text
    let text = this.data.val;
    //记录当前对象
    var _this = this;
    //调用请求函数，写入数据到指定的服务器地址  路由"/write"
    _this.wxAjax('http://127.0.0.1:3000/write',{content:text},function(result){
      console.log("下面是请求写入文件成功后返回的内容")
      //result为请求这个地址成功后，返回的数据(写入成功服务器响应200)， content:text  要写入的数据
      console.log(result);  //=>code:200
       //写入成功后，再次读取data.txt的内容
      if(result.code == 200){
        //请求服务器指定的接口数据   路由"/read"  
        _this.wxAjax('http://127.0.0.1:3000/read',{},function(result){
          console.log("下面是读取文件的内容，再次读取文件，更新内容")
          console.log(result );  //这里的result为data.txt的内容
          _this.setData({
            message:result
          });
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //记录this
    let _this = this;
    //请求服务指定的接口数据
    //页面加载就读一次服务器的data.txt文件，写入成功之后再读取一遍，即可实现内容的更新
    this.wxAjax('http://127.0.0.1:3000/read', {}, function(result) {
      console.log("下面是读取文件的内容")
      console.log(result)
      _this.setData({
        message: result
      })
    })
  }
})