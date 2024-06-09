const phoneLinks = document.querySelectorAll('.phone-link');
const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');
const phoneName = document.getElementById('phone-name');
const phoneDescription = document.getElementById('phone-description');
const phoneImage = document.getElementById('phone-image');

function displayPopup(phone) {
    let name = '';
    let descriptionLines = [];
    let imageUrl = '';

    switch (phone) {
        case 'Galaxy Z Fold 5':
            name = 'Samsung Galaxy Z Fold 5';
            descriptionLines = [
                'Màn hình chính: 7.6 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 8+ Gen 1'
            ];
            imageUrl = 'image/samsungzfold5.jpg';
            break;
        case 'Galaxy Z Flip 5':
            name = 'Samsung Galaxy Z Flip 5';
            descriptionLines = [
                'Màn hình chính: 6.7 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 8+ Gen 1'
            ];
            imageUrl = 'image/samsungzflip5.jpg';
            break;
        case 'Galaxy Z Fold 4':
            name = 'Samsung Galaxy Z Fold 4';
            descriptionLines = [
                'Màn hình chính: 7.6 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 8+ Gen 1'
            ];
            imageUrl = 'image/samsungzfold4.jpg';
            break;
        case 'Galaxy Z Flip 4':
            name = 'Samsung Galaxy Z Flip 4';
            descriptionLines = [
                'Màn hình chính: 6.7 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 8+ Gen 1'
            ];
            imageUrl = 'image/samsungzflip4.jpg';
            break;
        case 'Galaxy Z Fold 3':
            name = 'Samsung Galaxy Z Fold 3';
            descriptionLines = [
                'Màn hình chính: 7.6 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 888'
            ];
            imageUrl = 'image/samsungzfold3.jpg';
            break;
        case 'Galaxy Z Flip 3':
            name = 'Samsung Galaxy Z Flip 3';
            descriptionLines = [
                'Màn hình chính: 6.7 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 888'
            ];
            imageUrl = 'image/samsungzflip3.jpg';
            break;
        case 'Galaxy Z Fold 2':
            name = 'Samsung Galaxy Z Fold 2';
            descriptionLines = [
                'Màn hình chính: 7.6 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Snapdragon 865+'
            ];
            imageUrl = 'image/samsungzfold2.jpg';
            break;
        case 'Galaxy Z Flip':
            name = 'Samsung Galaxy Z Flip';
            descriptionLines = [
                'Màn hình chính: 6.7 inch Dynamic AMOLED 2X',
                'Chip xử lý: Snapdragon 855+'
            ];
            imageUrl = 'image/samsungzflip.jpg';
            break;
        case 'Galaxy Note 20 Ultra':
            name = 'Samsung Galaxy Note 20 Ultra';
            descriptionLines = [
                'Màn hình: 6.9 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 990/Snapdragon 865+'
            ];
            imageUrl = 'image/samsungnote20ultra.jpg';
            break;
        case 'Galaxy Note 20':
            name = 'Samsung Galaxy Note 20';
            descriptionLines = [
                'Màn hình: 6.7 inch Super AMOLED Plus',
                'Chip xử lý: Exynos 990/Snapdragon 865+'
            ];
            imageUrl = 'image/samsungnote20.jpg';
            break;
        case 'Galaxy Note 10+':
            name = 'Samsung Galaxy Note 10+';
            descriptionLines = [
                'Màn hình: 6.8 inch Dynamic AMOLED',
                'Chip xử lý: Exynos 9825/Snapdragon 855'
            ];
            imageUrl = 'image/samsungnote10+.jpg';
            break;
        case 'Galaxy Note 10':
            name = 'Samsung Galaxy Note 10';
            descriptionLines = [
                'Màn hình: 6.3 inch Dynamic AMOLED',
                'Chip xử lý: Exynos 9825/Snapdragon 855'
            ];
            imageUrl = 'image/samsungnote10.jpg';
            break;
        case 'Galaxy Note 9':
            name = 'Samsung Galaxy Note 9';
            descriptionLines = [
                'Màn hình: 6.4 inch Super AMOLED',
                'Chip xử lý: Exynos 9810/Snapdragon 845'
            ];
            imageUrl = 'image/samsungnote9.jpg';
            break;
        case 'Galaxy Note 8':
            name = 'Samsung Galaxy Note 8';
            descriptionLines = [
                'Màn hình: 6.3 inch Super AMOLED',
                'Chip xử lý: Exynos 8895/Snapdragon 835'
            ];
            imageUrl = 'image/samsungnote8.jpg';
            break;
        case 'Galaxy Note 7':
            name = 'Samsung Galaxy Note 7';
            descriptionLines = [
                'Màn hình: 5.7 inch Super AMOLED',
                'Chip xử lý: Exynos 8890/Snapdragon 820'
            ];
            imageUrl = 'image/samsungnote7.jpg';
            break;
        case 'Galaxy Note 5':
            name = 'Samsung Galaxy Note 5';
            descriptionLines = [
                'Màn hình: 5.7 inch Super AMOLED',
                'Chip xử lý: Exynos 7420'
            ];
            imageUrl = 'image/samsungnote5.jpg';
            break;
        case 'Galaxy S21 Ultra':
            name = 'Samsung Galaxy S21 Ultra';
            descriptionLines = [
                'Màn hình: 6.8 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 2100/Snapdragon 888'
            ];
            imageUrl = 'image/samsungs21ultra.jpg';
            break;
        case 'Galaxy S21+':
            name = 'Samsung Galaxy S21+';
            descriptionLines = [
                'Màn hình: 6.7 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 2100/Snapdragon 888'
            ];
            imageUrl = 'image/samsungs21+.jpg';
            break;
        case 'Galaxy S21':
            name = 'Samsung Galaxy S21';
            descriptionLines = [
                'Màn hình: 6.2 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 2100/Snapdragon 888'
            ];
            imageUrl = 'image/samsungs21.jpg';
            break;
        case 'Galaxy S20 Ultra':
            name = 'Samsung Galaxy S20 Ultra';
            descriptionLines = [
                'Màn hình: 6.9 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 990/Snapdragon 865'
            ];
            imageUrl = 'image/samsungs20ultra.jpg';
            break;
        case 'Galaxy S20+':
            name = 'Samsung Galaxy S20+';
            descriptionLines = [
                'Màn hình: 6.7 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 990/Snapdragon 865'
            ];
            imageUrl = 'image/samsungs20+.jpg';
            break;
        case 'Galaxy S20':
            name = 'Samsung Galaxy S20';
            descriptionLines = [
                'Màn hình: 6.2 inch Dynamic AMOLED 2X',
                'Tần số quét: 120Hz',
                'Chip xử lý: Exynos 990/Snapdragon 865'
            ];
            imageUrl = 'image/samsungs20.jpg';
            break;
        case 'Galaxy S10+':
            name = 'Samsung Galaxy S10+';
            descriptionLines = [
                'Màn hình: 6.4 inch Dynamic AMOLED',
                'Chip xử lý: Exynos 9820/Snapdragon 855'
            ];
            imageUrl = 'image/samsungs10+.jpg';
            break;
        case 'Galaxy S10':
            name = 'Samsung Galaxy S10';
            descriptionLines = [
                'Màn hình: 6.1 inch Dynamic AMOLED',
                'Chip xử lý: Exynos 9820/Snapdragon 855'
            ];
            imageUrl = 'image/samsungs10.jpg';
            break;
        case 'Galaxy A72':
            name = 'Samsung Galaxy A72';
            descriptionLines = [
                'Màn hình: 6.7 inch Super AMOLED',
                'Chip xử lý: Snapdragon 720G'
            ];
            imageUrl = 'image/samsunga72.jpg';
            break;
        case 'Galaxy A52':
            name = 'Samsung Galaxy A52';
            descriptionLines = [
                'Màn hình: 6.5 inch Super AMOLED',
                'Chip xử lý: Snapdragon 720G'
            ];
            imageUrl = 'image/samsunga52.jpg';
            break;
        case 'Galaxy A32':
            name = 'Samsung Galaxy A32';
            descriptionLines = [
                'Màn hình: 6.4 inch Super AMOLED',
                'Chip xử lý: MediaTek Helio G80'
            ];
            imageUrl = 'image/samsunga32.jpg';
            break;
        case 'Galaxy A12':
            name = 'Samsung Galaxy A12';
            descriptionLines = [
                'Màn hình: 6.5 inch PLS IPS',
                'Chip xử lý: MediaTek Helio P35'
            ];
            imageUrl = 'image/samsunga12.jpg';
            break;
        case 'Galaxy A71':
            name = 'Samsung Galaxy A71';
            descriptionLines = [
                'Màn hình: 6.7 inch Super AMOLED Plus',
                'Chip xử lý: Snapdragon 730'
            ];
            imageUrl = 'image/samsunga71.jpg';
            break;
        case 'Galaxy A51':
            name = 'Samsung Galaxy A51';
            descriptionLines = [
                'Màn hình: 6.5 inch Super AMOLED',
                'Chip xử lý: Exynos 9611'
            ];
            imageUrl = 'image/samsunga51.jpg';
            break;
        case 'Galaxy A31':
            name = 'Samsung Galaxy A31';
            descriptionLines = [
                'Màn hình: 6.4 inch Super AMOLED',
                'Chip xử lý: MediaTek Helio P65'
            ];
            imageUrl = 'image/samsunga31.jpg';
            break;
        case 'Galaxy A21':
            name = 'Samsung Galaxy A21';
            descriptionLines = [
                'Màn hình: 6.5 inch PLS TFT',
                'Chip xử lý: MediaTek Helio P35'
            ];
            imageUrl = 'image/samsunga21.jpg';
            break;
    }

    phoneName.textContent = name;
    phoneImage.src = imageUrl;
    phoneDescription.innerHTML = descriptionLines.map(line => `<p>${line}</p>`).join('');

    popup.classList.add('showing');
    overlay.classList.add('showing');

    setTimeout(() => {
        popup.classList.add('show');
        overlay.classList.add('show');
    }, 200); // Delay of 0.2s
}

phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        displayPopup(e.target.dataset.info);
    });
});

function closePopup() {
    popup.classList.remove('show');
    overlay.classList.remove('show');

    setTimeout(() => {
        popup.classList.remove('showing');
        overlay.classList.remove('showing');
    }, 200); // Delay of 0.2s
}