const img = document.getElementById("scene-image");
const text = document.getElementById("story-text");
const choices = document.getElementById("choices");
const audio = document.getElementById("voice");

function clearChoices() {
  choices.innerHTML = "";
}

function addButton(label, onClick) {
  const btn = document.createElement("button");
  btn.innerText = label;
  btn.onclick = onClick;
  choices.appendChild(btn);
}

// 0. 시작 화면
function startScreen() {
  img.style.display = "none";
  text.innerText = "두근두근 미연시 시작? ❤️";
  clearChoices();

  addButton("시작하기", scene1);
}

// 1번
function scene1() {
  img.src = "scene1.png";
  img.style.display = "block";
  text.innerText = "(1번 장면 텍스트)";
  clearChoices();

  addButton("말을 건다", () => {
    text.innerText = "(성공 텍스트)";
    clearChoices();
    addButton("다음으로", scene2);
  });

  addButton("그냥 지나친다", gameOver("아무 일도 없었다... 게임 오버 !"));
}

// 2번
function scene2() {
  img.src = "scene2.png";
  text.innerText = "(2번 장면 텍스트)";
  clearChoices();

  addButton("안경 벗은 게 더 좋아", gameOver("이런 솔직히 말하지 못했어... 게임 오버 !"));

  addButton("안경 쓴 게 더 좋아", () => {
    text.innerText = "(성공 텍스트)";
    clearChoices();
    addButton("다음으로", scene3);
  });
}

// 3번
function scene3() {
  img.src = "scene3.png";
  text.innerText = "(3번 장면 텍스트)";
  clearChoices();

  addButton("나는 나랑 비슷한 사람이 좋아!", () => {
    text.innerText = "(결과 텍스트)";
    clearChoices();
    addButton("다음으로", scene4);
  });

  addButton("나는 나랑 다른 점이 많은 사람이 좋아!", () => {
    text.innerText = "(결과 텍스트)";
    clearChoices();
    addButton("다음으로", scene4);
  });
}

// 4번
function scene4() {
  img.src = "scene4.png";
  text.innerText = "(4번 장면 텍스트)";
  clearChoices();

  addButton("남자를 구한다", () => {
    text.innerText = "(성공 텍스트)";
    clearChoices();
    addButton("다음으로", scene5);
  });

  addButton("팽도리를 구한다", gameOver("팽도리는 스스로 나올 수 있었다.. 스스로 나오지 못한 남자는... 게임 오버 !"));
}

// 5번
function scene5() {
  img.src = "scene5.png";
  text.innerText = "(5번 장면 텍스트)";
  clearChoices();

  addButton("열어본다.", () => {
    text.innerText = "(성공 텍스트)";
    clearChoices();
    addButton("다음으로", scene6);
  });

  addButton("선물을 버린다", gameOver("남자는 실망하며 떠나가버렸다... 게임 오버 !"));
}

// 6번 (엔딩)
function scene6() {
  img.src = "scene6.png";
  text.innerText = "이건... 내가 준비한 거야";
  clearChoices();

  audio.play();

  setTimeout(() => {
    text.innerText = "1000일 축하해 ❤️";
  }, 2000);

  addButton("처음으로", startScreen);
}

// 게임오버 공통 함수
function gameOver(message) {
  return () => {
    img.style.display = "none";
    text.innerText = message;
    clearChoices();
    addButton("처음으로 돌아가기", startScreen);
  };
}

// 시작
startScreen();