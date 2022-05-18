// Selecting the dom elements and assigning to variables
const menuBar = document.querySelector('.menu-bars');
const menuItem = document.querySelector('.listItems');

menuBar.addEventListener('click', function() {

    if (menuItem.style.display === 'block') {
        menuItem.style.display = 'none'
    } else {
        menuItem.style.display = 'block';
    }

})