import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
console.log("sd");

//! ЧТОБЫ ВСЁ РАБОТАЛО ПОСЛЕ УВЕЛИЧЕНИЯ/УМЕНШИНИЯ ШИРИНЫ ОКНА БРАУЗЕРА КАК ЗАДУМАНО, НЕОБХОДИМО ОБНОВИТЬ СТРАНИЦУ
//<==============МЕНЮ БУРГЕР==================
let topHeaderMenu = document.querySelector(".top-header__list");
let burger = document.querySelectorAll(".burger");
let burgerHeader = document.querySelector(".top-header__burger");
let arrow = document.querySelector(".contacts-header__column_icon");
let phone = document.querySelector(".contacts-header__phone");
let wrapper = document.body;
for (let index = 0; index < burger.length; index++) {
   burger[index].addEventListener("click", function () {
      burger[index].classList.toggle("active");
   });
}
burgerHeader.addEventListener("click", function () {
   topHeaderMenu.classList.toggle("active");
   wrapper.classList.toggle("active");
});

arrow.addEventListener("click", function () {
   phone.classList.toggle("active");
});
//==============МЕНЮ БУРГЕР==================>

//<==============ПЕРЕМЕЩЕНИЕ actions-header В МЕНЮ БУРГЕР==================
const actionsHeader = document.querySelector(".actions-header");
const bottomHeaderColumn = document.querySelectorAll(".bottom-header__column");
if (!(actionsHeader.closest(".top-header__list")) && (window.innerWidth <= 640)) {
   topHeaderMenu.prepend(actionsHeader);
}
window.addEventListener("resize", function () {
   if (!(actionsHeader.closest(".top-header__list")) && (window.innerWidth <= 640)) {
      topHeaderMenu.prepend(actionsHeader);
   } else {
      if ((actionsHeader.closest(".top-header__list")) && (window.innerWidth > 640)) {
         bottomHeaderColumn[0].prepend(actionsHeader);
      }
   }
});
//==============ПЕРЕМЕЩЕНИЕ actions-header В МЕНЮ БУРГЕР==================>

//<==============ПЕРЕМЕЩЕНИЕ infoHeader В МЕНЮ БУРГЕР==================
const infoHeader = document.querySelector(".info-header");
if (!(infoHeader.closest(".top-header__list")) && (window.innerWidth <= 640)) {
   topHeaderMenu.append(infoHeader);
}
window.addEventListener("resize", function () {
   if (!(infoHeader.closest(".top-header__list")) && (window.innerWidth <= 640)) {
      topHeaderMenu.append(infoHeader);
   } else {
      if ((infoHeader.closest(".top-header__list")) && (window.innerWidth > 640)) {
         bottomHeaderColumn[1].prepend(infoHeader);
      }
   }
});
//==============ПЕРЕМЕЩЕНИЕ infoHeader В МЕНЮ БУРГЕР==================>

