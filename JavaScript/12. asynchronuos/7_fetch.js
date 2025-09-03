/**
 * fetch() : 데이터(JSON,..) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    showResult();
});

// function getJson() {
//     fetch("./data.json")
//         .then((response) => {return response.json()})
//         .then((jsonData) => {
//             let jsonData2 = JSON.stringify(jsonData);
//             console.log(jsonData2);
            
//             let jsonData3 = JSON.parse(jsonData2);
//             console.log(jsonData3);

//             jsonData.forEach(obj => {
//                 console.log(obj.name, obj.age, obj.job);
//             });
//         })
//         .catch(error => console.log(error));
// }

async function getJson() {
    let response = await fetch("./data.json")
    return response.json();
}

async function showResult() {
    //1. getJson() 결과 가져오기
    let data = await getJson();

    //2. output 변수에 html 코드 저장
    let output = `
        <table border=1>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
            ${
                //js 코드가아닌 html 문자열을 불러와야하니 {} 대신 백틱 ⭐
                data.map((item) => `
                    <tr>
                        <td>${item.name}</td>    
                        <td>${item.age}</td>    
                        <td>${item.job}</td>    
                    </tr>
                `).join('') 
                //join()은 배열의 요소를 하나의 문자열로 합쳐주는 함수.
                //map은 배열을 반환하니까 [<tr>..</tr>, <tr>..</tr>] comma 삭제해야함
                //구분자를 없는상태로 문자열로 이어붙인다.
            }
        </table>
    `
    //3. innerHTML로 output 출력
    document.querySelector('#content').innerHTML = output;
}