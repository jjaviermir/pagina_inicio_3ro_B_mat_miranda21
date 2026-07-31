document.addEventListener('DOMContentLoaded', () => {
    
    // Lista de datos mapeada exactamente a tus archivos png del carrusel
    const carouselData = [
        {
            badge: 'URUS',
            title: 'URUS AT ITS PEAK',
            img: 'img/urus-carousel.png',
            tabs: ['URUS SE PERFORMANTE', 'URUS SE'],
            legal: 'Urus SE, Urus SE Performante: Consumo de energía (combinado): 21,4 kWh/100 Km más 5,7 l/100km; Emisiones de CO2 combinadas: 140 g/km; Clase de eficiencia de CO2 en ciclo combinado: E; Consumo de combustible con la batería descargada en ciclo combinado: 12,9 l/100km; Clase de CO2 con batería descargada: G; Urus SE Performante: En proceso de aprobación, no disponible para la venta.'
        },
        {
            badge: 'TEMERARIO',
            title: "YOU CAN'HIDE WHO YOU ARE",
            img: 'img/temerario-carousel.png',
            tabs: ['TEMERARIO', 'TEMERARIO ALLEGERITA'],
            legal: 'Consumo energético (combinado ponderado): 4,3 kWh/100 Km más 11,2 l/100km; Emisiones de CO2 (combinadas ponderadas): 272 g/km; Clase de eficiencia de emisiones de CO2 (combinadas ponderadas): G; Clase de CO2 con batería descargada: G; Consumo de combustible (combinado) con batería descargada: 14 l/100km'
        },
        {
            badge: 'REVUELTO',
            title: 'FROM NOW ON',
            img: 'img/revuelto-carousel.png',
            tabs: ['REVUELTO'],
            legal: 'Consumo de combustible ponderado en ciclo combinado: 11,8 l/100km; Consumo de electricidad ponderado en ciclo combinado: 10,1 kWh/100km; Emisiones de CO2 ponderadas en ciclo combinado: 276 g/km; Clase de CO2 ponderada en ciclo combinado: G.'
        }
    ];

    let currentIndex = 0;

    const badgeElem = document.getElementById('carousel-badge');
    const titleElem = document.getElementById('carousel-title');
    const imgMain = document.getElementById('img-main');
    const imgPrev = document.getElementById('img-prev');
    const imgNext = document.getElementById('img-next');
    const tabsContainer = document.getElementById('carousel-tabs');
    const legalElem = document.getElementById('carousel-legal');

    const btnPrev = document.getElementById('carousel-prev-btn');
    const btnNext = document.getElementById('carousel-next-btn');

    function updateCarousel() {
        const total = carouselData.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        const currentData = carouselData[currentIndex];

        if (badgeElem) badgeElem.textContent = currentData.badge;
        if (titleElem) titleElem.textContent = currentData.title;
        if (legalElem) legalElem.textContent = currentData.legal;

        if (imgMain) imgMain.src = currentData.img;
        if (imgPrev) imgPrev.src = carouselData[prevIndex].img;
        if (imgNext) imgNext.src = carouselData[nextIndex].img;

        if (tabsContainer) {
            tabsContainer.innerHTML = '';
            currentData.tabs.forEach((tabText, index) => {
                const button = document.createElement('button');
                button.className = `tab-btn ${index === 0 ? 'active' : ''}`;
                button.textContent = tabText;
                button.addEventListener('click', function() {
                    document.querySelectorAll('#carousel-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
                tabsContainer.appendChild(button);
            });
        }
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % carouselData.length;
            updateCarousel();
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
            updateCarousel();
        });
    }

    const sidePrev = document.querySelector('.prev-card');
    const sideNext = document.querySelector('.next-card');

    if (sidePrev) {
        sidePrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
            updateCarousel();
        });
    }

    if (sideNext) {
        sideNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % carouselData.length;
            updateCarousel();
        });
    }

    updateCarousel();
});