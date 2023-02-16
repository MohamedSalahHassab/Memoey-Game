let info = document.querySelector(".main-info");
let theName = document.querySelector(".name-0");
let theAge = document.querySelector(".age-0");
let rotate = [...document.querySelectorAll(".rot")];
let empty = [];
let tries = document.querySelector(".tries");
let num = 0;
let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let start = document.querySelector("h3");
let winning = document.querySelector(".win-page");
let gameOver = document.querySelector(".gameover");
let res = document.querySelector(".res");
// check name valu
rotate.forEach((x) => x.classList.add("Now"));
start.onclick = function () {
  setTimeout(() => {
    rotate.forEach((x) => x.classList.remove("Now"));
  }, 3000);
  if (nameInput.value.trim() != "") {
    theName.innerHTML = `Hello ${nameInput.value}`;
  } else theName.innerHTML = "Hello Friend";
  if (ageInput.value != "") {
    theAge.innerHTML = `Age: ${ageInput.value}`;
  } else theAge.innerHTML = "No Age";
  info.remove();
  tries.innerHTML = `tries ${num}`;
};

// [3] spread all elements with order
rotate.forEach((e) => {
  let q = Math.floor(Math.random() * rotate.length);
  e.style.order = q;
});

rotate.forEach((r) => {
  r.addEventListener("click", function (s) {
    let ele = s.target.parentElement;
    ele.classList.add("Now");
    rotate.forEach((t) => t.classList.add("noneEvent"));
    setTimeout(() => {
      rotate.forEach((t) => t.classList.remove("noneEvent"));
    }, 600);
    if (empty.length < 2) {
      empty.push(ele);
    } else "";
    if (empty.length == 2) {
      let one = empty[0].getAttribute("data-info");
      let two = empty[1].getAttribute("data-info");
      if (one == two) {
        empty[0].classList.add("win");
        empty[1].classList.add("win");

        empty = [];
      } else {
        setTimeout(() => {
          num += 1;
          tries.innerHTML = ` tries: ${num}`;
          if (num == 12) {
            console.log("game is over");
            gameOver.style.display = "flex";
            gameOver.firstElementChild.style.trannslate = "50%";
          }

          empty[0].classList.remove("Now");
          empty[1].classList.remove("Now");

          empty = [];
        }, 600);
      }
    }
    let iu = rotate.every((s) => {
      return s.classList.contains("win");
    });

    if (iu) {
      console.log("yes");
      winning.style.display = "flex";
      res.style.display = "none";
      setTimeout(() => {
        document.querySelector(".win-page h3").style.color = "green";
        document.querySelector(".win-page h4").style.display = "flex";
        document.querySelector(".win-page h4").addEventListener("click", () => {
          window.location.reload();
        });
      }, 1000);
    } else console.log("No");
  });
});
res.addEventListener("click", () => {
  window.location.reload();
});
