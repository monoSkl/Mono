let mAmount = 0;

document.addEventListener("DOMContentLoaded", function() {
    const coin = document.querySelector('.coin');
    const mDisplay = document.querySelector('.m-amount');

    coin.addEventListener('click', function() {
        mAmount++;
        mDisplay.textContent = mAmount + " M"; 
    });
});
