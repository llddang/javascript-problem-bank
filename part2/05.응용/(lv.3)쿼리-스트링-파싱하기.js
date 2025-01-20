/**
 * [(lv.3)쿼리-스트링-파싱하기.js]
 *
 * 1) parseQueryString 함수는 "?search=apple&page=2" 형태의 쿼리스트링을 객체로 변환합니다.
 * 2) 값이 없으면 빈 문자열("")로 처리합니다.
 * 3) 쿼리 파라미터가 없거나 빈 문자열인 경우, 빈 객체({})를 반환합니다.
 * 4) 항상 "?"로 시작한다고 가정합니다.
 *
 * @param {string} queryString
 * @returns {object}
 */

function parseQueryString(queryString) {
  if (!queryString) return {};

  const map = queryString
    .substring(1)
    .split("&")
    .map((item) => item.split("="));

  const obj = {};
  map.forEach(([key, value]) => {
    if (!key) return;
    obj[key] = value || "";
  });
  return obj;
}

export { parseQueryString };
