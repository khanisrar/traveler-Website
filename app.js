const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navbar');
const searchBtn = document.querySelector('#search-btn2');
const searchContainer = document.querySelector('.search-container2');

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
    navBar.classList.remove('active');

}

menuBtn.addEventListener('click', () => {
    menuBtn.className = menuBtn.className === 'fa fa-times' ? 'fa fa-bars' : 'fa fa-times'
    navBar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    // searchBtn.className = searchBtn.className === 'fa fa-times' ? 'fa fa-search' : 'fa fa-times'
    searchContainer.classList.toggle('active');
});