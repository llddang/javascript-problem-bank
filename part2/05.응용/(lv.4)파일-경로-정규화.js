/**
 * [(lv.4)파일-경로-정규화.js]
 *
 * - normalizePath 함수를 작성하세요.
 * - 이 함수는 파일 경로에서 '.'와 '..'를 처리하여 경로를 정규화합니다.
 * - '/' 문자로 구분된 경로 요소를 배열로 만든 뒤,
 *   '.'이면 무시, '..'이면 이전 요소 제거를 통해 처리하세요.
 * - 시작과 끝의 '/' 처리를 주의하되, 중간의 연속된 '/'는 하나로 합쳐야 합니다.
 * - 예: "/a/b/../c" => "/a/c", "./a//b/./c/" => "a/b/c/", "/a/../../b" => "/b"
 *
 * @param {string} path
 * @returns {string}
 */

function normalizePath(path) {
  const pathStr = path.split("/").filter((item) => item !== "" && item !== ".");
  while (true) {
    const idx = pathStr.indexOf("..");
    if (idx === -1) break;
    if (idx === 0) pathStr.splice(idx, 1);
    else pathStr.splice(idx - 1, 2);
  }

  if (pathStr.length === 0) return "/";
  return (
    (path.at(0) === "/" ? "/" : "") +
    pathStr.join("/") +
    (path.at(-1) === "/" ? "/" : "")
  );
}

// export 를 수정하지 마세요.
export { normalizePath };
