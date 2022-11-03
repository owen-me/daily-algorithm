function solution(s) {
  const openingBracket = "(";
  const stack = [];

  for (const char of s) {
    if (openingBracket === char) {
      stack.push(char);

      continue;
    }

    if (stack.length === 0) return false;

    stack.pop();
  }

  return stack.length === 0 ? true : false;
}
