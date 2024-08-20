import Swiper from 'swiper/bundle';

const createTag = (tag) => {
    const divTag = document.createElement("div")
    divTag.innerHTML = tag
    divTag.classList.add('tag')
    return divTag
}

const renderCards = (data) => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    data.forEach(item => {
        const { director, duration, genre, year, poster, title } = item;

        // Crear el slide de Swiper
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const card = document.createElement('div');
        const contentCard = document.createElement('div');
        const img = document.createElement('img');
        const spanShadow = document.createElement('span');
        const content = document.createElement('div');
        const movieTitle = document.createElement('h1');
        const yearAndDir = document.createElement('p');
        const movieDuration = document.createElement('b');
        const genderContainer = document.createElement('div');

        const tags = genre.map(item => createTag(item));

        tags.forEach(tag => {
            genderContainer.appendChild(tag);
        });

        movieTitle.textContent = title;
        yearAndDir.textContent = `${year} . ${director}`;
        movieDuration.textContent = duration;

        card.classList.add('movie__card');
        contentCard.classList.add('content__card');
        spanShadow.classList.add('shadow');
        content.classList.add('content');
        yearAndDir.classList.add('date');
        genderContainer.classList.add('hex__tag');

        img.setAttribute('src', poster);
        img.setAttribute('loading', 'lazy')

        card.appendChild(contentCard);
        contentCard.appendChild(img);
        contentCard.appendChild(spanShadow);
        contentCard.appendChild(content);
        content.appendChild(movieTitle);
        content.appendChild(yearAndDir);
        content.appendChild(movieDuration);
        content.appendChild(genderContainer);

        // Añadir la tarjeta a la slide
        swiperSlide.appendChild(card);

        // Añadir la slide al swiper-wrapper
        swiperWrapper.appendChild(swiperSlide);
    });

    // Inicializar Swiper después de que las tarjetas hayan sido añadidas
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto', // Permite que las slides se ajusten automáticamente al ancho disponible
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }
    });
    
}

export default renderCards;