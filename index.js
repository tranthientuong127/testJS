// Thể tích hình cầu

function volumn(r) {
  return (V = (4 * 3.14 * r * r * r) / 3);
}
console.log(volumn(2));

// Tổng các số nguyên nằm giữa chúng

function sumOfNumbers(a, b) {
  let sum = 0;

  for (i = a; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(3, 8));

// Tính tổng các ước số của số đó

function sumOfNumbers(n) {
  let S = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      S += i;
    }
  }
  return S;
}
console.log(sumOfNumbers(4));

// Kiểm tra số nguyên tố

function Prime(n) {
  if (n == 2) {
    return true;
  } else if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i !== 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

console.log(Prime(4));

// Tính tổng số nguyên tố

function sumOfPrimes(n) {
  let total = 0;

  for (let i = 2; i < n; i++) {
    let cout = 1;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        cout = 0;
      }
    }
    if (cout == 1) {
      total += i;
    }
  }
  return total;
}

console.log(sumOfPrimes(6));

// Chuỗi

function title(string) {
  let myStr = string.toLowerCase().split(" ");

  for (var i = 0; i < myStr.length; i++) {
    myStr[i] = myStr[i][0].toUpperCase() + myStr[i].slice(1);
  }

  return myStr.join(" ");
}
console.log(title("việt nam vô địch"));

console.log(title("manchester united nhuộm đỏ trời âu"));

// spinalCase

function spinalCase(str) {
  let title = str.split(/[\s_-]/);
  title = title.map(function (title) {
    return title.replace(/[A-Z]/g, function (match, offset) {
      let lower = match.toLowerCase();
      return offset > 0 ? "-" + lower : lower;
    });
  });
  return title.join("-");
}

console.log(spinalCase("HELLO world"));

// Đối xứng

function isPalindrome(str) {
  let arr = str.split("");

  let firstCharacter = arr[0];
  let lastCharactor = arr[arr.length - 1];

  if (firstCharacter === lastCharactor) {
  }
}

console.log(isPalindrome("Race car"));

// Loại bỏ các giá trị sai

var arr = [
  0,
  1,
  2,
  "MU",
  "Vô Địch",
  false,
  true,
  null,
  3,
  4,
  undefined,
  5,
  "Trong lòng người hâm mộ",
  "",
];
arr = arr.filter(Boolean);

console.log(arr);

// Lọc phần tử

function findLongestWord(array) {
  let longestWord = "";

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

var word = findLongestWord([
  "Manchester",
  "United",
  "Vô",
  "Địch",
  "Trong",
  "Lòng",
  "Người",
  "Hâm",
  "Mộ",
]);
console.log(word);

// So sánh mảng
