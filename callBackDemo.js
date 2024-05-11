function add(a, b) {
  return a + b;
}

const result = add(4, 4);
console.log(result);

(function (a, b) {
  console.log(a);
})(3, 5);

//callback
const sum = function (a, b, sohel) {
  const answer = a + b;
  console.log(answer);
  sohel();
};

sum(4, 5, function () {
  console.log("done excution");
});