//<==============ВЫПАДАЮЩЕЕ ПОДSIDBAR==================
const bodyAsideLi = document.querySelectorAll(".body-aside__li");
const submenuAside = document.querySelectorAll(".submenu-aside");
//<==================ЧТОБЫ ВСЁ РАБОТАЛО И ПОСЛЕ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ, А НЕ ТОЛЬКО КОГДА СТРАНИЦА РЕСАЙЗИТСЯ==========>
for (let index = 0; index < bodyAsideLi.length; index++) {
   if (window.innerWidth > 992) {
      submenuAside[index].addEventListener("mouseenter", function () {
         submenuAside[index].classList.add("active");
      });
      submenuAside[index].addEventListener("mouseleave", function (event) {
         submenuAside[index].classList.remove("active");
      });
      bodyAsideLi[index].addEventListener("mouseenter", function () {
         const getAttribute = bodyAsideLi[index].getAttribute("data-item");
         submenuAside[getAttribute].classList.add("active");
      });
      bodyAsideLi[index].addEventListener("mouseleave", function () {
         const getAttribute = bodyAsideLi[index].getAttribute("data-item");
         submenuAside[getAttribute].classList.remove("active");
      });
   } else {
      bodyAsideLi[index].addEventListener("click", function (event) {
         const getAttribute = bodyAsideLi[index].getAttribute("data-item");
         console.log(getAttribute);
         if (!(event.target.closest(".submenu-aside"))) {
            for (let index = 0; index < submenuAside.length; index++) {
               if (submenuAside[index].classList.contains("active")) {
                  if (index == getAttribute) { continue };
                  submenuAside[index].classList.remove("active")
               }
            }
            submenuAside[getAttribute].classList.toggle("active");
         }
      });
   }
};
//==================ЧТОБЫ ВСЁ РАБОТАЛО И ПОСЛЕ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ, А НЕ ТОЛЬКО КОГДА СТРАНИЦА РЕСАЙЗИТСЯ==========>
//! ПРОБЛЕМА RESIZE В ТОМ, ЧТО ПРИ ИЗМЕНЕНИИ ШИРИНЫ ЭКРАНА БЕЗ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ, НАВЕШИВАЕТСЯ ВСЁ БОЛЬШЕ ОДНИХ И ТЕХЖЕ СОБЫТИЙ. НО ВСЁ РАБОТАЕТ:)
window.addEventListener("resize", function () {
   for (let index = 0; index < bodyAsideLi.length; index++) {
      if (window.innerWidth > 992) {
         bodyAsideLi[index].removeEventListener("click", function (event) {
            const getAttribute = bodyAsideLi[index].getAttribute("data-item");
            console.log(getAttribute);
            if (!(event.target.closest(".submenu-aside"))) {
               for (let index = 0; index < submenuAside.length; index++) {
                  if (submenuAside[index].classList.contains("active")) {
                     if (index == getAttribute) { continue };
                     submenuAside[index].classList.remove("active")
                  }
               }
               submenuAside[getAttribute].classList.toggle("active");
            }
         });
         submenuAside[index].addEventListener("mouseenter", function () {
            submenuAside[index].classList.add("active");
         });
         submenuAside[index].addEventListener("mouseleave", function (event) {
            submenuAside[index].classList.remove("active");
         });
         bodyAsideLi[index].addEventListener("mouseenter", function () {
            const getAttribute = bodyAsideLi[index].getAttribute("data-item");
            submenuAside[getAttribute].classList.add("active");
         });
         bodyAsideLi[index].addEventListener("mouseleave", function () {
            const getAttribute = bodyAsideLi[index].getAttribute("data-item");
            submenuAside[getAttribute].classList.remove("active");
         });
      } else {
         submenuAside[index].removeEventListener("mouseenter", function () {
            submenuAside[index].classList.add("active");
         });
         submenuAside[index].removeEventListener("mouseleave", function (event) {
            submenuAside[index].classList.remove("active");
         });
         bodyAsideLi[index].removeEventListener("mouseenter", function () {
            const getAttribute = bodyAsideLi[index].getAttribute("data-item");
            submenuAside[getAttribute].classList.add("active");
         });
         bodyAsideLi[index].removeEventListener("mouseleave", function () {
            const getAttribute = bodyAsideLi[index].getAttribute("data-item");
            submenuAside[getAttribute].classList.remove("active");
         });
         bodyAsideLi[index].addEventListener("click", function (event) {
            const getAttribute = bodyAsideLi[index].getAttribute("data-item");
            console.log(getAttribute);
            if (!(event.target.closest(".submenu-aside"))) {
               for (let index = 0; index < submenuAside.length; index++) {
                  if (submenuAside[index].classList.contains("active")) {
                     if (index == getAttribute) { continue };
                     submenuAside[index].classList.remove("active")
                  }
               }
               submenuAside[getAttribute].classList.toggle("active");
            }
         });
      }
   };
});
//==============ВЫПАДАЮЩЕЕ ПОДSIDBAR==================>

//<==============ВЫПАДАЮЩИЙ SIDBAR==================
const bodyAside = document.querySelector(".body-aside");
const asidePageBurger = document.querySelector(".aside-page__burger");
asidePageBurger.addEventListener("click", function () {
   bodyAside.classList.toggle("active");
   for (let index = 0; index < submenuAside.length; index++) {
      submenuAside[index].classList.toggle("remove");
   }
})
//==============ВЫПАДАЮЩИЙ SIDBAR==================>

//<==============choice-page__checkbox==================
const choicePageInput = document.querySelectorAll(".choice-page__input");
const choicePageItem = document.querySelectorAll(".choice-page__item");

