// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

const solution = (arr) => {
  if (arr.length <= 1) {
    return [-1];
  } else {
    const minNumber = Math.min(...arr);
    const index = arr.indexOf(minNumber);
    arr.splice(index, 1);
  }
  return arr;
};

const arr = [4, 3, 2, 1];

solution(arr);

// 문제 풀이
// 처음에는 sort한 후에 pop으로 제일 작은 수를 없애려고 했다.
// 하지만 그러면 배열의 순서를 바꾸게 되서 테스트에서 실패를 했다. 그래서 먼저 작은 수를 찾고 제거하는 방법으로 해결했다.
