/**
 * if
 */

let num = 5;

if(num % 2 === 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}

//if~else
if(num % 2 === 0) {
    console.log("2의 배수");
} else if(num % 3 === 0) {
    console.log("3의 배수");
} else {
    console.log("2또는 3의 배수가 아니다.");
}

//연산자 없이도 가능
if(num) {
    console.log("num값이 존재한다");
}


// switch문
const day = 'saturday';

switch(day) {
    case 'monday':
        console.log('월요일');
        break;
    case 'tuesday' :
        console.log('화요일');
        break;
    case 'wednsday' :
        console.log('수요일');
        break;
    default :
    console.log('그외');
    break;
}