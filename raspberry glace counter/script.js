const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counter = document.getElementById('counter');
let txt = document.getElementById('txt');

txt.textContent = "";
let count = 0;

increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
    txt.textContent = "It's just a warm-up :)";
}
