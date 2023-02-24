// index.js
//获取小程序实例(app.js)
const app = getApp()
Page({
    data:{
        msg:"hello world...",
        vid:"123",
        list:[{
            name:"李华",
            age:14,
            id:1
        },{
            name:"李芳",
            age:17,
            id:2
        },{
            name:"挽歌",
            age:21,
            id:3
        }]
    },
    onload:function(options){
        //再次初始化 
        //页面创建时执行
    },
    onShow:function(options){
        //页面出现在前台时执行

    },
    onReady:function(options){
        //页面渲染完成时执行
        console.log("Ready-小程序进入时间戳",app.globalData.times)
        console.log("取页面数据(data)",this.data.msg)
        setTimeout(_=>{
            console.log("取改变后页面数据(data)",this.data.msg)
        },2000)
        //在此因为对app.js实例化了，所以可以直接调用其中的方法。
        app.getUInfo()

        //含义设置时间，2秒时修改data值为“你好...”,(修改那个值就set...)
        setTimeout(_=>{
            this.setData({
                msg:"你好..."
            })
        },1000)
    },
    onHide:function(options){
        //页面前台变后台时执行
    },
    onUnload:function(options){
        //页面销毁时执行
    }
    
})
