const serviceKey = "b26f3923-0250-4ed3-8329-54b04f6af8a2";
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const clickedDataId = params.get("dataId");
  console.log(clickedDataId); // 출력: 동남아시아
  // 세계음식 데이터
  const foodData = async () => {
    try {
      const response = await fetch(
        `http://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=${serviceKey}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      const json = await response.json();
      let pet = json?.response?.body?.items?.item?.filter((item) =>
        // 부산광역시 음식점
        // item?.address?.includes("부산광역시") &&
        item?.information?.includes("동반 입장가능")
      );
      // console.log(pet);
      // 동남아시아, 유럽, 인도, 북미남미, 기타
      let southEastAsia = [],
        europe = [],
        eastAsia = [],
        america = [],
        etc = [];
      pet?.forEach((item) => {
        if (item.category2?.includes("동남아시아")) southEastAsia.push(item);
        else if (item.category2?.includes("동아시아")) eastAsia.push(item);
        else if (item.category2?.includes("유럽")) europe.push(item);
        else if (
          item.category2?.includes("북미") ||
          item.category2?.includes("남미")
        )
          america.push(item);
        else etc.push(item);
      });
      console.log("동남아시아", southEastAsia);
      console.log("동아시아", eastAsia);
      console.log("유럽", europe);
      console.log("북미", america);
      console.log("기타", etc);

      const content = document.querySelector(".content");
      switch (clickedDataId) {
        case "동남아시아":
          southEastAsia?.forEach((item) => {
            let category = document.createElement("p");
            category.textContent = item.title;
            content.appendChild(category);
          });
          break;
        case "동아시아":
          eastAsia?.forEach((item) => {
            let category = document.createElement("p");
            category.textContent = item.title;
            content.appendChild(category);
          });
          break;
        case "유럽":
          europe?.forEach((item) => {
            let category = document.createElement("p");
            category.textContent = item.title;
            content.appendChild(category);
          });
          break;
        case "아메리카":
          america?.forEach((item) => {
            let category = document.createElement("p");
            category.textContent = item.title;
            content.appendChild(category);
          });
          break;
        case "기타":
          etc?.forEach((item) => {
            let category = document.createElement("p");
            category.textContent = item.title;
            content.appendChild(category);
          });
          break;
        default:
          console.log("");
      }
    } catch (error) {
      console.error("데이터를 불러오는 도중 에러가 발생했습니다:", error);
      if (error.message.includes("Unexpected token")) foodData();
    }
  };
  foodData();

  // 호텔 데이터
  const hotelData = () => {
    fetch("../json/hotel.json")
      .then((response) => response.json())
      .then((data) => {
        let petOk = [];
        data?.forEach((item) => {
          item.pet_info_cn?.includes("반려동물 동반 가능") && petOk.push(item);
        });
        console.log("호텔", petOk);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 도중 에러가 발생했습니다:", error);
      });
  };
  hotelData();

  // 카페 데이터
  const cafeData = () => {
    fetch("../json/cafe.json")
      .then((response) => response.json())
      .then((data) => {
        let cafe = [];
        data?.forEach((item) => {
          item.CTGRY_THREE_NM?.includes("카페") && cafe.push(item);
        });
        console.log("카페", cafe);
        // console.log(data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 도중 에러가 발생했습니다:", error);
      });
  };
  cafeData();
});
