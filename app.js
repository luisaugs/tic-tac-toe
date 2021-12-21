
const container = document.querySelector('#container');
const boxes = Array.from(document.querySelectorAll('.box'));
const btn = document.querySelector('#restartBtn');
const userInfo = document.querySelector('#userInfo');
const title = document.querySelector('#title');

let currentPlayer = 'X'
let arrayResult = [null, null, null, null, null, null, null, null, null]

boxes.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        // console.log(e)
        cell.innerHTML = currentPlayer;
        const idCell = e.target.id;
        if (checkBoard(idCell, currentPlayer)) {
            winner();
            return;
        } else {
            if (arrayResult.includes(null)) {
                currentPlayer = currentPlayer == 'X' ? 'O' :'X';
                alertUser(`Player ${currentPlayer} turn!`)
            } else {
                tie()
                return;
            }
        }
    }, { once: true })
})

const checkBoard = (id, result) => {
    arrayResult[id] = result;
    // console.log(arrayResult)
    if ((arrayResult[0] == arrayResult[1] && arrayResult[1] == arrayResult[2]) && (arrayResult[0] && arrayResult[1] && arrayResult[2])){
        console.log('tateti 1');
        return true;
    }
    if ((arrayResult[3] == arrayResult[4] && arrayResult[4] == arrayResult[5]) && (arrayResult[3] && arrayResult[4] && arrayResult[5])){
        console.log('tateti 2');
        return true;
    }
    if ((arrayResult[6] == arrayResult[7] && arrayResult[7] == arrayResult[8]) && (arrayResult[6] && arrayResult[7] && arrayResult[8])){
        console.log('tateti 3');
        return true;
    }
    if ((arrayResult[0] == arrayResult[3] && arrayResult[3] == arrayResult[6]) && (arrayResult[0] && arrayResult[3] && arrayResult[6])){
        console.log('tateti 4');
        return true;
    }
    if ((arrayResult[1] == arrayResult[4] && arrayResult[4] == arrayResult[7]) && (arrayResult[1] && arrayResult[4] && arrayResult[7])){
        console.log('tateti 5');
        return true;
    }
    if ((arrayResult[2] == arrayResult[5] && arrayResult[5] == arrayResult[8]) && (arrayResult[2] && arrayResult[5] && arrayResult[8])){
        console.log('tateti 6');
        return true;
    }
    if ((arrayResult[0] == arrayResult[4] && arrayResult[4] == arrayResult[8]) && (arrayResult[0] && arrayResult[4] && arrayResult[8])){
        console.log('tateti 7');
        return true;
    }
    if ((arrayResult[2] == arrayResult[4] && arrayResult[4] == arrayResult[6]) && (arrayResult[2] && arrayResult[4] && arrayResult[6])){
        console.log('tateti 8');
        return true;
    }
}

btn.addEventListener('click', () => {
    location.reload()
})

const winner = () => {
    userInfo.classList.remove('hide');
    btn.classList.remove('hide');
    userInfo.innerText = `Player ${currentPlayer} won!🎉🎉`;
    container.classList.add('block');
    title.classList.add('win')
}

const tie = () => {
    userInfo.classList.remove('hide');
    userInfo.innerText = `Nobody wins 🤷‍♂️`;
    btn.classList.remove('hide');
}


const alertUser = (text) => {
    userInfo.innerText = text;
    userInfo.classList.remove('hide');
}

const init = (text) => {
    userInfo.innerText = text;
    userInfo.classList.remove('hide');
    setTimeout(() => {
        userInfo.classList.add('hide');
        userInfo.innerText = '';
    }, 1000);
}


// About me!
init('Thanks for use it!!! 😎');
console.log("Luis Augsburger - Web developer");
console.log("https://twitter.com/augsburger_luis");