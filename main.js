const titleinput = document.querySelector("#title")
const descriptiontextarea = document.querySelector("#description")
const addButton = document.querySelector('button')
const cards = document.querySelector('.cards')

const cardsArr = []
function drawCard() {
    cards.innerHTML = ''

    for (let i = 0 ; i < cardsArr.length; i++){
        const card=cardsArr[i]
       cards.appendChild(createCard(i, card))
    }
}


function createCard(i, cardObj) {
    const now = new Date()

    const card = document.createElement('article')
    card.className = 'card'


    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const small = document.createElement('small')

    h2.innerHTML =cardObj.title
    p.innerHTML = cardObj.description
    small.innerHTML = now.toLocaleDateString() + " " + now.toLocaleDateString()

    const icons = document.createElement('div')
    const closeicon = document.createElement('i')
    const solveicon = document.createElement('i')


    closeicon.className = 'card__close'
    solveicon.className = 'card__solve'


    closeicon.innerHTML = '✘'
    solveicon.innerHTML = '✓'

    icons.appendChild(closeicon)
    icons.appendChild(solveicon)

    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(small)
    card.appendChild(icons)

    return card



}

addButton.addEventListener('click', () => {
    const title = titleinput.value
    const description = descriptiontextarea.value

    if (title.length === 0 || description.length === 0) return;

    cardsArr.unshift({
        title,
        description,
        solved: false
    })

    titleinput.value = ''
    descriptiontextarea.value = ''

    drawCard()
})