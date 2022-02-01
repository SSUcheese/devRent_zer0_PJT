const slides2 = document.querySelector('.main2_slides'); //전체 슬라이드 컨테이너
const slideimg2 = document.querySelectorAll('.main2_slides li'); //모든 슬라이드들
let current2ldx = 0; //현재 슬라이드 index
const slide2Count = 7; // 슬라이드 개수
const prev2 = document.querySelector('.prev2'); //이전 버튼 
const next2 = document.querySelector('.next2'); //다음 버튼 
const slide2Width = 300; //한개의 슬라이드 넓이 
const slide2Margin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정 
slides2.style.width = (slide2Width + slide2Margin) * slide2Count + 'px';

function moveSlide(num) {
    slides2.style.left = -num * 400 + 'px';
    current2ldx = num;
}

prev2.addEventListener('click', function() {
    // 첫번째 슬라이드로 표시 됐을떄는 이전 버튼 눌러도 아무런 반응 없게 하려고 currentldx !== 0 일때만 moveSlide 함수 부름
    if (current2ldx !== 0) moveSlide(current2ldx -1);
});

next2.addEventListener('click', function(){
    /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */
    if (current2ldx !== slide2Count -1) {
        moveSlide(current2ldx + 1);
    }
});