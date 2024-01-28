document.addEventListener("DOMContentLoaded", function () {
    // let buttonText = document.querySelector('header .button a');
    // setInterval(function () {
    //     // Генерация случайного цвета в формате #RRGGBB
    //     var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //     buttonText.style.color = randomColor;
    // }, 5000); // Изменение цвета каждую секунду (1000 миллисекунд)

    function setActive() {
        const menuItems = document.querySelectorAll('.leftsidebar__menu li');

        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                // Удаляем класс 'active' у всех пунктов меню
                menuItems.forEach(menuItem => {
                    menuItem.classList.remove('active');
                });

                // Присваиваем класс 'active' только кликнутому пункту
                item.classList.add('active');
            });
        });
    }

    setActive();

    var menuItems = document.querySelectorAll('.item-menu');

        menuItems.forEach(function (item) {
            item.addEventListener('click', function () {
                // Проверяем наличие изображения в текущем элементе li
                var existingImg = item.querySelector('img');
                if (!existingImg) {
                    // Удаляем img из всех элементов li
                    menuItems.forEach(function (otherItem) {
                        if (otherItem !== item) {
                            var otherExistingImg = otherItem.querySelector('img');
                            if (otherExistingImg) {
                                otherExistingImg.remove();
                            }
                        }
                    });

                    // Добавляем img к текущему элементу li
                    var img = document.createElement('img');
                    img.src = 'img/bg_itemmenu_active.svg';
                    // Можете добавить дополнительные атрибуты и стили, если необходимо
                    item.appendChild(img);
                }
            });
        });
});


// Підключення функціоналу "Чертоги Фрілансера"
import {
    isMobile
} from "./functions.js";
// Підключення списку активних модулів
import {
    flsModules
} from "./modules.js";