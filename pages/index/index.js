//index.js
//获取应用实例

var WxParse = require('../../wxParse/wxParse.js');

var article = `<h1>你好世界</h1>
<h2>这是二级标题</h2>
<h3>这是三级标题</h3>
<a href="#">用来跳转的超链接</a>
<section>这是 section 标签</section>
<p>这是 p 标签，然后中间嵌套了<strong> strong </strong>标签，再套一个试试看，<strong>加粗</strong></p>
<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1485920789&di=74ae49089bce9aed37eabb129a5eff02&imgtype=jpg&er=1&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff703738da97739120f92f746fd198618367ae265.jpg" />
<small>上面的美女真好看</small>
<video src="http://austrator.com/video/ppap.mp4"></video>
`;

var app = getApp()
Page({
  onLoad: function () {
    console.log('onLoad')
    var that = this
    WxParse.wxParse(article, that);
  }
})