for (let index = 0; index < choicePageInput.length; index++) {
   choicePageItem[index].addEventListener("click", function () {
      const choicePageInputConcrete = choicePageItem[index].parentElement.querySelector(".choice-page__input");
      if (!(choicePageInputConcrete.checked)) {
         choicePageInputConcrete.checked = true;
         choicePageItem[index].classList.add("active");
      } else {
         choicePageInputConcrete.checked = false;
         choicePageItem[index].classList.remove("active");
      }
      const activeChoicePageItem = document.querySelectorAll(".choice-page__item.active");
      const formPageTitleSpans = document.querySelectorAll(".form-page__title span");
      if (activeChoicePageItem.length > 0) {
         formPageTitleSpans[0].innerHTML = "";
         formPageTitleSpans[1].innerHTML = `${formPageTitleSpans[1].getAttribute("data-text")}: ${activeChoicePageItem.length}`;
      } else {
         formPageTitleSpans[0].innerHTML = `${formPageTitleSpans[0].getAttribute("data-text")}`;
         formPageTitleSpans[1].innerHTML = ``;
      }
   });
}
//==============choice-page__checkbox==================>

//<==============formPageChoice==================
const formPageTitle = document.querySelector(".form-page__title");
const formPageChoice = document.querySelector(".form-page__choice");
formPageTitle.addEventListener("click", function () {
   formPageChoice.classList.toggle("active");
   formPageTitle.classList.toggle("active");
});
//==============formPageChoice==================>

//<==============slider==================
$(document).ready(function () {
   $(".slider").slick({
      arrows: false,
      dots: true,
      appendDots: $('.subcontent-slider__row'),
      waitForAnimate: false,
   });
});
window.addEventListener("load", function () {
   const dottsSlider = document.querySelectorAll('.subcontent-slider__row button');
   for (let index = 0; index < dottsSlider.length; index++) {
      dottsSlider[index].addEventListener("click", function () {
         dottsSlider[index].innerHTML = `<span>${index + 1}</span>`
      })
   }
});
//==============slider==================>

//<==============slider2==================
$(document).ready(function () {
   $(".proudcts-slider-page__slider").slick({
      rows: 2,
      slidesPerRow: 3,
      appendArrows: $('.header-proudcts-slider__arrows'),
      responsive: [
         {
            breakpoint: 867,
            settings: {
               slidesPerRow: 2,
            }
         },
         {
            breakpoint: 540,
            settings: {
               slidesPerRow: 1,
            }
         },
      ]
   });
   const proudctsSliderArrowsSpan = $('.header-proudcts-slider__arrows span');
   proudctsSliderArrowsSpan[1].innerHTML = "/" + $(".proudcts-slider-page__slider").slick("getSlick").slideCount;
   //здесь изначально записываем текущий слайд
   const proudctsSliderArrow = $(".header-proudcts-slider__arrows .slick-arrow");
   let currentSlide = $('.proudcts-slider-page__slider').slick('slickCurrentSlide') + 1;
   proudctsSliderArrowsSpan[0].innerHTML = currentSlide;
   proudctsSliderArrow.click(function () {
      //здесь записываем текущий слайд после клика на кнопку
      let currentSlide = $('.proudcts-slider-page__slider').slick('slickCurrentSlide') + 1;
      proudctsSliderArrowsSpan[0].innerHTML = currentSlide;
   })
});
//==============slider2==================>

//<==============slider-catalog==================
$(document).ready(function () {
   $(".proudcts-slider-page__slider-catalog").slick({
      rows: 3,
      slidesPerRow: 3,
      dots: true,
      appendDots: $('.header-proudcts-slider__arrows-catalog span'),
      appendArrows: $('.header-proudcts-slider__arrows-catalog'),
      infinite: false,
      responsive: [
         {
            breakpoint: 867,
            settings: {
               slidesPerRow: 2,
               rows: 2,
            }
         },
         {
            breakpoint: 540,
            settings: {
               slidesPerRow: 1,
               rows: 2,
            }
         },
      ]
   });
})
//==============slider-catalog==================>

//<==============slider-product==================
$(document).ready(function () {
   $(".images-product__slider").slick({
      rows: 1,
      slidesPerRow: 1,
      arrows: false,
      asNavFor: ".images-product__subslider",
   });
})
//==============slider-product==================>

//<==============subslider-product==================
$(document).ready(function () {
   $(".images-product__subslider").slick({
      arrows: false,
      asNavFor: ".images-product__slider",
      centerMode: true,
      slidesToShow: 3,
      /*       responsive: [
               {
                  breakpoint: 479.98,
                  settings: {
                     slidesToShow: 2,
                  },
               },
            ] */
   });
   //! Изменение активного класса при клике на другой слайд
   $(".subslider-product__item").on("click", function () {
      const index = $(this).attr("data-slick-index");
      $(".images-product__subslider").slick("slickGoTo", index);
   });
})
//==============subslider-product==================>

//<==============brends-slider==================
$(document).ready(function () {
   $(".brends-page__row").slick({
      slidesToShow: 4,
      arrows: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
            }
         },
      ]
   })
})
//==============brends-slider==================>

