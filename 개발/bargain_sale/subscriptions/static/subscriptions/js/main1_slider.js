const slides1 = document.querySelector('.main1_slides'); //전체 슬라이드 컨테이너
const slideimg1 = document.querySelectorAll('.main1_slides li'); //모든 슬라이드들
let current1ldx = 0; //현재 슬라이드 index
const slide1Count = 7; // 슬라이드 개수
const prev1 = document.querySelector('.prev1'); //이전 버튼 
const next1 = document.querySelector('.next1'); //다음 버튼 
const slide1Width = 300; //한개의 슬라이드 넓이 
const slide1Margin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정 
slides1.style.width = (slide1Width + slide1Margin) * slide1Count + 'px';

function moveSlide(num) {
    slides1.style.left = -num * 400 + 'px';
    current1ldx = num;
}

prev1.addEventListener('click', function() {
    // 첫번째 슬라이드로 표시 됐을떄는 이전 버튼 눌러도 아무런 반응 없게 하려고 currentldx !== 0 일때만 moveSlide 함수 부름
    if (current1ldx !== 0) moveSlide(current1ldx -1);
});

next1.addEventListener('click', function(){
    /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */
    if (current1ldx !== slide1Count -1) {
        moveSlide(current1ldx + 1);
    }
});
