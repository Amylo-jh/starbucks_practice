const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '여기에 제목 입력');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder', '');
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당 년도의 숫자를 반환한다.