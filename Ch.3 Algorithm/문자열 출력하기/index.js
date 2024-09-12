// 문제 설명
// 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 1,000,000
// str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

// 입출력 예
// 입력 #1
// HelloWorld!
// 출력 #1
// HelloWorld!

const readline = require("readline"); // node.js에서 제공하는 기본 모듈인 readline을 불러온다.
const rl = readline.createInterface({
  // readline.createInterface() 메서드를 사용하여 입력 인터페이스를 만든다.
  input: process.stdin, // 콘솔 입력을 받는다.
  output: process.stdout, // 콘솔 출력으로 데이터를 내보낸다.
});

rl.on("line", console.log);

// 문제풀이
// node.js 환경에서 입력을 처리하는 방법 중 하나
// readline 모듈을 사용하여 콘솔에서 입력을 받는것
