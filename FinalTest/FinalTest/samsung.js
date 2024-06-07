const phoneLinks = document.querySelectorAll('.phone-link');
const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');
const phoneName = document.getElementById('phone-name');
const phoneDescription = document.getElementById('phone-description');
const phoneImage = document.getElementById('phone-image');



phoneLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const phone = this.dataset.info;
        displayPopup(phone);
    });
});

function displayPopup(phone) {
    let name = '';
    let description = '';
    let imageUrl = ';'

    switch (phone) {
        case 'Galaxy Z Fold 5':
            name = 'Samsung Galaxy Z Fold 5';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8 Gen 2 for Galaxy.';
            imageUrl = "image/samsungzfold5.jpg"
            break;
        case 'Galaxy Z Flip 5':
            name = 'Samsung Galaxy Z Flip 5';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8 Gen 2 for Galaxy.';
            imageUrl = "image/samsungzflip5.jpg"

            break;
        case 'Galaxy Z Fold 4':
            name = 'Samsung Galaxy Z Fold 4';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8+ Gen 1.';
            imageUrl = "image/samsungzfold4.jpg"

            break;
        case 'Galaxy Z Flip 4':
            name = 'Samsung Galaxy Z Flip 4';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8+ Gen 1.';
            imageUrl = "image/samsungzflip4.jpg"
            break;
        case 'Galaxy Z Fold 3':
            name = 'Samsung Galaxy Z Fold 3';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 888.';
            imageUrl = "image/samsungzfold3.jpg"
            break;
        case 'Galaxy Z Flip 3':
            name = 'Samsung Galaxy Z Flip 3';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 888.';
            imageUrl = "image/samsungzflip3.jpg"
            break;
        case 'Galaxy Z Fold 2':
            name = 'Samsung Galaxy Z Fold 2';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 865+.';
            imageUrl = "image/samsungzfold2.jpg"
            break;
        case 'Galaxy Z Flip':
            name = 'Samsung Galaxy Z Flip';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X. Chip xử lý: Snapdragon 855+.';
            imageUrl = "image/samsungzflip.jpg"
            break;
    }

    phoneName.textContent = name;
    phoneDescription.textContent = description;
    phoneImage.src = imageUrl;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}


function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closePopup);