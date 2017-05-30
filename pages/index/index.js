//index.js
//获取应用实例
var app = getApp();
let col1H = 0;
let col2H = 0;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    zuo_you:1,
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: [],
    recommend:[
      {
        touxiangimg:'../images/10.png',
        name:"名字",
        gender:"../icon/girl.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      },
      {
        touxiangimg:'../images/9.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      },
      {
        touxiangimg:'../images/8.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      },
      {
        touxiangimg:'../images/7.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      },
      {
        touxiangimg:'../images/6.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      },
      {
        touxiangimg:'../images/5.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      },
      {
        touxiangimg:'../images/4.png',
        name:"名字",
        gender:"../icon/boy.png",
        mony:"199",
        biaoqian:["111111","2222222","33333","444444444","555555555","66666666","77777777"],
        zhanshiimg:['../images/12.png','../images/10.png','../images/11.png'],
        foottext:"巴拉巴拉一大堆"
      }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (e) {
    var that = this;
    let data = this.data;
    let age = data.zuo_you;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.getSystemInfo({
        success: (res) => {
            let ww = res.windowWidth;
            let wh = res.windowHeight;
            let imgWidth = ww * 0.48;
            let scrollH = wh;

            this.setData({
                scrollH: scrollH,
                imgWidth: imgWidth
            });

            this.loadImages();
        }
    })
  },
  tapName:function(){
      let age = this.data.zuo_you == 1 ? 2 : 1;
      this.setData({
          zuo_you : age
      })
  },

  onImageLoad: function (e) {
      let imageId = e.currentTarget.id;
      let oImgW = e.detail.width;         //图片原始宽度
      let oImgH = e.detail.height;        //图片原始高度
      let imgWidth = this.data.imgWidth;  //图片设置的宽度
      let scale = imgWidth / oImgW;        //比例计算
      let imgHeight = oImgH * scale;      //自适应高度

      let images = this.data.images;
      let imageObj = null;

      for (let i = 0; i < images.length; i++) {
          let img = images[i];
          if (img.id === imageId) {
              imageObj = img;
              break;
          }
      }

      imageObj.height = imgHeight;


      let loadingCount = this.data.loadingCount - 1;
      let col1 = this.data.col1;
      let col2 = this.data.col2;

      if (col1H <= col2H) {
          col1H += imgHeight;
          col1.push(imageObj);
      } else {
          col2H += imgHeight;
          col2.push(imageObj);
      }

      let data = {
          loadingCount: loadingCount,
          col1: col1,
          col2: col2
      };

      if (!loadingCount) {
          data.images = [];
      }

      this.setData(data);
  },

  loadImages: function () {
      let images = [
          {   pic: "../images/6.png",
              name: "名字啊啊啊",
              gender: '../icon/girl.png',
              mony: "999"
          },
          {
              pic: "../images/5.png",
              name: "名字啊啊啊",
              gender: '../icon/girl.png',
              mony: "999"
          },
          {
              pic: "../images/4.png",
              name: "名字啊啊啊",
              gender: '../icon/girl.png',
              mony: "999"
          },
          {
              pic: "../images/3.png",
              name: "名字啊啊啊",
              gender: '../icon/girl.png',
              mony: "999"
          },
          {
              pic: "../images/2.png",
              name: "名字啊啊啊",
              gender: '../icon/girl.png',
              mony: "999"
          },
          {
              pic: "../images/1.png",
              name: "名字啊啊啊",
              gender: '../icon/girl.png',
              mony: "999"
          }
      ];

      let baseId = "img-" + (+new Date());

      for (let i = 0; i < images.length; i++) {
          images[i].id = baseId + "-" + i;
      }
      
      this.setData({
          loadingCount: images.length,
          images: images
      });
      console.log(images)
  }


})
