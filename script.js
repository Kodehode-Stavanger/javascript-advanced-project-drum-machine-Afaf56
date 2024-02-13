const drumMap = {
  clap: "c",
  hihat: "h",
  kick: "k",
  openhat: "o",
  ride: "r",
  snare: "s",
  tink: "t",
  tom: "m",
};

const contM = document.createElement("div");
contM.style.display = "Grid";
// contM.style.border = "2px solid black";
contM.style.gridTemplateColumns = "repeat(4,auto)";
contM.style.minWidth = "100wv";
contM.style.height = "500px";
contM.style.margin = "140px 5px";
contM.style.backgroundColor = "#6e9B8B";

contM.style.alignSelf = "center";
// contM.style.gap = "5px 5px";

for (let drum in drumMap) {
  const wrapDiv = document.createElement("div");
  // wrapDiv.style.border = "2px solid black";
  wrapDiv.display = "flex";
  wrapDiv.style.flexDirection = "column";
  wrapDiv.style.alignSelf = "center";
  wrapDiv.style.justifySelf = "center";
  // wrapDiv.style.boxShadow = "3px 4px 12px";

  const imgE = document.createElement("img");
  imgE.src = `./pics/${drum}.jpg`;
  imgE.style.height = "100px";
  imgE.style.width = "150px";
  imgE.style.cursor = "pointer"; //to change to form of cursor when it comes on the image
  imgE.style.borderRadius = "40px";
  imgE.style.padding = "30px 30px";
  imgE.style.boxShadow = "9px 9px 12px";
  wrapDiv.append(imgE);

  const pE = document.createElement("p");
  pE.textContent = drumMap[drum].toUpperCase();
  pE.style.padding = "10px 10px";
  pE.style.border = "2px solid black";
  pE.style.width = "30px";
  pE.style.borderRadius = "10px";
  pE.style.textAlign = "center";

  pE.style.margin = "auto";

  wrapDiv.append(pE);

  //eventListener on images
  imgE.addEventListener("click", (e) => {
    const sound = new Audio(`./sounds/${drum}.wav`);
    sound.play();
  });

  // eventListener on the first letter of the instrument's name
  window.addEventListener("keydown", (e) => {
    if (e.key === `${drumMap[drum]}`) {
      console.log("t");
      const sound = new Audio(`./sounds/${drum}.wav`);
      sound.play();
    }
  });

  contM.append(wrapDiv);
  document.body.append(contM);
}
