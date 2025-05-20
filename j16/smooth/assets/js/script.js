window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollWidth = (scrollPosition / docHeight) * 100;
  document.getElementById("scroll-bar").style.width = `${scrollWidth}%`;});
