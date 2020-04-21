window.addEventListener('load', init);
const levels = {
    easy: 11,
    medium: 8,
    hard: 5
    };

const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
seconds.innerHTML = currentLevel;

const words = [
'camel',
'laugh',
'happy',
'forgive',
'mercy',
'praise',
'worthy',
'thanks',
'shave',
'choosen'
];


function init() {
    showord(words);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);
    
}
function showord(words) {
    const randIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randIndex];
}
function countdown () {
    if (time>0) {
        time--;
    } else if (time===0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}
function checkStatus() {
    if (!isPlaying && time===0) {
        message.innerHTML = 'Game Over!!!';
        score = -0.5;
    }
}
function startMatch() {
    if (matchword()) {
        isPlaying = true;
        time = currentLevel + 1;
        showord(words);
        wordInput.value = '';
        score++;
    }
    scoreDisplay.innerHTML = score;
    if (score===-1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = Math.ceil(score);
    }
}
function matchword() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'correct!!!';
        return true;
    } else {
        message.innerHTML = ' ';
        return false;
    }
}









