fetch('https://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList?serviceKey=ZXfWv8aizBtm6uHE%2Fvofrjzz2FMfm3%2FxOxLeB%2FfInDyPgt%2BEgUWDfh0EfQc%2F%2B15He2qdhbBN9vAEc5vTgtkYLw%3D%3D&pageNo=1&numOfRows=3&type=json&locatadd_nm=%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C')
.then(response => response.json())
.then(json => {
    console.log(json)
})
fetch('https://apis.data.go.kr/B190001/cardFranchisesV3/cardV3?serviceKey=ZXfWv8aizBtm6uHE%25252Fvofrjzz2FMfm3%25252FxOxLeB%25252FfInDyPgt%25252BEgUWDfh0EfQc%25252F%25252B15He2qdhbBN9vAEc5vTgtkYLw%25253D%25253D&page=1&perPage=10&cond%5Bemd_cd%3A%3AEQ%5D=27200000&returnType=json')
.then(response => response.json())
.then(json => {
    console.log(json)
})