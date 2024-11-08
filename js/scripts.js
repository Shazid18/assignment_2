const regionSelector = document.getElementById('region-selector-js-region');
const popupOverlay = document.getElementById('popup-overlay-js-region');
const closePopup = document.getElementById('close-popup-js-region');
const saveSettings = document.getElementById('save-settings-js-region');
const regionSelect = document.getElementById('region-js-region');
const currencySelect = document.getElementById('currency');

const currencyMap = {
    'United States': 'USD',
    'Canada': 'CAD',
    'Mexico': 'MXN',
    'Argentina': 'ARS',
    'Brazil': 'BRL',
    'Chile': 'CLP',
    'Colombia': 'COP',
    'Peru': 'PEN',
    'Germany': 'EUR',
    'France': 'EUR',
    'Italy': 'EUR',
    'Spain': 'EUR',
    'Portugal': 'EUR',
    'United Kingdom': 'GBP',
    'Switzerland': 'CHF',
    'Russia': 'RUB',
    'Sweden': 'SEK',
    'Norway': 'NOK',
    'Denmark': 'DKK',
    'South Africa': 'ZAR',
    'Nigeria': 'NGN',
    'Kenya': 'KES',
    'Egypt': 'EGP',
    'Ghana': 'GHS',
    'China': 'CNY',
    'Japan': 'JPY',
    'India': 'INR',
    'South Korea': 'KRW',
    'Singapore': 'SGD',
    'Thailand': 'THB',
    'Saudi Arabia': 'SAR',
    'United Arab Emirates': 'AED',
    'Israel': 'ILS',
    'Turkey': 'TRY',
    'Qatar': 'QAR',
    'Kuwait': 'KWD',
    'Australia': 'AUD',
    'New Zealand': 'NZD',
    'Fiji': 'FJD',
    'Kazakhstan': 'KZT',
    'Uzbekistan': 'UZS'
};

regionSelector.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

regionSelect.addEventListener('change', (e) => {
    const selectedRegion = e.target.value;
    currencySelect.value = currencyMap[selectedRegion];
});

saveSettings.addEventListener('click', () => {
    const selectedRegion = regionSelect.value;
    regionSelector.textContent = selectedRegion;
    popupOverlay.style.display = 'none';
});


// ****** Booking Container ******

const travelersInput = document.getElementById('travelers-input');
const popupOverlayBooking = document.getElementById('popup-overlay-js-book');
const doneBtn = document.getElementById('done-btn-js-book');

const adultsPlus = document.getElementById('adults-plus-js-book');
const adultsMinus = document.getElementById('adults-minus-js-book');
const adultsCount = document.getElementById('adults-count-js-book');

const childrenPlus = document.getElementById('children-plus-js-book');
const childrenMinus = document.getElementById('children-minus-js-book');
const childrenCount = document.getElementById('children-count-js-book');

let adults = 2;
let children = 0;

function updateCounts() {
    adultsCount.textContent = adults;
    childrenCount.textContent = children;
    adultsMinus.disabled = adults <= 0;
    childrenMinus.disabled = children <= 0;
}

function updateTravelersInput() {
    const total = adults + children;
    travelersInput.textContent = `${total} traveler${total !== 1 ? 's' : ''}`;
}

travelersInput.addEventListener('click', () => {
    popupOverlayBooking.style.display = 'block';
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlayBooking) {
        popupOverlayBooking.style.display = 'none';
    }
});

adultsPlus.addEventListener('click', () => {
    adults++;
    updateCounts();
});

adultsMinus.addEventListener('click', () => {
    if (adults > 0) {
        adults--;
        updateCounts();
    }
});

childrenPlus.addEventListener('click', () => {
    children++;
    updateCounts();
});

childrenMinus.addEventListener('click', () => {
    if (children > 0) {
        children--;
        updateCounts();
    }
});

doneBtn.addEventListener('click', () => {
    updateTravelersInput();
    popupOverlayBooking.style.display = 'none';
});

// Initial update
updateCounts();
updateTravelersInput();





// ****** Share And Save ******

const shareBtn = document.getElementById('shareBtn-ss');
const saveBtn = document.getElementById('saveBtn-ss');
const sharePopup = document.getElementById('sharePopup-ss');
const closePopupSs = document.getElementById('closePopup-ss');
const copyLinkBtn = document.getElementById('copyLinkBtn-ss');

// Load saved state from localStorage
const isSaved = localStorage.getItem('propertyIsSaved') === 'true';
if (isSaved) {
    saveBtn.classList.add('active');
}

// Share button functionality
shareBtn.addEventListener('click', () => {
    sharePopup.style.display = 'block';
});

closePopupSs.addEventListener('click', () => {
    sharePopup.style.display = 'none';
});

sharePopup.addEventListener('click', (e) => {
    if (e.target === sharePopup) {
        sharePopup.style.display = 'none';
    }
});

// Copy link functionality
copyLinkBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        copyLinkBtn.textContent = 'Link copied!';
        setTimeout(() => {
            copyLinkBtn.innerHTML = '<img src="link-icon.png" alt="Copy link">Copy link';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy link:', err);
    }
});

// Save button functionality
saveBtn.addEventListener('click', () => {
    const isCurrentlySaved = saveBtn.classList.toggle('active');
    localStorage.setItem('propertyIsSaved', isCurrentlySaved);
});



// ****** Image Gallery ******
const images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpeg',
    '/assets/5.jpeg',
    '/assets/6.jpeg',
    '/assets/7.jpeg',
    '/assets/8.jpg',
    '/assets/9.jpeg',
    '/assets/10.jpg',
];

const seeAllBtn = document.getElementById('seeAllBtn-pho-gallery');
const galleryPopup = document.getElementById('galleryPopup-pho-gallery');
const closePopupGallery = document.getElementById('closePopup-pho-gallery');
const popupImage = document.getElementById('popupImage-pho-gallery');
const prevBtn = document.getElementById('prevBtn-pho-gallery');
const nextBtn = document.getElementById('nextBtn-pho-gallery');
const imageCounter = document.getElementById('imageCounter-pho-gallery');

let currentImageIndex = 0;

function updateImage() {
    popupImage.src = images[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === images.length - 1;
}

seeAllBtn.addEventListener('click', () => {
    currentImageIndex = 0; // Reset to first image
    galleryPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateImage();
});

closePopupGallery.addEventListener('click', () => {
    galleryPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

prevBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (galleryPopup.style.display === 'block') {
        if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
            currentImageIndex--;
            updateImage();
        } else if (e.key === 'ArrowRight' && currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateImage();
        } else if (e.key === 'Escape') {
            galleryPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});
