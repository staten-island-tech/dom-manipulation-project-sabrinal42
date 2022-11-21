const DOMSelectors = {
  enter: document.getElementById("enter"),
  clear: document.getElementById("clear"),
  name: document.getElementById("name"),
  div: document.getElementById("container"),
  results: document.getElementById("results"),
};

const eraList = [
  "<P>${user.name}, you are in your midnights era</P>",
  "<P>${user.name}, you are in your lover era</P>",
  "<P>${user.name}, you are in your fearless era</P>",
  "<P>${user.name}, you are in your reputation era</P>",
];

enter.addEventListener("click", displayera);
var count = 0;
function displayera() {
  results.innerHTML = eraList[count];
  count++;
  if (count == eraList.length) {
    count = 0;
  }
}

clear.addEventListener("click", clearboth);
function clearboth() {
  DOMSelectors.name.value = "";
}

trash.addEventListener("trash", trashy);
function trashy() {
  DOMSelectors.results.value = "";
}
