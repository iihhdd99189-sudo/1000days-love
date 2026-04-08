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
  text.innerText = "소개팅 약속장소인 혜화역... 어 저사람 내 이상형인데... 말 걸어볼까..?";
  clearChoices();

  addButton("말을 건다", () => {
    text.innerText = "현도는 약간 이상하지만 좋은 사람이다... 앞으로도 더 만나보고싶어..!";
    clearChoices();
    addButton("다음으로", scene2);
  });

  addButton("그냥 지나친다", gameOver("아무 일도 없었다... 게임 오버 !"));
}

// 2번
function scene2() {
  img.src = "scene2.png";
  text.innerText = "현도와 같이 영화관에 왔다. 갑자기 안경을 썼다 벗었다 하며 뭐가 어울리냐고 물어보는데..?";
  clearChoices();

  addButton("안경 벗은 게 더 좋아", gameOver("그 날 이후로 안경 쓴 현도를 다시는 보지 못했다... 게임 오버 !"));

  addButton("안경 쓴 게 더 좋아", () => {
    text.innerText = "현도는 수줍어하며 안경을 쓴다... 귀여운 사람이잖아..?";
    clearChoices();
    addButton("다음으로", scene3);
  });
}

// 3번
function scene3() {
  img.src = "scene3.png";
  text.innerText = "현도와 만나 즐거운 하루를 보냈다. 곧 고백 받을 수도 있을 것 같은데... 무슨 말이라도 할까..?";
  clearChoices();

  addButton("나는 나랑 비슷한 사람이 좋아!", () => {
    text.innerText = "현도가 반가운 기색으로 대화를 이어나간다. 이 날 저녁 우리는 사귀기로 했다..";
    clearChoices();
    addButton("다음으로", scene4);
  });

  addButton("나는 나랑 다른 점이 많은 사람이 좋아!", () => {
    text.innerText = "갑자기 현도의 표정이 어두워졌다 ... 이후 며칠이 더 지나서야 우리는 사귀게 되었다..";
    clearChoices();
    addButton("다음으로", scene4);
  });
}

// 4번
function scene4() {
  img.src = "scene4.png";
  text.innerText = "잘 사귀던 도중 현도가 물에 빠지는 사고가 발생했다..! 옆에는 내 소중한 팽도리도 있는데... 어쩌지??";
  clearChoices();

  addButton("현도를 구한다", () => {
    text.innerText = "현도를 구하려 손을 뻗자 팽도리가 도와줘서 무사히 구출할 수 있었다..!";
    clearChoices();
    addButton("다음으로", scene5);
  });

  addButton("팽도리를 구한다", gameOver("물타입인 팽도리는 스스로 나올 수 있었다.. 스스로 나오지 못한 현도는... 게임 오버 !"));
}

// 5번
function scene5() {
  img.src = "scene5.png";
  text.innerText = "구해줘서 고맙다며 현도가 선물을 준비했다..! 어쩌지?";
  clearChoices();

  addButton("열어본다.", () => {
    text.innerText = "무슨 선물이 들었을까...";
    clearChoices();
    addButton("다음으로", scene6);
  });

  addButton("수상해... 선물을 버린다", gameOver("현도는 실망하며 떠나가버렸다... 게임 오버 !"));
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
