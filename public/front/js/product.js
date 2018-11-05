/**
 * Created by 54721 on 2018/11/5.
 */

$(function() {


  // 1. 获取地址栏传递过来的 productId
  var productId = getSearch( "productId" );

  // 2. 根据 productId 发送请求, 渲染页面
  $.ajax({
    type: "get",
    url: "/product/queryProductDetail",
    data: {
      id: productId
    },
    dataType: "json",
    success: function( info ) {
      console.log(info);
      var htmlStr = template( "productTpl", info );
      $('.lt_main .mui-scroll').html( htmlStr );

      // 手动在 轮播图 渲染完成后, 进行初始化
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
      });

      // 手动初始化, 数字框
      mui(".mui-numbox").numbox()
    }
  })


})
