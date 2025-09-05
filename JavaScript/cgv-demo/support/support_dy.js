//DOM 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
window.addEventListener('DOMContentLoaded', function () {
    createTable();

    
    //타입 별 데이터 리스트 조회
    let rows = document.querySelectorAll('.filter-menu li a');
    rows.forEach(row => {
        row.addEventListener('click', (e) => {
            e.preventDefault();
            let type = row.id;
            createTable(type);
        });
    });
}); //window.addEventListener

async function getData() {
    let response = await fetch("../data/support.json");
    return response.json()
}

async function createTable(type) {
    let list = await getData();

    //type이 전달되면 필터링
    if (type && type !== 'all') {
        list = list.filter(item => item.type === type);
    }

    //기본 테이블 삭제
    const existingTable = document.querySelector("#support-table");
    if (existingTable) existingTable.remove();

    //테이블 데이터 생성
    let output
        = `<table id="support-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${list.map((item, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>[${item.type}]</td>
                                <td><a href="#">${item.title}</a></td>
                                <td>${item.rdate}</td>
                                <td>${item.hits}</td>
                            </tr>    
                        `).join("")}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">1 2 3 4 5 >> </td>
                        </tr>
                    </tfoot>
    `
    //테이블 추가
    document.querySelector("#before-table").insertAdjacentHTML('afterend', output);
}
