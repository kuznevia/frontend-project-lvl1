export default (first, second) => {
  let a = Math.abs(first);
  let b = Math.abs(second);
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  for (;;) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
};
