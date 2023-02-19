const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '여기에 제목 입력');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if(window.scrollY > 500)
    {
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }
    else
    {
        //배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300) );
// _.throttle(함수, 지연되는 시간(ms))


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        // el: {페이지 번호 요소 선택자}
        el: '.promotion .swiper-pagination', 
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEL: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function (){
    isHidePromotion = !isHidePromotion

    if(isHidePromotion)
    {
        //프로모션 영역 숨김처리
        promotionEl.classList.add('hide');
    }
    else
    {
        //프로모션 영역 보임처리
        promotionEl.classList.remove('hide');
    }
});

//범위 랜덤 함수, 소수점 2자리 정밀도.
function random(min, max) {
    // .toFixed() 로 반환된 문자 데이터를,
    // parseFloat() 을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector,   //선택자
        random(1.5, 2.5),   //애니메이션 동작 시간
        {   //옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach( function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,   //보여질 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면 상단을 0, 하단을 1로 했을 때 어디 지점을 트리거 지점으로 할지 지정
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})