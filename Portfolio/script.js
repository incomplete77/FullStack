const roleSpan = document.querySelector('.role');

const rolesArray = ["Frontend Desginer", "Frontend Developer", "Programmer"]

const writtingSpeed = 300;
const ErasingSpeed = 100;
const newWordDelay = 2000;

const currentRoleIndex = 0;
const currentCharIndex = 0;


function type() {
    if (currentCharIndex < rolesArray[currentRoleIndex].length) {
        roleSpan.textContent += rolesArray[currentRoleIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, writtingSpeed)
    }
    else {
        //erase
    }
}

type();
