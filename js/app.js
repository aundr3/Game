
// title screen
// sends the title screen to the rules screen
document.getElementById("begin").addEventListener("click", () => {
    document.getElementById("section1").style.display = "none";
    let sectionTwo = document.getElementById("section2");
    sectionTwo.classList.remove("d-none");
});

// rules screen
// send the rules screen to level one
document.getElementById("section2").addEventListener("click", () => {
    document.getElementById("section2").style.display = "none";
    let sectionThree = document.getElementById("section3");
    sectionThree.classList.remove("d-none");
});

// level one
// the sounds for the different buttons
let levelOne_startingSound = new Audio();
levelOne_startingSound.src = "media/levelOne-startingSound.mp3"

let levelOne_sound1 = new Audio();
levelOne_sound1.src = "media/levelOne-buttonSound1.mp3"

let levelOne_sound2 = new Audio();
levelOne_sound2.src = "media/levelOne-buttonSound2.mp3"

let levelOne_sound3 = new Audio();
levelOne_sound3.src = "media/levelOne-buttonSound3.mp3"

// the answer to level one
levelOne_answer = ['button2', 'button1', 'button3'];
levelOne_array = [];

// when a button is clicked it is added to the empty array
document.getElementById("button1").addEventListener("click", (e) => {
    levelOne_array.push(e.target.id);
    console.log(levelOne_array);
    check_level_one_answer();
})

document.getElementById("button2").addEventListener("click", (e) => {
    levelOne_array.push(e.target.id);
    console.log(levelOne_array);
    check_level_one_answer();

})

document.getElementById("button3").addEventListener("click", (e) => {
    levelOne_array.push(e.target.id);
    console.log(levelOne_array);
    check_level_one_answer();
})

// checks to see if the two arrays match
function check_level_one_answer() {
    if (levelOne_array.length > 3) {
        levelOne_array.shift()
    } else if (levelOne_array.length === 3) {
        let correct = true;
        for (let i = 0; i < levelOne_answer.length; i++) {
            if (levelOne_answer[i] === levelOne_array[i]) {
                console.log("correct")
            } else {
                correct = false;
            }
        }
        if (correct) {
            correctAnswer_One();

        } else {
            levelOne_array.shift();
        }
    }
}

// shows the user and the answer correct and displays the next label for them to move on to the next section 
function correctAnswer_One() {
    let correctOne = document.getElementById("correctOne");
    let nextOne = document.getElementById("nextOne");
    correctOne.classList.remove("d-none");
    nextOne.classList.remove("d-none");
};

// hides the current screen and shows the next section
document.getElementById("nextOne").addEventListener("click", () => {
    document.getElementById("section3").style.display = "none";
    let sectionFour = document.getElementById("section4");
    sectionFour.classList.remove("d-none");
});

// level two
// the sounds for the different buttons
let levelTwo_startingSound = new Audio();
levelTwo_startingSound.src = "media/levelTwo-startingSound.mp3"

let levelTwo_sound1 = new Audio();
levelTwo_sound1.src = "media/levelTwo-buttonSound1.mp3"

let levelTwo_sound2 = new Audio();
levelTwo_sound2.src = "media/levelTwo-buttonSound2.mp3"

let levelTwo_sound3 = new Audio();
levelTwo_sound3.src = "media/levelTwo-buttonSound3.mp3"

// the answer to level two
levelTwo_answer = ['button6', 'button4', 'button5'];
levelTwo_array = [];

// when a button is clicked it is added to the empty array
document.getElementById("button4").addEventListener("click", (e) => {
    levelTwo_array.push(e.target.id);
    console.log(levelTwo_array);
    check_level_two_answer();
})

document.getElementById("button5").addEventListener("click", (e) => {
    levelTwo_array.push(e.target.id);
    console.log(levelTwo_array);
    check_level_two_answer();

})

document.getElementById("button6").addEventListener("click", (e) => {
    levelTwo_array.push(e.target.id);
    console.log(levelTwo_array);
    check_level_two_answer();
})

