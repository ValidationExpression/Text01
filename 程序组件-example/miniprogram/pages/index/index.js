// index.ts
// 获取应用实例

Page({
  data:{
    refshStatus:true,
    list:[{
        name:"李华",
        age:14,
        id:1,
        tags:["娱乐","时间"]
    },{
        name:"李芳",
        age:17,
        id:2,
        tags:["世界","国际"]
    },{
        name:"挽歌",
        age:21,
        id:3,
        tags:["未来","科技"]
    }],
    //可以在此定义输入的起始值
    nameVal:"",

    //定义爱好的列表
    hobbyList:[
      {
        id:1,
        name:"篮球"
      },{
        id:2,
        name:"足球"
      },{
        id:3,
        name:"羽毛球"
      },{
        id:4,
        name:"音乐"
      },{
        id:5,
        name:"读书"
      },
  ]

},
onload:function(options){
  //再次初始化 
  //页面创建时执行
  console.log("初始化...",options)
},

//用于实现对数据在滑动时可以一直滚动操作
bindscrolltolower(){
  console.log("到大数据底部...将返回数据顶端。")
  this.setData({
    list:this.data.list.concat(this.data.list)
  })
},

//对index.wxml文件的內容进行定义。
bindrefresherrefresh(){
  console.log("下拉刷新...")
  this.setData({
    //当进行刷新操作时，因为refshStatus：false限制，此时刷新不会有等待，当为true时会有刷新样式。
    refshStatus:false,
    //此时数据将会变成下面列表中的內容
    list:[{
      name:"黎明",
      age:14,
      id:1,
      tags:["娱乐","时间"]
  },{
      name:"顺丰",
      age:17,
      id:2,
      tags:["世界","国际"]
  },{
      name:"挽歌",
      age:21,
      id:3,
      tags:["未来","科技"]
  }]
  })
},
 //输入事件
  handleInputEven(e){
    console.log("数据是:",e)
    //拿取数据-存储到data中
    const val = e.detail.value
    //可以获取最后的数据，
    this.setData({
      nameVal:val
    })
  },

  handleSubmitEven(){
    console.log("提交的数据：",this.data.nameVal)
  },

  //表单-单选（用于获取数据）
  handleChange2(e){
    console.log("单选数据:",e)
  },

  //表单
  handleChange(e){
    console.log("多选数据:",e)
  }
})
