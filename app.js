
const select = document.getElementById('select')
const scoreEl = document.getElementById('score')
const word = document.getElementById('word')
const timeEl = document.getElementById('time')
const wordInput = document.getElementById('input')
const overflow = document.querySelector('.overflow')
const modal = document.querySelector('.modal')
const lastScore = document.getElementById('lastscore')

wordInput.focus()


const words = [
    'kompuyuter',
    'document',
    'macbook',
    'overflow',
    'satkak',
    'mexanizator',
    'traktor',
    'backdrop',
    'getelement',
    'queryselector',
]

//o`zgaruvchilar
let score = 0
let randomWord
let time = 10

//o`zgarmadas
let difficulty
//set diifficulty
select.value = localStorage.getItem('difficulty') == null ? 'medium' : localStorage.getItem('difficulty')

//function lar


function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function showRandomWord() {
    randomWord = getRandomWord()
    word.textContent = randomWord
}

showRandomWord()

wordInput.addEventListener('input', function (e) {
    const inputValu = (e.target.value);

    if (inputValu == randomWord) {
        showRandomWord()
        e.target.value = ''
        score++

        scoreEl.textContent = score

        if (difficulty == 'eyse') {
            time += 5
        }
        if (select.value == 'medium') {
            time += 3
        }
        else if (select.value == 'hard') {
            time += 2
        }



    }
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        modal.classList.add('hidden')
        overflow.classList.add('hidden')
        score = 0
        showRandomWord()
        location.reload()
    }
})

function key() {
    if (e.key == 'w') {
        console.log(2);
    }

}
const setTimeGame = setInterval(changeTime, 1000)


function changeTime() {
    time--
    timeEl.textContent = time
    if (time <= 0) {
        clearInterval(setTimeGame)
        modal.classList.remove('hidden')
        overflow.classList.remove('hidden')
        lastScore.textContent = score
    }
   
}

select.addEventListener('click', () => {
    difficulty = select.value
    localStorage.setItem('difficulty', difficulty)

})





