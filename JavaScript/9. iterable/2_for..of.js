/**
 * iterable object를 순회하여 데이터 가져옴
 * - for(const 로컬변수 of 객체) { 실행문; }
 */

//배열의 요소를 교체하는 함수 생성
function replace([...array], origin, target) { //array의 shallow copy를 이용해 원본 보호
    //for..of
    let index = 0;
    for(const item of array) {
        if(item === origin) {
            array.splice(index, 1, target);
        }
        index++;
    }
    return array;
}

function replace2(array, origin, target) {
    let copyArray = Array.from(array); //array.from()
    copyArray.forEach((item, index) => {
        if(item === origin) {
            array.splice(index, 1, target);
        }
    })
}

function replace3(array, origin, target) {
    return array.map(item => item === origin ? target : item);
}

let fruits = new Array('🍎', '🍊', '🍋', '🍏', '🍑');
let fresult = replace(fruits, '🍎', '🍑');
let fresult2 = replace(fruits, '🍎', '🍑');
let fresult3 = replace(fruits, '🍎', '🍑');
console.log(fruits);
console.log(fresult);
console.log(fresult2);
console.log(fresult3);