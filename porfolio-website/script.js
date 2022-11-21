function classToggle() {
  let navs = document.querySelectorAll(".nav-links");

  navs.forEach((nav) => nav.classList.toggle("active"));
  //   console.log(navs);
}
document.querySelector(".nav-icon").addEventListener("click", classToggle);
