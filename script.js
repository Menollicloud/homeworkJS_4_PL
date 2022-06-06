pointRec = 0;
correctAnsw = 0;
wrongAnsw = 0;

firstQuest = prompt("Сколько будет 2+2?");

if(firstQuest == 4) {
    alert("Верно!");
    pointRec += 10;
    correctAnsw++;
} else if(firstQuest > 4) {
    alert("Больше, чем надо!");
    pointRec += 0;
    wrongAnsw++;
} else if(firstQuest < 4) {
    alert("Меньше, чем надо!");
    pointRec += 0;
    wrongAnsw++;
} else if(isNaN(firstQuest)) {
    alert("Вы ввели не число!");
    pointRec += 0;
    wrongAnsw++;
} else if(!firstQuest) {
    alert("Вы не ввели ответ!");
    pointRec += 0;
    wrongAnsw++;    
}

secondQuest = prompt("Солнце встает на востоке?");

if(secondQuest == "Да" || secondQuest == "да" || secondQuest == "Yes" || secondQuest == "lf") {
    alert("Верно!");
    pointRec += 10;
    correctAnsw++;
} else if(!secondQuest) {
    alert("Вы не ввели ответ!");
    pointRec += 0;
    wrongAnsw++;
}else if(!isNaN(secondQuest)) {
    alert("Вы ввели число!");
    pointRec += 0;
    wrongAnsw++;
} else {
    alert("Не верно!");
    pointRec += 0;
    wrongAnsw++;
}

thirdQuest = prompt("Сколько будет 5 / 0?");

if(!thirdQuest || thirdQuest == "не делится") {
    alert("Верно!");
    pointRec += 10;
    correctAnsw++;
} else {
    alert("Не верно!");
    pointRec += 0;
    wrongAnsw++;
}

fourthQuest = prompt("Какого цвета небо?");

if(fourthQuest == "Голубого" || fourthQuest == "голубого" || fourthQuest == "Синего" || fourthQuest == "синего") {
    alert("Верно!");
    pointRec += 10;
    correctAnsw++;
} else if(!fourthQuest) {
    alert("Вы не ввели ответ!");
    pointRec += 0;
    wrongAnsw++;
} else if(!isNaN(fourthQuest)) {
    alert("Вы ввели число!");
    pointRec += 0;
    wrongAnsw++;
} else {
    alert("Не верно!");
    pointRec += 0;
    wrongAnsw++;
}

fifthQuest = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.");

if(fifthQuest == 42) {
    alert("Верно!");
    pointRec += 10;
    correctAnsw++;
} else {
    alert("Не верно!");
    pointRec += 0;
    wrongAnsw++;
}

alert(`Вы набрали ${pointRec} балов! Правильных ответов - ${correctAnsw}, не праивльных - ${wrongAnsw}`);

document.write(`<p>Поздравляем!<br>
<p>Вы набрали ${pointRec} балов! Правильных ответов - <b>${correctAnsw}</b>, не правильных - <b>${wrongAnsw}</b></p>`);