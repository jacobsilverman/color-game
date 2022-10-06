const main = document.getElementById("main");
const numberOfButtons = 5;
const maxNumber = 256*256*256;

let allPossibleNumbers = [];

for (let i=0;i<maxNumber;i++) {
    allPossibleNumbers.push(i);
}

const makeRandom = (max) => {
    return Math.floor(Math.random()*max);
}

const convertToHex = (val) => {
    return val.toString(16);
}

const makeRandomArray = () => {
    let temp = allPossibleNumbers;
    let result = [];

    for (let j=0; j<numberOfButtons; j++) {
        const index = makeRandom(temp.length);
        result.push(convertToHex(temp[index]));
        temp.splice(index, 1);
    }


    return result;
}

const initialization = (reset) => {
    const buttons = document.getElementById("button-container");

    if (reset) {
        var child = buttons.lastElementChild;
        while (child) {
            buttons.removeChild(child);
            child = buttons.lastElementChild;
        }
    }

    const arr = makeRandomArray();

    const boxColor = arr[makeRandom(numberOfButtons)];

    for (let k =0; k<numberOfButtons;k++) {
        buttons.appendChild(createButton(arr[k]));
    }

    main.style.backgroundColor = "#"+boxColor;
    main.value = boxColor;
};

const createButton = (val) => {
    const button = document.createElement("button");
    button.value = val;
    button.innerText = val; 
    button.addEventListener("click", () => checkAnswer(val), false);
    return button;
}

const checkAnswer = (val) => {
    const answer = document.getElementById("answer");

    if (main.value === val) {
        answer.innerText = "correct the color was: " + main.value
    } else {
        answer.innerText = "incorrect the color was: " + main.value
    }
    initialization(true);
}


initialization(false);