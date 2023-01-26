const bingo = "BINGO"

const formatZero = (num) => {
  return (num < 10 ? "0"+String(num) : String(num));
}

const checkRepeat = (arr, num) => {
  if (arr.includes(num)) {
    return true;
  }
}

const generateBingo = (n) => {
  a = [];
  for (let i = 0; i < n; i++) {
    let c = {};
    for (let l of bingo) {
      let row = [];
      while (row.length < 5) {
        if (row.length == 2 && l == "N"){row.push("FR")};
        num = (formatZero(Math.ceil(Math.random()*15) + (15*(bingo.indexOf(l)))))
        if (!checkRepeat(row, num)) {
          row.push(num)
        }
      }
      c[l] = row;
    }
    a.push(c);
  }
  console.log(a);
}

generateBingo(1);