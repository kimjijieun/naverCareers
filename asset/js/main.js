$(function(){

    // 닫기 사라지기
    $('.sc-notice .btn-close').click(function () {
        $('.sc-notice').hide();
    })

    // 메뉴호버
    $('.menu-item').hover(function(){

        if($(this).find('.sub-list').length){
            $('.header').addClass('hover')
            $(this).find('.sub-list').addClass('active')
        }
    }, function(){
        $('.header').removeClass('hover')
        $('.sub-list').removeClass('active')
    })

    // 푸터 버튼 클릭시 관련사이트 나오기
    $('.tab-area .button').click(function(){
        $('.tab-area').toggleClass('active');
    });
    
    
    // $('.tab-area .button').click(function(e){
    //     e.preventDefault();
    //     $('.gnb').addClass('on');
    // });
    // $('.tab-area .button').click(function(e){
    //     e.preventDefault();
    //     $('.gnb').removeClass('on');
    // });

    


// 메인슬라이드
    var mainslide = new Swiper(".mainslide", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop:true,
    });



// 두번째 슬라이드
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
//세번째 슬라이드
    var lastslide = new Swiper(".lastslide", {
        slidesPerView: 1,/* 기준이 모바일 */
        spaceBetween: 30,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        breakpoints:{
            769:{/* 768보다 컸을때 */
                slidesPerView: 3,
            }
          },
    });



    // w1100

    $('.gnb-area .btn-menu').click(function(){
        // $('.btn-menu').addClass('btn-close')
        // $('.mgnb-area').addClass('active')
        $('.btn-menu').toggleClass('btn-close')
        $('.mgnb-area').toggleClass('active')

        // if ('btn-menu'.css('display') == 'none') {
        //     $('.btn-menu').addClass('btn-close')
        // }
    })
    // $('.gnb-area .btn-close').click(function(){
    //     $('.btn-menu').removeClass('btn-close')
    //     $('.mgnb-area').removeClass('active')
    // })

    // $('.gnb-area .btn-menu').click(function(){
    //     $('.btn-menu').removeClass('btn-close')
    //     $('.mgnb-area').removeClass('active')

    //     if ('btn-close'.css('display') == 'block') {
    //         $('.btn-close').removeClass('btn-close')
    //     }
    // })


    //사이드 메뉴
    $('.mgnb-area .m-link-menu1').click(function(e){
        e.preventDefault();
        $('.m-menu-item, .m-sub-list').toggleClass('active')
    })
});