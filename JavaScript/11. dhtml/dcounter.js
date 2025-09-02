//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    initForm();
});

//화면 폼 함수
function initForm() {
    let output = `
        <h1>Counter</h1>
        <div>
            <h2 id="number">0</h2>
            <button type="button" class="button" data-operation="increment">increment(+)</button>
            <button type="button" class="button" data-operation="decrement">decrement(-)</button>
        </div>
        <script src="./counter.js"></script>
    `;
    
    document.querySelector('#content').innerHTML = output;

    //버튼 이벤트 적용
    let buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector("#number").textContent;
            let type = button.dataset.operation;
            if(type === 'increment') {
                if(number >= 0) document.querySelector("#number").textContent = ++number;
            } else {
                if(number > 0) document.querySelector("#number").textContent = --number;
            }

        });
    });
}



let count = 0;
function counter(param) {
    let number = document.querySelector('#number');

    if(param == 'increment') {
        count++;
    } else if (param == 'decrement') {
        count--;
    }

    number.innerHTML = count;
}