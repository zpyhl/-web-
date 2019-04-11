$(function(){
    banner();
    initTab();
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

// 动态响应式轮播图
function banner(){
//1.准备图片数据
    var imageList = [
        {
            pcImg:'images/slide_01_2000x410.jpg',
            mImg:'images/slide_01_640x340.jpg'
        },
        {
            pcImg:'images/slide_02_2000x410.jpg',
            mImg:'images/slide_02_640x340.jpg'
        },
        {
            pcImg:'images/slide_03_2000x410.jpg',
            mImg:'images/slide_03_640x340.jpg'
        },
        {
            pcImg:'images/slide_04_2000x410.jpg',
            mImg:'images/slide_04_640x340.jpg'
        }
    ];
//2.渲染的方法
    var renderHtml = function(){
        // 判断渲染设备
        var width = $(window).width();
        var isMobile = width >= 768 ? false : true ;
        var pointStr = $("#point_template").html();
        var imageStr = $("#image_template").html();
        var pointFuc = _.template(pointStr);
        var imageFuc = _.template(imageStr);
        var pointHtml = pointFuc({model:imageList});
        var imageHtml = imageFuc({model:imageList,isMobile:isMobile});
        $(".carousel-indicators").html(pointHtml);
        $(".carousel-inner").html(imageHtml);

    };
    $(window).on('resize',function(){
        renderHtml();
    }).trigger('resize');

    // 轮播图手势滑动效果
    var startX = 0, moveX = 0, distanceX = 0 ,isMove = false ;
    $(".wjs_banner").on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX ;
        isMove = true;
    }).on('touchend',function(e){
        console.log(distanceX);
        // distanceX > 0 ;下一张   distanceX < 0 上一张
        if(isMove && Math.abs(distanceX) > 50) {
            if(distanceX > 0){
                $(".carousel").carousel('prev');
            }else{
                $(".carousel").carousel('next'); 
            }
        }
    });

}
function initTab(){
    // 1计算ul宽度，设置好
    //2父容器设置成溢出隐藏的盒子
    //3初始化滑动组块
    var $parent = $('.wjs_product_box');
    var $child = $parent.find('ul');
    var $lis = $child.find("li");
    var width = 0;
    $lis && $lis.each(function(){
        width += $(this).outerWidth(true);
    });
    $child.width(width);
    // 3初始化滑动组块
    itcast.iScroll({
        swipeDom:$parent.get(0),
        swipeType:'x',
        swipeDistance:'50'
    });

}
