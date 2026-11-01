const homeEl = document.getElementById("home-score");
const guestEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function addOneHome() {
  homeScore++;
  homeEl.textContent = homeScore;
}

function addTwoHome() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function addThreeHome() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

function addOneGuest() {
  guestScore++;
  guestEl.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestEl.textContent = guestScore;
}

function resetHome() {
  homeScore = 0;
  homeEl.textContent = homeScore;
}

function resetGuest() {
  guestScore = 0;
  guestEl.textContent = guestScore;
}
