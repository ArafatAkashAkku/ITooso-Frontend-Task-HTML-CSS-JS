// navbar side menu toggle event
const menuBar = document.getElementById("menubar");
const sideBar = document.getElementById("sidebar");
menuBar.onclick = () => {
  if (sideBar.classList.contains("active")) {
    sideBar.classList.remove("active");
    localStorage.setItem("menu-side-bar", "close");
  } else {
    sideBar.classList.add("active");
    localStorage.setItem("menu-side-bar", "open");
  }
};
const mainBody = document.querySelector("main");
mainBody.onclick = () => {
  sideBar.classList.remove("active");
  localStorage.setItem("menu-side-bar", "close");
};
const toggleSideMenuBar = localStorage.getItem("menu-side-bar");
if (toggleSideMenuBar == "open") {
  sideBar.classList.add("active");
} else if (toggleSideMenuBar == "close") {
  sideBar.classList.remove("active");
} else {
  localStorage.removeItem("menu-side-bar");
}

// banners section
var bannerswiper = new Swiper(".banner-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// popular category section
var productswiper = new Swiper(".product-swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// auto update year
const updateYear = document.getElementById("update-year");
updateYear.innerHTML = new Date().getFullYear();

// scroll back to top
const backToTop = document.getElementById("back-to-top");
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");
// window scroll 
window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
  // scroll progress bar
  let cheight = container.offsetHeight - window.innerHeight;
  let cpos = container.getBoundingClientRect();
  let diff = cheight + cpos.top;
  let progress = (diff / cheight) * 100;
  let csswidth = Math.floor(100 - progress);
  highlight.style.width = csswidth + "%";
};
backToTop.onclick = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// reviews section
var reviewswiper = new Swiper(".review-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// animation on scroll
AOS.init();

// cookie set
const cookieBox = document.querySelector(".cookie");
const acceptBtn = document.querySelector(".cookie .right .accept");
const rejectBtn = document.querySelector(".cookie .right .reject");
setTimeout(() => {
  cookieBox.style.visibility = "visible";
}, 5000);
rejectBtn.onclick = () => {
  cookieBox.style.visibility = "hidden";
  setTimeout(() => {
    cookieBox.style.visibility = "visible";
  }, 60000);
};
acceptBtn.onclick = () => {
  document.cookie = "fname=Itooso; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookieBox.classList.add("hide");
  } else {
    alert("Cookie can't be set");
  }
};
let check = document.cookie.indexOf("fname=Itooso");
check != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");

// weekly deals countdown
const countDownDate = new Date("Apr 31, 2024 00:00:00").getTime();
const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const setTimeDown = setInterval(function () {
  let now = new Date().getTime();
  let timerDate = countDownDate - now;
  let days = Math.floor(timerDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timerDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timerDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timerDate % (1000 * 60)) / 1000);
  daysText.innerHTML = days;
  hoursText.innerHTML = hours;
  minutesText.innerHTML = minutes;
  secondsText.innerHTML = seconds;
  if (timerDate < 0) {
    clearInterval(setTimeDown);
    daysText.innerHTML = "00";
    hoursText.innerHTML = "00";
    minutesText.innerHTML = "00";
    secondsText.innerHTML = "00";
  }
}, 1000);

// faq section
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
question.forEach((element, index) => {
  element.onclick = () => {
    // answer.forEach((ans)=>{ ans.classList.remove('active')})
    answer[index].classList.toggle("active");
  };
});
