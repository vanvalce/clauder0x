// const gallery = document.querySelector('.gallery');
// const popups = ['Popup 1', 'Popup 2'];

// gallery.addEventListener('click', (event) => {
//   const popupIndex = Array.from(gallery.children).indexOf(event.target.closest('.popup-btn'));
//   if (popupIndex !== -1) {
//     const popupText = popups[popupIndex];
//     const popup = document.createElement('div');
//     popup.classList.add('popup', 'active');
//     console.log("add popup")
//     popup.innerHTML = popupText;
//     document.body.appendChild(popup);
//     popup.addEventListener('click', () => {
//         popup.remove();
//     });
//     document.body.addEventListener('click', (event) => {
//         if (!popup.contains(event.target)) {
//         popup.remove();
//       }
//     });
//   }
// });


const popupBtns = document.querySelectorAll('.popup-btn');

popupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const popupText = btn.getAttribute('data-text');
    const popup = document.createElement('div');
    popup.classList.add('popup', 'active');
    popup.innerHTML = popupText;
    document.body.appendChild(popup);
    popup.addEventListener('click', () => {
      popup.remove();
    });
  });
});



// Get the modal container and modal image
const modalContainer = document.getElementById('modal-container');
const modalImage = document.getElementById('modal-image');

// Get all the grid images
const gridImages = document.querySelectorAll('.grid-image');

// Loop through the grid images and add a click event listener
gridImages.forEach(image => {
    image.addEventListener('click', () => {
        // Set the source of the modal image to the clicked image source
        modalImage.src = image.src;
        // Show the modal container
        modalContainer.style.display = 'flex';
    });
});

// Add a click event listener to the modal container to hide it when clicked
modalContainer.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});
