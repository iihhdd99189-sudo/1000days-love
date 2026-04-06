const scenes = {
  start: {
    text: "우리 1000일 축하해 ❤️",
    image: "start.png",
    choices: [
      { text: "처음 만났던 날 기억해?", next: "scene1" },
      { text: "앞으로도 같이 있을래?", next: "scene2" }
    ]
  },

  scene1: {
    text: "그날 진짜 떨렸었지 😊",
    image: "scene1.png",
    choices: [
      { text: "나도였어", next: "ending" }
    ]
  },

  scene2: {
    text: "당연하지 ❤️",
    image: "scene2.png",
    choices: [
      { text: "약속이야", next: "ending" }
    ]
  },

  ending: {
    text: "앞으로도 잘 부탁해 ❤️",
    image: "ending.png",
    choices: []
  }
};

function loadScene(sceneKey) {
  const scene = scenes[sceneKey];

  document.getElementById("story-text").innerText = scene.text;
  document.getElementById("scene-image").src = scene.image;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => loadScene(choice.next);
    choicesDiv.appendChild(btn);
  });
  if (sceneKey === "ending") {
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "처음으로 돌아가기 💖";
  resetBtn.onclick = () => loadScene("start");
  choicesDiv.appendChild(resetBtn);
  }
}

loadScene("start");
