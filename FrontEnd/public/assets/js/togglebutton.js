function show_hide1() {
  document.getElementById("button-631").style.fontWeight = "900";
  document.getElementById("button-631").style.color = "#000000";
  document.getElementById("button-631").style.backgroundColor = "white";
  document.getElementById("button-631").style.opacity = "1";

  document.getElementById("button-632").style.fontWeight = "bold";
  document.getElementById("button-632").style.color = "#000000";
  document.getElementById("button-632").style.backgroundColor = "#ee9d34";
  document.getElementById("button-632").style.opacity = "0.2";

  document.getElementById("toggle1").style.display = "inline";
  document.getElementById("toggle2").style.display = "none";
}
function show_hide2() {
  console.log("work");
  document.getElementById("button-632").style.fontWeight = "900";
  document.getElementById("button-632").style.color = "#000000";
  document.getElementById("button-632").style.backgroundColor = "white";
  document.getElementById("button-632").style.opacity = "1";

  document.getElementById("button-631").style.fontWeight = "bold";
  document.getElementById("button-631").style.color = "#000000";
  document.getElementById("button-631").style.backgroundColor = "#ee9d34";
  document.getElementById("button-631").style.opacity = "0.2";

  document.getElementById("toggle2").style.display = "inline";
  document.getElementById("toggle1").style.display = "none";
}
