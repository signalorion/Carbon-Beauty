/*카본뷰티 메인page js*/
//로딩구역 - 
//window.addEventListener(이벤트명,function(){});
window.addEventListener("DOMContentLoaded", function () {
    console.log("로딩완료");
    
    
    //부드러운스크롤 함수호출
    startSS();
    
    
    

    //배너버튼에 마우스 오버/아웃시 class넣고 빼기
    //대상선정 : .banbtn
    var bbn = document.querySelector(".banbtn");
    //bbn에 마우스오버시
    bbn.onmouseover = function () {
        this.classList.add("on");
        this.classList.remove("off");
    }; ////////마우스오버///////////
    //bbn에 마우스아웃시
    bbn.onmouseout = function () {
        this.classList.add("off");
        this.classList.remove("on");
    }; ////////마우스오버///////////

    /*페럴렉스를 적용하기*****************************************/
    //vanilla JS -rellax.js 순수 js개발코딩///////////
    //배너버튼
    var rellax = new Rellax('.rellax', {
        speed: 7
        /*center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false*/
    }); ///////////////////////////////rellax///

    //상품박스 양쪽
    var rellax2 = new Rellax('.rellax2', {
        speed: 5
    });
    //상품박스 중앙
    var rellax3 = new Rellax('.rellax3', {
        speed: -3
    });



}); //////로드구역///////////
