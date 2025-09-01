/**
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 결과를 새로운 배열객체로 리턴
 * - 배열.map(콜백함수);
 */

let nArray = [1.2, 2.3, 3.4, 5.6, 6.7];
let numbers = [1, 2, 3, 4, 5];
let objects = [
    {name: '홍길동', age: 10},
    {name: '이순신', age: 20},
    {name: '김유신', age: 30},
];

//nArray 요소 출력
nArray.forEach((item, i) => console.log(`nArray[${i}] = ${item}`));

//nArray 요소의 소수점 절삭 후 데이터 출력 : map()
let nArray2 = nArray.map((item) => { return Math.floor(item)}); // map은 default로 배열객체
// 아래 코드와 동일. 한줄이어서 {}와 return이 같이 생략된것. 둘중 하나만 생략해선 안됨!!
// let nArray2 = nArray.map((item) => Math.floor(item)); 
nArray2.forEach(item => console.log(item));

//numbers 요소에 100을 곱하여 새로운 배열 객체를 생성
let numbers2 = numbers.map((item) => { return item*100});
numbers2.forEach(item => console.log(item));

//objects 요소 중 이름이 '이순신'인 객체(object literal)를 새로운 배열객체로 생성,
//결과 --> [{name: '이순신', age: 20}]
let obj = objects.map((item) => {
    let resultItem = {};
    if(item.name === '이순신') {
        resultItem = item;
    }
    return resultItem;
}); //[] 새로운 배열 생성됨!

console.log(obj);