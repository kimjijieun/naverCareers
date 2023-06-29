$(function(){
    $('.link-util:last-child').click(function(e){
        e.preventDefault();
        $('.link-util:last-child').toggleClass('open')
    })

    $('.sc-notice .btn-close').click(function () {
        $('.sc-notice').hide();
    })

    $('.menu-item').hover(function(){

        if($(this).find('.sub-list').length){
            $('.header').addClass('hover')
            $(this).find('.sub-list').addClass('active')
        }
    }, function(){
        $('.header').removeClass('hover')
        $('.sub-list').removeClass('active')
    })

    $('.tab-area .button').click(function(){
        $('.tab-area').toggleClass('active');
    });

    


    var mainslide = new Swiper(".mainslide", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop:true,
    });

    var midslide = new Swiper(".midslide", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        breakpoints:{
            769:{
                slidesPerView: 1.1,
            }
          },
    });

    var lastslide = new Swiper(".lastslide", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        breakpoints:{
            769:{
                slidesPerView: 3,
                spaceBetween: 44,
            }
          },
    });


    $('.search-area select').change(function(e){
        e.preventDefault();
        $(this).css('color','#000');
    })


    $('.gnb-area .btn-menu').click(function(){
        $('.btn-menu').toggleClass('btn-close')
        $('.mgnb-area').toggleClass('active')
    })

    $('.mgnb-area .m-lang .m-link-menu').click(function(e){
        e.preventDefault();
        $(this).addClass('check').siblings().removeClass('check')
    })



    $('.mgnb-area .m-link-menu1').click(function(e){
        e.preventDefault();
        $('.m-menu-item, .m-sub-list').toggleClass('active')
    })
    $('.Msearch-wrap').click(function(e){
        e.preventDefault();
        $('.mo-lnb').addClass('active')
        $('body').addClass('active')
    })

    $('.mo-lnb .btn-close').click(function(e){
        e.preventDefault();
        $('.mo-lnb').removeClass('active')
        $('body').removeClass('active')
    })


    $('.mo-lnb .select-wrap .btn-select').click(function(e){
        e.preventDefault();
        $(this).toggleClass('open')
        if ($(this).siblings('ul').css('display') == 'block') {
            $(this).siblings('ul').css('display','none')
        } else {
            $(this).siblings('ul').css('display','block')
        }
    })

    $('.mo-lnb .sub-list2 .btn-select').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on')
    })


    $(".mo-lnb .sub-list2 .item-txt").on("click",function(){                                
        $(this).attr("disabled",true);
    });

    $('.mo-lnb .btn-lnbclose').click(function(e){
        e.preventDefault();
        $('.mo-lnb .btn-select').removeClass('on','open')

        $('input').prop('checked',false)
    })

    $('.btn-all').click(function(e){
        e.preventDefault();
        $('.sub-list2 input').prop('checked',true)
        
    })
});