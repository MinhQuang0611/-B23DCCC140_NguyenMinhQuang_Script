document.addEventListener('DOMContentLoaded', () => {
    initGallery();
});

function initGallery() {
    const imageSlider = document.querySelector('.image-slider');
    const prevButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');

    const phones = [{
        color: 'Pink',
        src: 'image/pink.jpg'
    }, {
        color: 'Yellow',
        src: 'image/yellow.jpg'
    }, {
        color: 'Green',
        src: 'image/green.jpg'
    }, {
        color: 'Blue',
        src: 'image/blue.jpg'
    }, {
        color: 'Black',
        src: 'image/black.jpg'
    }];

    phones.forEach(phone => {
        const phoneContainer = document.createElement('div');
        phoneContainer.className = 'phone-container';
        phoneContainer.innerHTML = `
            <div class="phone-screen">
                <img src="${phone.src}" alt="${phone.color} iPhone 15" class="phone-image">
            </div>
        `;
        imageSlider.appendChild(phoneContainer);
    });

    const firstTwo = imageSlider.querySelectorAll('.phone-container:nth-child(-n+2)');
    const lastTwo = imageSlider.querySelectorAll('.phone-container:nth-last-child(-n+2)');
    firstTwo.forEach(el => {
        const clone = el.cloneNode(true);
        imageSlider.appendChild(clone);
    });
    lastTwo.forEach(el => {
        const clone = el.cloneNode(true);
        imageSlider.insertBefore(clone, imageSlider.firstChild);
    });

    const phoneContainers = imageSlider.querySelectorAll('.phone-container');
    let currentIndex = 2;
    const totalImages = phones.length;
    const containerWidth = phoneContainers[0].offsetWidth;

    function updateGallery() {
        const offset = (imageSlider.offsetWidth - containerWidth) / 2;
        imageSlider.style.transform = `translateX(${offset - currentIndex * containerWidth}px)`;

        phoneContainers.forEach((container, index) => {
            if (index === currentIndex) {
                container.classList.add('active');
                container.style.transform = 'scale(1)';
                container.style.opacity = '1';
            } else {
                container.classList.remove('active');
                container.style.transform = 'scale(0.8)';
                container.style.opacity = '0.7';
            }
        });

        if (currentIndex <= 1) {
            setTimeout(() => {
                imageSlider.style.transition = 'none';
                currentIndex = totalImages + 1;
                updateGallery();
                setTimeout(() => {
                    imageSlider.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        } else if (currentIndex >= totalImages + 2) {
            setTimeout(() => {
                imageSlider.style.transition = 'none';
                currentIndex = 2;
                updateGallery();
                setTimeout(() => {
                    imageSlider.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }

    function showNextImage() {
        currentIndex++;
        updateGallery();
    }

    function showPrevImage() {
        currentIndex--;
        updateGallery();
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    updateGallery();

    window.addEventListener('resize', updateGallery);
}
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }
});