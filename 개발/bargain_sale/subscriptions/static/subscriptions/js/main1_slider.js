const slides = document.querySelector('.main1_slides'); //전체 슬라이드 컨테이너
const slideimg = document.querySelectorAll('.main1_slides li'); //모든 슬라이드들
let currentldx = 0; //현재 슬라이드 index
const slideCount = 7; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼 
const next = document.querySelector('.next'); //다음 버튼 
const slideWidth = 300; //한개의 슬라이드 넓이 
const slideMargin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정 
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 400 + 'px';
    currentldx = num;
}

prev.addEventListener('click', function() {
    // 첫번째 슬라이드로 표시 됐을떄는 이전 버튼 눌러도 아무런 반응 없게 하려고 currentldx !== 0 일때만 moveSlide 함수 부름
    if (currentldx !== 0) moveSlide(currentldx -1);
});

next.addEventListener('click', function(){
    /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */
    if (currentldx !== slideCount -1) {
        moveSlide(currentldx + 1);
    }
});
