/*********************** date & time **********************/ 
const time = document.querySelector('.time');
const date = document.querySelector('.date');

time.textContent = "";
date.textContent = "";

function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAM = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2,"0")} ${isAM ? "AM" : "PM"}`;
}

function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();

    time.textContent = formatTime(now);
    date.textContent = formatDate(now);
}, 200);


/**************************BIO******************************/ 
const bio = document.querySelector('.bio');
const visible = document.querySelector('.visible');
let count=0;
bio.addEventListener('click', () => {
    bio.classList.toggle('show');
    if (count % 2 === 0) {
        visible.classList.remove('bio-back');
        visible.classList.add('bio-show');
    } else {
        visible.classList.remove('bio-show');
        visible.classList.add('bio-back');
    }
    count++;
});

const edit = document.querySelector('.bio-edit')
const pen = document.querySelector('.fa-pen');
pen.addEventListener('click' ,() => {
    edit.style.display = "block";
});

const textarea = document.querySelector('#textarea');
textarea.addEventListener('keyup' , (e) => {
    textContent.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});