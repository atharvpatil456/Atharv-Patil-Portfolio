// toggle icon bar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
// The querySelectorAll() method returns all elements that matches a CSS selector(s).
// The querySelectorAll() method returns a NodeList.
// The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid
console.log("Atharv");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
        console.log(links);
      });
    }
  });
  // Scroll navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // toggle icon when it click
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Sticky navbar

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.icond ,.skill-container,.portfolio-box,.contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img ,.heading", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
ScrollReveal().reveal(".icond", { origin: "left" });

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer!", "Android Developer!", "Java Developer!"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// JavaScript function to toggle dark/light mode
function toggleDarkLightMode() {
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    // Switch to Light Mode
    root.classList.remove("dark");
    // root.classList.remove('')
  } else {
    // Switch to Dark Mode
    root.classList.add("dark");
  }
}

// Add an event listener to a button or element that toggles the mode
const modeToggleBtn = document.getElementById("darkmode"); // Replace with your actual button ID or element
modeToggleBtn.addEventListener("click", toggleDarkLightMode);

// about me
const typedq = new Typed(".multiple", {
  strings: ["Web Developer!", "Android Developer!", "Java Developer!"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
