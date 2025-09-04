//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    showResult('20250101');
});

/**
 * KMDB 영화 포스터 검색
 */
async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

async function getAPI(sdate) {
    //kobis key = 2c0579b0529bc5042a8b0c5b3149b18b
    //kobis api 연동
    // let sdate = '20250903';
    let key = '2c0579b0529bc5042a8b0c5b3149b18b';
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`
    url += `searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    return response.json();
}

async function showResult(sdate) {
    let kobis = await getAPI(sdate);
    let posterList = [];
    let kobisobj = kobis.boxOfficeResult;
    const movieList = kobisobj.dailyBoxOfficeList;
    for(const movie of movieList) {
        let name = movie.movieNm;
        let date = movie.openDt.split('-');
        let poster = await searchMoviePoster(name, date);
        posterList.push(poster);
    }

    console.log(posterList);

    // 출력할 HTML 구성
    let output = `
        <div>
            <span>검색일 : </span>
            <input type="text" id="searchDate" placeholder="-제외 예)20250101">
            <button type="button" id="btnSearch">검색</button>
        </div>

        <h3>타입 : ${kobisobj.boxofficeType}</h3>
        <h3>일자 : ${kobisobj.showRange}</h3>
        <div style="display: flex; gap: 20px;">
            <img src="${posterList[0]}" id="poster"/>
            <table border="1">
                <tr>
                    <th>순위</th>
                    <th>영화명</th>
                    <th>개봉일</th>
                    <th>매출액</th>
                    <th>관객수</th>
                </tr>
                ${movieList.map((movie, index) => `
                    <tr class="movieInfo" id="${posterList[index]}">
                        <td>${movie.rank}</td>
                        <td>${movie.movieNm}</td>
                        <td>${movie.openDt}</td>
                        <td>${movie.salesAcc}</td>
                        <td>${Number(movie.audiCnt).toLocaleString()}명</td>
                    </tr>
                `
                ).join('')}
            </table>
        </div>
    `;

    // HTML에 삽입
    document.querySelector('#content').innerHTML = output;

    // 검색 버튼이 만들어진 후 동작
    document.querySelector("#btnSearch").addEventListener('click', () => {
        let sdate = document.querySelector("#searchDate").value.trim();
        showResult(sdate);
    });

    //영화별 마우스 이벤트 적용
    let rows = document.querySelectorAll('.movieInfo');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            let imgURL = row.id;
            document.querySelector('#poster').src = imgURL;
            row.style.background ='gray';
        });

        row.addEventListener('mouseout', () => {
            row.style.background ='white';
        });
    });

}