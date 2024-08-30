import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

AOS.init();

// 區塊：精選文章
var mySwiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    768: {
        //一個畫面顯示 1 個內容
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 2,
    },
  },
  //每個內容之間的間隔為 48px 。
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。
  spaceBetween: 48,
    
  // 分頁
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  loop: "infinite",
});

// 區塊：大家都在看
var hotSwiper = new Swiper(".hotSwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".hotswiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let menuText;
      switch (index) {
        case 0: menuText = '．酒精路跑地圖'; break;
        case 1: menuText = '．台北拉麵圖鑑'; break;
        case 2: menuText = '．海島自由行'; break;
        case 3: menuText = '．短天數出國推薦'; break;
        case 4: menuText = '．週末露營趣'; break;
      }
      return '<li class="' + className + '">' + menuText + '</li>';
    },
  },
  loop: "infinite",
});

// 區塊：品味生活
var lifeSwiper = new Swiper('.lifeSwiper', {
  navigation: {
    nextEl: ".life-next-btn",
    prevEl: ".life-prev-btn",
  },
  breakpoints: {
    768: {
        //一個畫面顯示 1 個內容
        slidesPerView: 1,
        allowSlideNext: false, // 禁用滑動
        allowSlidePrev: false, // 禁用滑動
    },
    992: {
        slidesPerView: 1,
    },
  },
  // spaceBetween: 24,
  loop: "infinite",

});

// 區塊：生活風格提案
var projectSwiper = new Swiper('.projectSwiper', {
  // navigation: {
  //   nextEl: ".life-next-btn",
  //   prevEl: ".life-prev-btn",
  // },
  breakpoints: {
    768: {
        //一個畫面顯示 1 個內容
        slidesPerView: 1,
        // allowSlideNext: false, // 禁用滑動
        // allowSlidePrev: false, // 禁用滑動
    },
    992: {
        slidesPerView: 4,
    },
  },
  // spaceBetween: 24,
  loop: "infinite",

});

// 文章頁會員內容解鎖
var collapseElement = document.getElementById('collapseMemberonly');
var lockElement = document.getElementById('toggleMask');
var maskElement = document.getElementById('content-mask');

 // 當內容展開時隱藏按鈕
collapseElement.addEventListener('show.bs.collapse', function(){
  lockElement.style.display = 'none';
  maskElement.style.display = 'none';
});

// 當內容隱藏時顯示按鈕
collapseElement.addEventListener('hide.bs.collapse', function(){
  lockElement.style.display = 'block';
});
