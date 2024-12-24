
const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
let currentIndex = 0;

function openPopup(image) {
    currentIndex = parseInt(image.getAttribute('data-index'));
    showImage(currentIndex);
    popup.classList.remove('hidden');
}

function showImage(index) {
    const image = images[index];
    if (image) {
        popupImage.src = image.src;
        popupImage.alt = image.alt;
    }
}

function closePopup() {
    popup.classList.add('hidden');
}

let startX = 0;

popup.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

popup.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        // Swipe right
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    } else if (deltaX < -50) {
        // Swipe left
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});

popup.addEventListener('click', closePopup);

