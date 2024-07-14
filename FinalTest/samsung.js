document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const images = document.querySelectorAll('.gallery-image');
    const imageCount = images.length;
    let currentIndex = 0;

    const firstClone = images[0].cloneNode(true);
    const lastClone = images[imageCount - 1].cloneNode(true);
    galleryWrapper.appendChild(firstClone);
    galleryWrapper.insertBefore(lastClone, images[0]);

    galleryWrapper.style.transform = `translateX(-100%)`;

    function updateGallery(direction) {
        currentIndex += direction;
        galleryWrapper.style.transition = 'transform 0.3s ease-in-out';
        galleryWrapper.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

        if (currentIndex === imageCount) {
            setTimeout(() => {
                galleryWrapper.style.transition = 'none';
                currentIndex = 0;
                galleryWrapper.style.transform = `translateX(-100%)`;
            }, 300);
        } else if (currentIndex === -1) {
            setTimeout(() => {
                galleryWrapper.style.transition = 'none';
                currentIndex = imageCount - 1;
                galleryWrapper.style.transform = `translateX(-${imageCount * 100}%)`;
            }, 300);
        }
    }

    prevBtn.addEventListener('click', () => updateGallery(-1));
    nextBtn.addEventListener('click', () => updateGallery(1));


});