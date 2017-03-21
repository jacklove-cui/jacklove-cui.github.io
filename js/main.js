$(document).ready(function () {
    // $(window).onresize = function(){
    //     window.location.reload();
    // }
    $(window).resize(function(){
        window.location.reload();
    });
    go( "#st-control-1",".page");
    go("#st-control-2",".about-me");
    go("#st-control-3",".skill");
    go("#st-control-4",".project");
    go( "#st-control-2",".down");
    function go(but, but1) {
        var $but = $(but);
        var $but1 = $(but1);
        var v = $but.offset().top;
        $but1.on("click", function () {
            $('html,body').animate({
                scrollTop: v
            }, 800)
        })
    }

    $('.carousel').carousel({
        interval: 2000
    })


        var heard = $(".hader ul li");
        // var list = heard.find();
        heard.on("click",function (){
            setTimeout(function(){
                var i = $(this).index();
                heard.eq( i ).addClass("haderhover").siblings().removeClass("haderhover");},200);




        })



    $(window).on("scroll",function () {
        var sec =$('[id^=st-control]');
        var scrollTop = $(this).scrollTop();
        var floorId = "";
        sec.each(function (index ,Ele) {
            var offsetTop = $(Ele).offset().top;
            if(scrollTop >= offsetTop ){
                floorId = index ;
            }else{
                return false;
            }
        })
        var nav = $(".hader ul li")
        nav.eq( floorId ).addClass("haderhover").siblings().removeClass("haderhover");
    })



});