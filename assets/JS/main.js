const mobileSearch = document.querySelector('.header__mobile-search');
const mobileInput = document.querySelector('.header__search');

let isActive = mobileInput.classList.value.includes('active');

mobileSearch.onclick = () => {
    // document.querySelector('.header__search-select').style.display = 'none';
    mobileInput.classList.toggle('active');
}

document.onclick = (e) => {
    if(e.target.classList.value.includes('header__search') === false && e.target.classList.value.includes('header__mobile-search') === false) {
        mobileInput.classList.remove('active');
    }
}

// document.querySelector('.header__search-input').onfocus = () => {
//     document.querySelector('.header__search-history').style.display = 'block';
// }

// console.log(document.querySelector('.header__search-input').focus())

// // function displayHistory(e) {
// //     document.querySelector('.header__search-history').style.display = 'block';
// //     console.log(document.querySelector('.header__search-input'))

// // }