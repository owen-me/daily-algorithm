const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, request, total] = [
  +input[0],
  input[1].split(' ').map(Number),
  +input[2],
];

request.sort((a, b) => a - b);

let low = 0;
let high = Math.max(...request);
let result = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  const calculateNeededBudget = request.reduce(
    (acc, location) => acc + Math.min(mid, location),
    0
  );

  if (calculateNeededBudget <= total) {
    low = mid + 1;
    result = mid;
  } else {
    high = mid - 1;
  }
}

console.log(result);
