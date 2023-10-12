/**
 * 비동기 프로그래밍
 */

// function work(){
//     const now = new Date(); //현재시간

//     /**
//      * getTime
//      * 밀리세컨초
//      * 모든 Date객체는 1970년도 1월 1일부터 지금 코드가 실행한 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const miliSecond = now.getTime(); // 지금 시간을 밀리세컨초로 바꾼 것
//     const afterMiliSecond = miliSecond + 3000; // 지금으로부터 2초뒤

//     while(new Date().getTime() <= afterMiliSecond) {

//     }

//     console.log('완료');
// }

// console.log('코드시작');
// work();
// console.log('끝');

function work2(){
    setTimeout(function(){
        console.log('완료');
    },3000)
}
console.log('코드시작');
work();
console.log('끝');