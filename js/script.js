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
let countDownDate = new Date("Dec 31, 2026 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let d = countDownDate - now;
  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((d % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (d < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("deal-shop").style.pointerEvents = "none";
  }
}, 1000);

// faq section 
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

question.forEach((element,index)=>{
element.onclick=()=>{
  // answer.forEach((ans)=>{ ans.classList.remove('active')})
  answer[index].classList.toggle('active');
}
})
