let yourVoteTo = document.querySelector(".d-1-1 span");
let position = document.querySelector(".d-1-2 span");
let description = document.querySelector(".d-1-4");
let notice = document.querySelector(".d-2");
let side = document.querySelector(".d-1-right");
let numbers = document.querySelector(".d-1-3");

let currentStage = 0;
let number = "";
let blankVote = false;
let votes = [];

function startStage() {
  let stage = stages[currentStage];

  let numberHtml = "";
  number = "";
  blankVote = false;

  for (let i = 0; i < stage.numbers; i++) {
    if (i === 0) {
      numberHtml += `<div class="number blink"></div>`;
    } else {
      numberHtml += `<div class="number"></div>`;
    }
  }

  yourVoteTo.style.display = "none";
  position.innerHTML = stage.title;
  description.innerHTML = "";
  notice.style.display = "none";
  side.innerHTML = "";
  numbers.innerHTML = numberHtml;
}

function updateInterface() {
  let stage = stages[currentStage];

  let candidate = stage.candidates.filter((item) => {
    if (item.number === number) {
      return true;
    } else {
      return false;
    }
  });
  if (candidate.length > 0) {
    candidate = candidate[0];
    yourVoteTo.style.display = "block";
    notice.style.display = "block";
    if (candidate.vice) {
      description.innerHTML = `Name: ${candidate.name}<br/>Party: ${candidate.party}<br/>Vice: ${candidate.vice}`;
    } else {
      description.innerHTML = `Name: ${candidate.name}<br/>Party: ${candidate.party}`;
    }

    let imagesHtml = "";
    for (let i in candidate.photos) {
      if (candidate.photos[i].small) {
        imagesHtml += `<div class="d-1-image small"><img src="images/${candidate.photos[i].url}" alt="" />${candidate.photos[i].caption}</div>`;
      } else {
        imagesHtml += `<div class="d-1-image"><img src="images/${candidate.photos[i].url}" alt="" />${candidate.photos[i].caption}</div>`;
      }
    }
    side.innerHTML = imagesHtml;
  } else {
    yourVoteTo.style.display = "block";
    notice.style.display = "block";
    description.innerHTML = `<div class="warning blink">NULL VOTE</div>`;
  }
}

function clicked(n) {
  let elNumber = document.querySelector(".number.blink");
  if (elNumber !== null) {
    elNumber.innerHTML = n;
    number = `${number}${n}`;

    elNumber.classList.remove("blink");
    if (elNumber.nextElementSibling !== null) {
      elNumber.nextElementSibling.classList.add("blink");
    } else {
      updateInterface();
    }
  }
}
function blank() {
  number = "";
  blankVote = true;
  yourVoteTo.style.display = "block";
  numbers.innerHTML = "";
  description.innerHTML = `<div class="warning blink">BLANK VOTE</div>`;
  side.innerHTML = "";
}
function clearVote() {
  startStage();
}
function confirm() {
  let stage = stages[currentStage];

  let confirmedVote = false;
  if (blankVote) {
    confirmedVote = true;
    votes.push({ stage: stages[currentStage].title, vote: "blank" });
  } else if (number.length === stage.numbers) {
    confirmedVote = true;
    votes.push({ stage: stages[currentStage].title, vote: number });
  }

  if (confirmedVote) {
    currentStage++;
    if (stages[currentStage] !== undefined) {
      startStage();
    } else {
      document.querySelector(".screen").innerHTML = `<div class="big--end blink">END</div>`;
      console.log(votes);
    }
  }
}

startStage();
