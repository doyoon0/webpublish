/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 * - function 키워드로 정의된 함수
 */
test1();
console.log(test1) //stack frame 저장되는 변수명(객체주소 저장) 함수이름과 똑같은 변수명으로 객체가 저장된다.

function test1() { //호이스팅 작업이 선행 됨!!
    console.log('-----> test1');
}

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는
 * 호이스팅 작업이 선행되지 않음!!
 */
// test2();  error

const test2 = () => { //호이스팅 작업이 선행 안됨!!
    console.log('------> test2');
}

test2();  //메모리에 올리고 정상 호출

test3()
const test3 = function() { //호이스팅 작업이 선행 안됨!!
    console.log('------> test3');
}
