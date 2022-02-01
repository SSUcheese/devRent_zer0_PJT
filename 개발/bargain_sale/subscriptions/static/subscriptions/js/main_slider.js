const slides1 = document.querySelector('.main1_slides'); //main1 전체 슬라이드 컨테이너
const slides2 = document.querySelector('.main2_slides'); //main2 전체 슬라이드 컨테이너
const slideimg1 = document.querySelectorAll('.main1_slides li'); //main1 모든 슬라이드들
const slideimg2 = document.querySelectorAll('.main2_slides li'); //main2 모든 슬라이드들
let currentldx = 0; //현재 슬라이드 index
const slideCount = 3; // 슬라이드 개수
const prev1 = document.querySelector('.prev1'); //main1 이전 버튼
const prev2 = document.querySelector('.prev2'); //main2 이전 버튼 
const next1 = document.querySelector('.next1'); //main1 다음 버튼
const next2 = document.querySelector('.next2'); //main2 다음 버튼 
const slideWidth = 300; //한개의 슬라이드 넓이 
const slideMargin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정 
slides1.style.width = (slideWidth + slideMargin) * slideCount + 'px';
slides2.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide1(num) {
    slides1.style.left = -num * 400 + 'px';
    currentldx = num;
}

function moveSlide2(num) {
    slides2.style.left = -num * 400 + 'px';
    currentldx = num;
}

prev1.addEventListener('click', function() {
    // 첫번째 슬라이드로 표시 됐을떄는 이전 버튼 눌러도 아무런 반응 없게 하려고 currentldx !== 0 일때만 moveSlide 함수 부름
    if (currentldx !== 0) moveSlide1(currentldx -1);
});

prev2.addEventListener('click', function() {
    // 첫번째 슬라이드로 표시 됐을떄는 이전 버튼 눌러도 아무런 반응 없게 하려고 currentldx !== 0 일때만 moveSlide 함수 부름
    if (currentldx !== 0) moveSlide2(currentldx -1);
});

next1.addEventListener('click', function(){
    /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */
    if (currentldx !== slideCount -1) {
        moveSlide1(currentldx + 1);
    }
});

next2.addEventListener('click', function(){
    /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */
    if (currentldx !== slideCount -1) {
        moveSlide2(currentldx + 1);
    }
<<<<<<< HEAD
});
=======
});

>>>>>>> oshmos
