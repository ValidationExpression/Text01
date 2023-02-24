// app.js
//
App({
    onLaunch(options){
        console.log("小程序初始化（在一次过程中，只会执行一次）...,并打印相应信息。",options)
    },
    onShow(options){
        console.log("小程序展示（每一次显示页面时都会触发）...,并打印相应信息。",options)
        this.globalData.times=+ new Date()
    },
    onHide(options){
        console.log("小程序隐藏触发...,并打印相应信息。")
    },
    onError(options){
        console.log(options)
    },
    //主要用于存储全局数据-也可以更改
    globalData:{
        a:1,
        b:2
    },
    //定义一个测试方法，用于helloworld.js调用
    getUInfo(){
        console.log("app.js中所调用的方法。")
    }
})
