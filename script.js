const DOMselectors = {
  display: document.querySelector(".display"),
  form: document.getElementById("form"),
  clear: document.getElementById("btnClear"),
};

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let album = {};
  album.title = document.getElementById("title").value;
  album.artist = document.getElementById("artist").value;
  console.log(album);

  DOMselectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div id="card" class ="display-card">
  <h2 class="display-title">${album.title}</h2>
  <h3 class="display-artist">${album.artist}</h3>

  <button id="clear" class="remove btn">remove</button>
  </div>`
  );

  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";

  const remove = document.querySelectorAll("button");

  remove.forEach((remove) => {
    remove.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
});

//get values
//create user object from values
//create HTML string and inputadjacent HTML
//queryALL remove buttons
//forEach button ad event listener
//clear fields
