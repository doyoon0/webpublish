let count = 0;
let number = document.querySelector('#number');

//숫자 증가 함수
function increment() {
    if(count >= 0) {
        count++;
    }
    
    number.innerHTML = count;
}

//숫자 감소 함수
function decrement() {
    if(count > 0) {
        count--;
    }
    number.innerHTML = count;
}   

function counter(param) {
    if(param == 'increment') {
        count++;
    } else if (param == 'decrement') {
        count--;
    }

    number.innerHTML = count;
}