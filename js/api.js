const serviceKey = 'b26f3923-0250-4ed3-8329-54b04f6af8a2';

const fetchData = async () => {
    try {
        const response = await fetch(`http://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=${serviceKey}`, {
            headers: {
                accept: "application/json"
            }
        });
        // console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        let vegan = json?.response?.body?.items?.item?.filter((item) => item?.information?.includes("채식 메뉴 있음"));
        console.log(vegan);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
fetchData();