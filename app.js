/*********************** date & time **********************/
const time = document.querySelector(".time");
const date = document.querySelector(".date");

time.textContent = "";
date.textContent = "";

function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAM = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
}

function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  time.textContent = formatTime(now);
  date.textContent = formatDate(now);
}, 200);

/**************************BIO******************************/
const bio = document.querySelector(".bio");
const visible = document.querySelector(".visible");
const caret = document.querySelector(".bio i");
let count = 0;
bio.addEventListener("click", () => {
  bio.classList.toggle("show");
  if (count % 2 === 0) {
    caret.classList.remove("fa-caret-down");
    caret.classList.add("fa-caret-up");
    visible.classList.remove("bio-back");
    visible.classList.add("bio-show");
  } else {
    caret.classList.remove("fa-caret-up");
    caret.classList.add("fa-caret-down");
    visible.classList.remove("bio-show");
    visible.classList.add("bio-back");
  }
  count++;
});

const body = document.querySelector("body");
const edit = document.querySelector(".bio-edit");
const pen = document.querySelector(".fa-pen");
const myBio = document.querySelector(".my-bio");

const bioTextarea = document.getElementById("bioTextarea");
const editButton = document.querySelector(".edit-button");
const cancelBtn = document.querySelector(".bio-edit-icon");
let flag = 0;
let flag1 = 0;

pen.addEventListener("click", (event) => {
  event.stopPropagation(); // Stop the click event from reaching the document

  edit.style.display = "flex";
  bioTextarea.value = myBio.innerText;
  body.classList.add("blur");

  const charLimitMessage = document.querySelector(".fix-letter");
  const maxChars = 150; // Change this to your desired character limit

  bioTextarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";

    const currentChars = this.value.length;
    charLimitMessage.textContent = `Characters: ${currentChars}/${maxChars}`;

    
    if (currentChars >= maxChars) {
      this.value = this.value.substring(0, maxChars);
      charLimitMessage.textContent = "Word Limit Exceeded";
    }
  });

  editButton.addEventListener("click", function () {
    myBio.innerText = bioTextarea.value;
    closeEdit();
    flag1 = 1;
  });
  cancelBtn.addEventListener("click", function () {
    closeEdit();
  });

  document.addEventListener("click", handleDocumentClick);
});

function closeEdit() {
  flag = 0;
  edit.style.display = "none";
  body.classList.remove("blur");
  flag = 1;
  document.removeEventListener("click", handleDocumentClick);
}

function handleDocumentClick(event) {
  const isClickedInsideEdit = edit.contains(event.target);

  if (!isClickedInsideEdit) {
    closeEdit();
  }
}

/***********************Bio end***************************/


/* NOTIFICATION START  */
const button = document.querySelector('.button');
const box = document.querySelector('.main-box');
const opened = document.querySelector('.main1');

let count1 = 0;

button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the click event from reaching the document
    if (count1 % 2 === 0) {
        opened.classList.add('box1');
        opened.classList.remove('box2');
        opened.classList.add('open');
        box.classList.add("box1");
        box.classList.remove("box2");
    } else {
        opened.classList.add('box2');
        opened.classList.remove('box1');
        opened.classList.remove('open');
        box.classList.add("box2");
        box.classList.remove("box1");
    }
    count1++;
});


document.addEventListener('click', (event) => {
    const isClickedInsideButton = button.contains(event.target);
    const isClickedInsideBox = box.contains(event.target);
    
    if (!isClickedInsideButton && !isClickedInsideBox) {
        opened.classList.remove('open');
        box.classList.add("box2");
        box.classList.remove("box1");
        count1++;
    }
});

/* NOTIFICATION END */