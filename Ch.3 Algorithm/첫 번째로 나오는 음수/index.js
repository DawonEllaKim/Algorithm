// 문제 설명
// 정수 리스트 num_list가 주어질 때,
// 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요.
// 음수가 없다면 - 1을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 100
// -10 ≤ num_list의 원소 ≤ 100

// 입출력 예
// num_list	result
// [12, 4, 15, 46, 38, -2, 15]	5
// [13, 22, 53, 24, 15, 6]	-1

function solution(num_list) {
  const answer = num_list.findIndex((item) => item < 0);
  console.log(answer);
  return answer;
}

solution([12, 4, 15, 46, 38, -2, 15]);

// 문제풀이
// 처음에는 num_list.map으로 진행했지만 index를 바로 뽑아내기 위해서 findIndex를 사용해서 좀 더 직관적으로 풀이했다.
