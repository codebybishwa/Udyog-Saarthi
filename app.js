/*********************** date & time **********************/ 
const time = document.querySelector('.time');
setInterval(() => {
    time.innerText = new Date();
},1000);