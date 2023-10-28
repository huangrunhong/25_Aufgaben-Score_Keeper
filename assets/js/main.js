const scoreHome = document.body.querySelector("#scoreHome");
const scoreAway = document.body.querySelector("#scoreAway");

let scoreHomeInitial = 0;
let scoreAwayInitial = 0;

const scoreAddHome = (x) => {
  scoreHome.textContent = scoreHomeInitial += x;
};

const scoreAddAway = (x) => {
  scoreAway.textContent = scoreAwayInitial += x;
};

const scoreReset = () => {
  scoreHome.textContent = 0;
  scoreAway.textContent = 0;
};
