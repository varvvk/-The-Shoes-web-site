const swiper = new Swiper('.swiper', {
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      600: {
          slidesPerView: 1
      },
      601: {
        slidesPerView: 2
      },
      768: {
          slidesPerView: 3
      }
  }

});


const sliderImages = document.querySelectorAll('.slider_img');

// Перебираем все элементы и добавляем обработчик события "mouseover"
sliderImages.forEach(img => {
  img.addEventListener('mouseover', function() {
    // Получаем ссылку на изображение, которое нужно показать при наведении
    const newSrc = this.dataset.hoverSrc;
    // Применяем плавный переход
    this.style.transition = 'opacity 0.2s ease';
    // Задаем нулевую прозрачность
    this.style.opacity = '0';
    // После 500 мс меняем src картинки на новую и возвращаем прозрачность
    setTimeout(() => {
      this.src = newSrc;
      this.style.opacity = '1';
    }, 100);
  });
  
  // Добавляем обработчик события "mouseout" для возвращения исходной картинки
  img.addEventListener('mouseout', function() {
    // Получаем ссылку на исходное изображение
    const originalSrc = this.dataset.originalSrc;
    // Применяем плавный переход
    this.style.transition = 'opacity 0.2s ease';
    // Задаем нулевую прозрачность
    this.style.opacity = '0';
    // После 500 мс меняем src картинки на исходную и возвращаем прозрачность
    setTimeout(() => {
      this.src = originalSrc;
      this.style.opacity = '1';
    }, 100);
  });
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}