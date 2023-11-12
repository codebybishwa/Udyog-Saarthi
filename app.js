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


/**************************ANY OTHER CODE******************************/ 