// checks to see if the two arrays match
function check_level_two_answer() {
    if (levelTwo_array.length > 3) {
        levelTwo_array.shift()
    } else if (levelTwo_array.length === 3) {
        console.log(levelTwo_array.length)
        let correct = true;
        for (let i = 0; i < levelTwo_answer.length; i++) {
            if (levelTwo_answer[i] === levelTwo_array[i]) {
                console.log("correct")
            } else {
                correct = false;
            }
        }
        if (correct) {
            correctAnswer_Two();
        } else {
            levelTwo_array.shift();
        }
    }
}

// shows the user and the answer correct and displays the next label for them to move on to the next section 
function correctAnswer_Two() {
    let correctTwo = document.getElementById("correctTwo");
    let nextTwo = document.getElementById("nextTwo");
    correctTwo.classList.remove("d-none");
    nextTwo.classList.remove("d-none");
};

// hides the current screen and shows the next section
document.getElementById("nextTwo").addEventListener("click", () => {
    document.getElementById("section4").style.display = "none";
    let sectionFive = document.getElementById("section5");
    sectionFive.classList.remove("d-none");
});

// level three
// the sounds for the different buttons
let levelThree_startingSound = new Audio();
levelThree_startingSound.src = "media/levelThree-startingSound.mp3"

let levelThree_sound1 = new Audio();
levelThree_sound1.src = "media/levelThree-buttonSound1.mp3"

let levelThree_sound2 = new Audio();
levelThree_sound2.src = "media/levelThree-buttonSound2.mp3"

let levelThree_sound3 = new Audio();
levelThree_sound3.src = "media/levelThree-buttonSound3.mp3"

// the answer the level 3
levelThree_answer = ['button9', 'button8', 'button7'];
levelThree_array = [];

// when a button is clicked it is added to the empty array
document.getElementById("button7").addEventListener("click", (e) => {
    levelThree_array.push(e.target.id);
    console.log(levelThree_array);
    check_level_three_answer();
})

document.getElementById("button8").addEventListener("click", (e) => {
    levelThree_array.push(e.target.id);
    console.log(levelThree_array);
    check_level_three_answer();

})

document.getElementById("button9").addEventListener("click", (e) => {
    levelThree_array.push(e.target.id);
    console.log(levelThree_array);
    check_level_three_answer();
})

// checks to see if the two arrays match
function check_level_three_answer() {
    if (levelThree_array.length > 3) {
        levelThree_array.shift()
    } else if (levelThree_array.length === 3) {
        console.log(levelThree_array.length)
        let correct = true;
        for (let i = 0; i < levelThree_answer.length; i++) {
            if (levelThree_answer[i] === levelThree_array[i]) {
                console.log("correct")
            } else {
                correct = false;
            }
        }
        if (correct) {
            correctAnswer_Three();
        } else {
            levelThree_array.shift();
        }
    }
}

// shows the user and the answer correct and displays the next label for them to move on to the next section 
function correctAnswer_Three() {
    let correctThree = document.getElementById("correctThree");
    let nextThree = document.getElementById("nextThree");
    correctThree.classList.remove("d-none");
    nextThree.classList.remove("d-none");
};

// hides the current screen and shows the next section
document.getElementById("nextThree").addEventListener("click", () => {
    document.getElementById("section5").style.display = "none";
    let sectionSix = document.getElementById("section6");
    sectionSix.classList.remove("d-none");
});

// level four
// the sounds for the different buttons
let levelFour_startingSound = new Audio();
levelFour_startingSound.src = "media/levelFour-startingSound.mp3"

let levelFour_sound1 = new Audio();
levelFour_sound1.src = "media/levelFour-buttonSound1.mp3"

let levelFour_sound2 = new Audio();
levelFour_sound2.src = "media/levelFour-buttonSound2.mp3"

let levelFour_sound3 = new Audio();
levelFour_sound3.src = "media/levelFour-buttonSound3.mp3"

// the answer to level four 
levelFour_answer = ['button11', 'button10', 'button12'];
levelFour_array = [];

// when a button is clicked it is added to the empty array
document.getElementById("button10").addEventListener("click", (e) => {
    levelFour_array.push(e.target.id);
    console.log(levelFour_array);
    check_level_four_answer();
})

