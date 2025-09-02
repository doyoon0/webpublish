/**
 * iterable(순회) object : Iteration Protocol을 준수하고 있는 객체
 * - for..of 구문
 * - ...(Spread operator: 스프레드 연산자) : 블록안에서 객체의 데이터를 전개, 펼쳐놓음
 * - ...(Rest parameter : 나머지 인자) : 매개변수에서 파라미터 매핑
 * - ...(Destructuring object : 구조분해 할당) : 객체의 구조를 분해하여 대입하는 변수에 자동으로 매핑
 * - String, Array, Set, Map
 */

// 문자열 객체 생성 - 'Hello~ JavaScript World!!!'
const str = new String('Hello~ JavaScript World!!!');
console.log(`str.length = ${str.length}`);
for(const text of str) { //"한 반복문 안에서는" 재정의나 재할당은 못함. 보통 const로 선언하는게 일반적.
    console.log(text);    
}

console.clear();
const numbers = [1, 2, 3, 4, 5];
for(const number of numbers) {
    console.log(number);
}

//Number 클래스는 iterable object 아니므로 for...of 사용X
console.clear();
// const numbers2 = new Number(12345);
// for(const number of numbers2) {
//     console.log(number);
// }