//<==============ДИНАМИЧЕСКИЙ АДАПТИВ==================
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
   this.type = type;
}

DynamicAdapt.prototype.init = function () {
   const _this = this;
   // массив объектов
   this.оbjects = [];
   this.daClassname = "_dynamic_adapt_";
   // массив DOM-элементов
   this.nodes = document.querySelectorAll("[data-da]");

   // наполнение оbjects объктами
   for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      //* МОЖНО И ТАК: const data = node.getAttribute("data-da").trim();
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      //! ОРИГИНАЛЬНАЯ СТРОКА: оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.destination = dataArray[0].trim();
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
   }

   this.arraySort(this.оbjects);

   // массив уникальных медиа-запросов
   this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
   }, this);
   this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
   });

   // навешивание слушателя на медиа-запрос
   // и вызов обработчика при первом запуске
   for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
         return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
         _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
   }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
   if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         оbject.index = this.indexInParent(оbject.parent, оbject.element);
         this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
   } else {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         if (оbject.element.classList.contains(this.daClassname)) {
            this.moveBack(оbject.parent, оbject.element, оbject.index);
         }
      }
   }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
   element.classList.add(this.daClassname);
   if (place === 'last' || place >= destination.children.length) {
      //+++++++++++++++++++++++++++++++++++++++++++
      //! ОРИГИНАЛЬНАЯ СТРОКА: destination.insertAdjacentElement('beforeend', element);
      document.querySelector(`.${destination}`).insertAdjacentElement('beforeend', element);
      return;
   }
   if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
   }
   destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
   element.classList.remove(this.daClassname);
   if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
   } else {
      parent.insertAdjacentElement('beforeend', element);
   }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
   const array = Array.prototype.slice.call(parent.children);
   return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
   if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return -1;
            }

            if (a.place === "last" || b.place === "first") {
               return 1;
            }

            return a.place - b.place;
         }

         return a.breakpoint - b.breakpoint;
      });
   } else {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return 1;
            }

            if (a.place === "last" || b.place === "first") {
               return -1;
            }

            return b.place - a.place;
         }

         return b.breakpoint - a.breakpoint;
      });
      return;
   }
};

const da = new DynamicAdapt("max");
da.init();
//==============ДИНАМИЧЕСКИЙ АДАПТИВ==================>

//<==============quantity==================
const quantityInput = document.querySelectorAll(".quantity__input");
const quantityButton = document.querySelectorAll(".quantity__button");
for (let index = 0; index < quantityButton.length; index++) {
   quantityButton[index].addEventListener("click", function () {
      let value = quantityButton[index].parentElement.querySelector(".quantity__input").value
      if (quantityButton[index].classList.contains("quantity__button_left")) {
         if (value <= 1) {
            return;
         } else {
            value = +(value) - 1;
            quantityButton[index].parentElement.querySelector(".quantity__input").value = value;
         }
      } else if (quantityButton[index].classList.contains("quantity__button_right")) {
         value = +(value) + 1;
         quantityButton[index].parentElement.querySelector(".quantity__input").value = value;
      }
   })
}
//==============quantity==================>

//<==============priceFilter==================
if (document.querySelector('.price-filter')) {
   var priceFilter = document.querySelector('.price-filter');
   noUiSlider.create(priceFilter, {
      start: [0, 200000],
      connect: true,
      behaviour: 'drag',
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
         'min': 0,
         'max': 200000
      }
   });
   const inputMin = document.querySelector('#input-min');
   const inputMax = document.querySelector('#input-max');
   //ДЛЯ ИЗМЕНЕНИЯ ЗНАЧЕНИЯ INPUT'ОВ, В ЗАВИСИМОСТИ ОТ ПОЛОЖЕНИЯ ПОЛЗУНКОВ
   priceFilter.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      /* console.log(value);
      console.log(handle); */
      if (handle == 0) {
         inputMin.value = Math.round(value);
      } else {
         inputMax.value = Math.round(value);
      }
   });
   //ДЛЯ ИЗМЕНЕНИЯ ПОЛОЖЕНИЯ ПОЛЗУНОКВ, В ЗАВИСИМОСТИ ОТ ЗАНЧЕНИЯ INPUT'ОВ
   inputMin.addEventListener('change', function (e) {
      priceFilter.noUiSlider.set(inputMin.value);
   });

   inputMax.addEventListener('change', function () {
      priceFilter.noUiSlider.set([null, this.value]);
   });
}
//==============priceFilter==================>


