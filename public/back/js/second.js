/**
 * Created by 54721 on 2018/11/1.
 */
$(function() {
  var currentPage = 1;  // 当前页
  var pageSize = 5;     // 每页多少条

  // 一进入页面调用的函数
  render();

  function render() {
    // 发送 ajax 请求数据, 进行渲染
    $.ajax({
      type: "get",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function( info ) {
        console.log( info )
        var htmlStr = template("secondTpl", info );
        $('tbody').html( htmlStr );

        // 分页插件初始化
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3, // boostrap 版本号
          totalPages: Math.ceil( info.total / info.size ), // 总页数
          currentPage: info.page, // 当前页
          // 注册页码点击事件
          onPageClicked: function( a, b, c, page ) {
            // 更新当前页
            currentPage = page;
            // 重新渲染
            render();
          }
        })
      }
    })
  }


})
