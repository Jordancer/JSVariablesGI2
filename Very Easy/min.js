function min(x, y) {
  if (x > y) {
    return y;
  } else if (x < y) {
    return x;
  } else {
    return "";
  }
}

console.log(min(355, 200));
