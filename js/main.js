$(document).ready(function () {

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
        var i = $(this).index();
       heard.eq( i ).addClass("haderhover").siblings().removeClass("haderhover");
    })



});