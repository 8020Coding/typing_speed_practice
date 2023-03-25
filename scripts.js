const quots = [
  {
    id: 1,
    text: 'Чем умнее человек, тем легче он признает себя дураком',
  },
  {
    id: 2,
    text: 'Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага',
  },
  {
    id: 3,
    text: 'Лучше быть хорошим человеком, "ругающимся матом", чем тихой, воспитанной тварью». Фаина Раневская',
  },
]

const mainBox = document.querySelector('[data-main-wrapper]')
const displayRandomQuots = document.querySelector('[data-display-quotes]')
// const input = document.querySelector('[data-input]')

let inputValueArr = []
document.addEventListener('keydown', (event) => {
  const spanArr = displayRandomQuots.querySelectorAll('span')
  const inputValue = event.key
  inputValueArr.push(inputValue)

  // console.log(inputValueArr)

  spanArr.forEach((quoteSpan, index) => {
    let character = inputValueArr[index]
    if (inputValueArr[index] === 'Shift') {
      inputValueArr.shift()
    } else {
      if (character == null) {
        quoteSpan.classList.remove('correct')
        quoteSpan.classList.remove('incorrect')
      } else if (character === quoteSpan.textContent) {
        quoteSpan.classList.add('correct')
        quoteSpan.classList.remove('incorrect')
      } else if (event.key === 'Shift' && event.key === ',') {
        quoteSpan.classList.add('correct')
        quoteSpan.classList.remove('incorrect')
      } else if (event.key === ' ' && quoteSpan.textContent === ' ') {
        quoteSpan.classList.add('correct')
        quoteSpan.classList.remove('incorrect')
      } else {
        quoteSpan.classList.remove('correct')
        quoteSpan.classList.add('incorrect')
      }
    }
  })
})

const rendomDisplayQuotes = () => {
  const rendomQuot = Math.floor(Math.random() * quots.length)
  const quotText = quots[rendomQuot].text
  quotText.split('').forEach((item) => {
    const quoteSpan = document.createElement('span')
    quoteSpan.textContent = item
    displayRandomQuots.append(quoteSpan)
  })
}
rendomDisplayQuotes()