//<==============manufacturer-filter__checkbox==================
const choiceFilterInput = document.querySelectorAll(".manufacturer-filter__input");
const choiceFilterItem = document.querySelectorAll(".manufacturer-filter__item");

for (let index = 0; index < choiceFilterInput.length; index++) {
   choiceFilterItem[index].addEventListener("click", function () {
      const choiceFilterInputConcrete = choiceFilterInput[index].parentElement.querySelector(".manufacturer-filter__input");
      if (!(choiceFilterInputConcrete.checked)) {
         choiceFilterInputConcrete.checked = true;
         choiceFilterItem[index].classList.add("active");
      } else {
         choiceFilterInputConcrete.checked = false;
         choiceFilterItem[index].classList.remove("active");
      }
   });
}
//==============manufacturer-filter__checkbox==================>

//==============manufacturer-filter__spoiler==================>
let sectionFilterTitleSpoiler = document.querySelectorAll(".section-filter__title_spoiler");
let sectionFilterBodySpoiler = document.querySelectorAll(".section-filter__body_spoiler");
for (let index = 0; index < sectionFilterTitleSpoiler.length; index++) {
   sectionFilterTitleSpoiler[index].addEventListener("click", function () {
      sectionFilterTitleSpoiler[index].classList.toggle("active");
      sectionFilterBodySpoiler[index].classList.toggle("active");
   });
};
//<==============manufacturer-filter__spoiler==================

//==============filterPageReset==================>
if (document.querySelector(".filter-page__reset")) {
   let filterPageReset = document.querySelector(".filter-page__reset");
   filterPageReset.addEventListener("click", function () {
      for (let index = 0; index < choiceFilterItem.length; index++) {
         choiceFilterItem[index].classList.remove("active");
      }
   });
}
//<==============filterPageReset==================

//==============появление filter-page__body==================>
if (document.querySelector(".filter-page__title")) {
   const filterPageTitle = document.querySelector(".filter-page__title");
   const filterPageBody = document.querySelector(".filter-page__body");
   filterPageTitle.addEventListener("click", function () {
      filterPageBody.classList.toggle("active");
   });
}
//<==============появление filter-page__body==================

//<==============product__info==================
const infoProductBtton = document.querySelectorAll(".info-product__button");
const infoProductButtonTab = document.querySelectorAll(".info-product__button_tab");
for (let index = 0; index < infoProductBtton.length; index++) {
   infoProductBtton[index].addEventListener('click', function () {
      if (infoProductBtton[index].classList.contains("active")) {
         return;
      } else {
         for (let index = 0; index < infoProductBtton.length; index++) {
            infoProductBtton[index].classList.remove("active");
            if (infoProductButtonTab[index]) {
               infoProductButtonTab[index].classList.remove("active")
            }
         }
         console.log(index);
         infoProductBtton[index].classList.add("active");
         if (infoProductButtonTab[index]) {
            infoProductButtonTab[index].classList.add("active")
         }
      }
   })
}
//==============product__info==================>

//==============pagination==================>
/* //Здесь ввести родителя, в котором находятся нужные нам элементы
const classPaginationWithItem = document.querySelector(".#");
//Здесь ввести кол-во отображаемых элементов в единице
const quantityItemsVisible = #;

const PaginationItems = classPaginationWithItem.children;
//Здесь удаляются все Items(в классе pagination есть display: none) за исключением первых quantityItemsVisible элементов
for (let index = quantityItemsVisible + 1; index < PaginationItems.length; index++) {
   console.log(PaginationItems[index]);
   PaginationItems[index].classList.add("pagination");
}
//Здесь получается кол-во единиц внутри которых будут находится фиксированное кол-во Items
function quantityButtons(qIV) {
   return Math.ceil(PaginationItems.length / qIV);
}
console.log(quantityButtons(quantityItemsVisible));
//Здесь создаётся нужное кол-во кнопок
function paintButton(qB) {
   str = "";
   for (let index = 1; index <= qB; index++) {
      str += `<button data-number="${index}" class="pagination-button">${index}</button>`
   }
   return str;
}
//При клике на кнопку удаляются все Items и добавляются те, которые относятся к нажатой кнопке
document.addEventListener("click", function (event) {
   if (event.target.closest("pagination-button")) {
      for (let index = 0; index < PaginationItems.length; index++) {
         PaginationItems[index].classList.add("pagination");
      }
      for (let index = ((event.target.getAttribute("data-number") - 1) * quantityItemsVisible); index <= quantityItemsVisible; index++) {
         PaginationItems[index].classList.remove("pagination");
      }
   }
});
 */