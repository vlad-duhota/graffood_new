// vars

const themeSwitcher = document.querySelector('.header__theme');
const themeSwitcherImg_1 = document.querySelector('.header__theme-img_1');
const themeSwitcherImg_2 = document.querySelector('.header__theme-img_2');
const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
let themeSwitcherCurrent = false;
const menu = document.querySelector('.menu');
const headerBtn = document.querySelector('.header__menu-btn');

// theme switcher
themeSwitcher.addEventListener('click', function(){
    themeSwitcherCurrent = !themeSwitcherCurrent;
    if(themeSwitcherCurrent){
        themeSwitcherImg_1.style.display = 'none';
        themeSwitcherImg_2.style.display = 'block';
        htmlTag.style.setProperty('--light', '#424242');
        htmlTag.style.setProperty('--dark', '#fff');
        bodyTag.classList.add('body_dark-theme');
        this.style.background = '#444';
    } else{
        themeSwitcherImg_1.style.display = 'block';
        themeSwitcherImg_2.style.display = 'none';
        htmlTag.style.setProperty('--light', '#fff');
        htmlTag.style.setProperty('--dark', '#424242');
        bodyTag.classList.remove('body_dark-theme');
        this.style.background = '#EFEFEF';
    }
});

// header
headerBtn.addEventListener('click', function(){
    this.classList.toggle('header__menu-btn_active');
    menu.classList.toggle('menu_active');
    bodyTag.classList.toggle('no-scroll');
});

// slider
const swiper = new Swiper('.hero__slider', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

// smooth scroll
const anchors = Array.from(document.querySelectorAll('a'));
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// pop-up
const closeBtn = document.querySelector('.pop-up__close-btn');
const moreBtn = document.querySelectorAll('.more');
const popupContent = document.querySelectorAll('.pop-up__content');
const popUp = document.querySelector('.pop-up');

moreBtn.forEach(element => {
    let dataMore = 0;
    element.addEventListener('click', function(){
        dataMore = element.getAttribute('data-more');
        popUp.style.opacity = 1;
        popUp.classList.add('pop-up_active');
        popupContent.forEach(content => {
            if(dataMore === content.getAttribute('data-more')){
                popupContent.forEach(elem => {
                    elem.style.display = 'none';
                });
                content.style.display = 'block';
            }
        });
    })
});

closeBtn.addEventListener('click', function(){
    popUp.style.opacity = 0;
    setTimeout(() => {
        popUp.classList.remove('pop-up_active');
    }, 300);
});

NiceSelect.bind(document.getElementById("select-input"), {searchable: false});
const current = document.querySelector('.current');
const selectItem = document.querySelectorAll('.option');

selectItem.forEach(elem => {
    elem.addEventListener('click', function(){
        current.style.color = '#000';
    })
});

$("form").submit(function() { // Событие отправки с формы
    var form_data = $(this).serialize(); // Собираем данные из полей
    jQuery.ajax({
        type: "POST", // Метод отправки
        url: "sendform.php", // Путь к PHP обработчику sendform.php
        data: form_data,
        success: swal({
            title: "Спасибо за заявку!",
            type: "success",
            showConfirmButton: false,
            timer: 2000
        })
    });
    $(this).find('input, textarea').prop('disabled', true);
    event.preventDefault();
});