const phoneLinks = document.querySelectorAll('.phone-link');
const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');
const phoneName = document.getElementById('phone-name');
const phoneDescription = document.getElementById('phone-description');

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

    switch (phone) {
        case 'Galaxy Z Fold 5':
            name = 'Samsung Galaxy Z Fold 5';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8 Gen 2 for Galaxy.';
            break;
        case 'Galaxy Z Flip 5':
            name = 'Samsung Galaxy Z Flip 5';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8 Gen 2 for Galaxy.';
            break;
        case 'Galaxy Z Fold 4':
            name = 'Samsung Galaxy Z Fold 4';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8+ Gen 1.';
            break;
        case 'Galaxy Z Flip 4':
            name = 'Samsung Galaxy Z Flip 4';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 8+ Gen 1.';
            break;
        case 'Galaxy Z Fold 3':
            name = 'Samsung Galaxy Z Fold 3';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 888.';
            break;
        case 'Galaxy Z Flip 3':
            name = 'Samsung Galaxy Z Flip 3';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 888.';
            break;
        case 'Galaxy Z Fold 2':
            name = 'Samsung Galaxy Z Fold 2';
            description = 'Màn hình chính: 7.6 inch Dynamic AMOLED 2X, tần số quét 120Hz. Chip xử lý: Snapdragon 865+.';
            break;
        case 'Galaxy Z Flip':
            name = 'Samsung Galaxy Z Flip';
            description = 'Màn hình chính: 6.7 inch Dynamic AMOLED 2X. Chip xử lý: Snapdragon 855+.';
            break;
        default:
            name = 'Unknown Phone';
            description = 'Thông tin không có sẵn.';
            break;
    }

    phoneName.textContent = name;
    phoneDescription.textContent = description;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closePopup);