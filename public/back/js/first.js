/**
 * Created by 54721 on 2018/11/1.
 */


$(function() {
  var currentPage = 1; // 当前页
  var pageSize = 5; // 每页多少条


  // 1. 发送ajax请求数据, 进行渲染
  render();
  function render() {
    $.ajax({
      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function( info ) {
        console.log( info );
        var htmlStr = template( "firstTpl", info );
        $('tbody').html( htmlStr );

        // 进行分页初始化
        $('#paginator').bootstrapPaginator({
          // 版本号
          bootstrapMajorVersion: 3,
          // 总页数
          totalPages: Math.ceil( info.total / info.size ),
          // 当前页
          currentPage: info.page,
          // 绑定页码点击事件
          onPageClicked: function( a, b, c, page ) {
            // 点击时, 显示 page 页的数据
            // 更新当前页
            currentPage = page;
            render();
          }
        })
      }
    })
  }


});
