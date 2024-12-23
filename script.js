function openPopup(imgElement) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = imgElement.src;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}