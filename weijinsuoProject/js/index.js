$(function(){
    banner();
});

// 动态响应式轮播图
function banner(){
//1.准备图片数据
    var imageList = [
        {
            pcImg:'images/slide_01_2000x410.jpg',
            mIMg:'images/slide_01_640x340.jpg'
        },
        {
            pcImg:'images/slide_02_2000x410.jpg',
            mIMg:'images/slide_02_640x340.jpg'
        },
        {
            pcImg:'images/slide_03_2000x410.jpg',
            mIMg:'images/slide_03_640x340.jpg'
        },
        {
            pcImg:'images/slide_04_2000x410.jpg',
            mIMg:'images/slide_04_640x340.jpg'
        }
    ];
//2.渲染的方法
    var renderHtml = function(){
        // 判断渲染设备
        var width = $(window).width();
        var isMobile = width >= "768" ? true : false ;
        var pointStr = $("#point_template").html();
        var imageStr = $("#image_template").html();
        var pointFuc = _.template(pointStr);
        var imageFuc = _.template(imageStr);
        var pointHtml = pointFuc({model:imageList});
        var imageHtml = imageFuc({model:imageList,isMobile:isMobile});
        $(".carousel-indicators").html(pointHtml);
        $(".carousel-inner").html(imageHtml);

    };
    renderHtml();
}
