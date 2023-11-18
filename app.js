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
const caret = document.querySelector('.bio i');
let count=0;
bio.addEventListener('click', () => {
    bio.classList.toggle('show');
    if (count % 2 === 0) {
        caret.classList.remove('fa-caret-down');
        caret.classList.add('fa-caret-up');
        visible.classList.remove('bio-back');
        visible.classList.add('bio-show');
    } else {
        caret.classList.remove('fa-caret-up');
        caret.classList.add('fa-caret-down');
        visible.classList.remove('bio-show');
        visible.classList.add('bio-back');
    }
    count++;
});

const body = document.querySelector('body');
const edit = document.querySelector('.bio-edit')
const pen = document.querySelector('.fa-pen');
const myBio = document.querySelector('.my-bio');

const bioTextarea = document.getElementById('bioTextarea');
const editButton = document.querySelector('.edit-button');
const cancelBtn = document.querySelector('.bio-edit-icon');

pen.addEventListener('click' ,() => {
    edit.style.display = "flex";
    bioTextarea.textContent = myBio.textContent;
    body.classList.add("blur");
    bioTextarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
      });
      editButton.addEventListener('click', function() {
        myBio.innerText = bioTextarea.value;
      }); 
      cancelBtn.addEventListener('click', function(){
        edit.style.display = "none";
        body.classList.remove("blur");
      });
});



