console.log("hello");

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

var texbox = document.getElementById("textbox");
var content = "";

const btn = document.getElementById("start-btn");

recognition.continuous = true;

recognition.onstart = function () {
  console.log("voice on");
};

recognition.onspeechend = function () {
  console.log("end voice");
};

recognition.onerror = function (e) {
  console.log("there was an error \n", e);
  texbox.innerHTML = "error" + e.error;
};

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  content += transcript;

  texbox.innerHTML = content;
};

btn.addEventListener("click", (event) => {
  btn.innerHTML = "started";
  if (content.length) {
    content += " ";
  }
  recognition.start();
});
