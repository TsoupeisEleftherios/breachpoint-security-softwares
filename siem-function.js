let currentImageIndex = 0;
const images = document.querySelectorAll('.siem-image');
const totalImages = images.length;

function showImage(index) {
    // Hide all images
    images.forEach(image => image.style.display = 'none');
    // Show the image at the current index
    images[index].style.display = 'block';
}

document.getElementById('nextBtn').addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
});

document.getElementById('prevBtn').addEventListener('click', function () {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
});

// Show the first image by default
showImage(currentImageIndex);
