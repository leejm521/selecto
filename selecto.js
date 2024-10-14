$(document).ready(function(){

    $(".gnb").mouseenter(function(){
        $("#header").stop().animate({"height":"480px"});
        $(".sub").stop().animate({"top":"100px"});
        $(".info").addClass("change");

    });
    $(".gnb").mouseleave(function(){
        $("#header").stop().animate({"height":"100px"});
        $(".sub").stop().animate({"top":"-480px"});
        $(".info").removeClass("change");
    });

    let i = 0;
    let count = $(".main_bn>li").length;

    setInterval(function(){
        if(i = count-1){
            i = 0;
        }else{i++;}
        bnSlide();
    }, 3000);

    function bnSlide(){
        $(".main_bn").stop().animate({"margin-left":"-200%"}, function(){
            $(".main_bn>li").first().appendTo(".main_bn");
            $(".main_bn").css({"margin-left":"-100%"});
        });
    }
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10; // document의 x좌표값
        let mouseY = e.pageY + 10; // document의 y좌표값
    
        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    $(".list_btn").click(function(event){
        event.preventDefault();
        let i = $(this).index();
        $(".list_btn").removeClass("list_on");
        $(".list_btn").eq(i).addClass("list_on");
        $(".menu_bn>li").removeClass("bn_on");
        $(".menu_bn>li").eq(i).addClass("bn_on");
        $(".menu_png>li").removeClass("png_on");
        $(".menu_png>li").eq(i).addClass("png_on");
        $(".menu_right>li").removeClass("menu_on");
        $(".menu_right>li").eq(i).addClass("menu_on");
        $(".menu_bn>li").eq(i).addClass('bn_on').siblings().removeClass('bn_on');
        $(".menu_bn>li").eq(i).siblings().css({'z-index':'0'});
        $(".menu_bn>li").eq(i).css({'z-index':'2'});
        $(".menu_bn>li").eq(i-1).css({'z-index':'1'});
        $(".menu_bn>li").eq(i+1).css({'z-index':'0'});
    });

})