document.getElementById("button11").addEventListener("click", (e) => {
    levelFour_array.push(e.target.id);
    console.log(levelFour_array);
    check_level_four_answer();
})

document.getElementById("button12").addEventListener("click", (e) => {
    levelFour_array.push(e.target.id);
    console.log(levelFour_array);
    check_level_four_answer();
})

// checks to see if the two arrays match
function check_level_four_answer() {
    if (levelFour_array.length > 3) {
        levelFour_array.shift()
    } else if (levelFour_array.length === 3) {
        console.log(levelFour_array.length)
        let correct = true;
        for (let i = 0; i < levelFour_answer.length; i++) {
            if (levelFour_answer[i] === levelFour_array[i]) {
                console.log("correct")
            } else {
                correct = false;
            }
        }
        if (correct) {
            correctAnswer_Four();
        } else {
            levelFour_array.shift();
        }
    }
}

// shows the user and the answer correct and displays the next label for them to move on to the next section 
function correctAnswer_Four() {
    let correctFour = document.getElementById("correctFour");
    let nextFour = document.getElementById("nextFour");
    correctFour.classList.remove("d-none");
    nextFour.classList.remove("d-none");
};

// hides the current screen and shows the next section
document.getElementById("nextFour").addEventListener("click", () => {
    document.getElementById("section6").style.display = "none";
    let sectionSeven = document.getElementById("section7");
    sectionSeven.classList.remove("d-none");
});

// level five
// the sounds for the different buttons
let levelFive_startingSound = new Audio();
levelFive_startingSound.src = "media/levelFive-startingSound.mp3"

let levelFive_sound1 = new Audio();
levelFive_sound1.src = "media/levelFive-buttonSound1.mp3"

let levelFive_sound2 = new Audio();
levelFive_sound2.src = "media/levelFive-buttonSound2.mp3"

let levelFive_sound3 = new Audio();
levelFive_sound3.src = "media/levelFive-buttonSound3.mp3"

let levelFive_sound4 = new Audio();
levelFive_sound4.src = "media/levelFive-buttonSound4.mp3"

// the answer to level five
levelFive_answer = ['button13', 'button14', 'button15', 'button14', 'button15', 'button14', 'button16'];
levelFive_array = [];

// when a button is clicked it is added to the empty array
document.getElementById("button13").addEventListener("click", (e) => {
    levelFive_array.push(e.target.id);
    console.log(levelFive_array);
    check_level_five_answer();
})

document.getElementById("button14").addEventListener("click", (e) => {
    levelFive_array.push(e.target.id);
    console.log(levelFive_array);
    check_level_five_answer();
})

document.getElementById("button15").addEventListener("click", (e) => {
    levelFive_array.push(e.target.id);
    console.log(levelFive_array);
    check_level_five_answer();
})

document.getElementById("button16").addEventListener("click", (e) => {
    levelFive_array.push(e.target.id);
    console.log(levelFive_array);
    check_level_five_answer();
})

// checks to see if the two arrays match
function check_level_five_answer() {
    if (levelFive_array.length > 7) {
        levelFive_array.shift()
    } else if (levelFive_array.length === 7) {
        console.log(levelFive_array.length)
        let correct = true;
        for (let i = 0; i < levelFive_answer.length; i++) {
            if (levelFive_answer[i] === levelFive_array[i]) {
                console.log("correct")
            } else {
                correct = false;
            }
        }
        if (correct) {
            correctAnswer_Five();
        } else {
            levelFive_array.shift();
        }
    }
}

// complete screen
// shows the user and the answer correct and displays the next label for them to move on to the next section 
function correctAnswer_Five() {
    let correctFive = document.getElementById("correctFive");
    let nextFive = document.getElementById("nextFive");
    correctFive.classList.remove("d-none");
    nextFive.classList.remove("d-none");
};

// hides the current screen and shows the next section
document.getElementById("nextFive").addEventListener("click", () => {
    document.getElementById("section7").style.display = "none";
    let sectionEight = document.getElementById("section8");
    sectionEight.classList.remove("d-none");
});
