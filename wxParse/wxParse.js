import HtmlToJson from './html2json.js';

function wxParse(data = '<div>数据不能为空</div>', target) {
  var that = target;
  var transData = {};//存放转化后的数据
  transData = HtmlToJson.html2json(data);
  console.log(JSON.stringify(transData));

  that.setData(transData);
  that.wxParseImgTap = wxParseImgTap;
}
// 图片点击事件
function wxParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
    })
  }
}

module.exports = {
  wxParse: wxParse
}


