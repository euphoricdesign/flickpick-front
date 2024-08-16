const cardContainer = document.querySelector('.card__container')

const createTag = (tag) => {
    const divTag = document.createElement("div")
    divTag.innerHTML = tag
    divTag.classList.add('tag')
    return divTag
}

const renderCards = (data) => {
    data.forEach(item => {
        const {director, duration, genre, year, poster, title} = item
    
        const card = document.createElement('div')
        const contentCard = document.createElement('div')
        const img = document.createElement('img')
        const spanShadow = document.createElement('span')
        const content = document.createElement('div')
        const movieTitle = document.createElement('h1')
        const yearAndDir = document.createElement('p')
        const movieDuration = document.createElement('b')
        const genderContainer = document.createElement('div')
    
        const tags = genre.map(item => createTag(item))
    
        tags.forEach(tag => {
            genderContainer.appendChild(tag)
        })
    
    
        movieTitle.textContent = title
        yearAndDir.textContent = `${year} . ${director}`
        movieDuration.textContent = duration
    
        card.classList.add('movie__card')
        contentCard.classList.add('content__card')
        spanShadow.classList.add('shadow')
        content.classList.add('content')
        yearAndDir.classList.add('date')
        genderContainer.classList.add('hex__tag')
    
    
        img.setAttribute('src', poster)
    
        card.appendChild(contentCard)
        contentCard.appendChild(img)
        contentCard.appendChild(spanShadow)
        contentCard.appendChild(content)
        content.appendChild(movieTitle)
        content.appendChild(yearAndDir)
        content.appendChild(movieDuration)
        content.appendChild(genderContainer)
    
        cardContainer?.appendChild(card)
    
    })
}

module.exports = renderCards