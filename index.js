let pageNo = 1;
const numOfRows = 100;
const serviceKey = 'b26f3923-0250-4ed3-8329-54b04f6af8a2';

const fetchData = async () => {
    try {
        const response = await fetch(`http://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}`,{
            headers: {
            accept: "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Clear previous data
    dataContainer.innerHTML = `<p>페이지: ${pageNo}</p>`;
};
const nextPage = () => {
    pageNo++;
    fetchData();
};
// document.getElementById('next-button').addEventListener('click', nextPage);

// 페이지 로드시 초기 데이터를 가져옵니다.
fetchData();