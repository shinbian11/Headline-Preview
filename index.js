let inputLengthEl = document.querySelector("#inputLength"); // 원하는 길이
let inputTextEl = document.querySelector("#inputText"); // 원하는 제목
let submitBtnEl = document.querySelector('button[type="submit"]'); // 제출 버튼
let answerTextEl = document.querySelector("#answerText"); // 미리보기 창

// 입력받은 길이가 숫자인지, 100 ~ 400 사이 범위인지 check
function LengthExceptionCheck() {
  let minWidth = 100;
  let maxWidth = 400;
  let width = parseInt(inputLengthEl.value); // 입력받은 길이를 숫자로 변환.. 숫자가 아니라면 NaN
  console.log(Number.isInteger(width), typeof width, width);
  if (Number.isInteger(width) === false) {
    alert("숫자를 입력하세요");
    return false; // 숫자가 아니면 false
  }
  if (width < minWidth || width > maxWidth) {
    alert("100 이상 400 이하의 길이를 입력하세요");
    return false; // 100 ~ 400 사이 범위가 아니면 false
  }

  return true;
}

submitBtnEl.addEventListener("click", function (event) {
  event.preventDefault(); // 클릭 시 새로고침되는 기본동작을 방지

  if (LengthExceptionCheck()) {
    answerTextEl.style.width = parseInt(inputLengthEl.value) + "px";
    answerTextEl.textContent = inputTextEl.value;
    inputLengthEl.value = "";
    inputTextEl.value = "";
  }
});
