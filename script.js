const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");

    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
