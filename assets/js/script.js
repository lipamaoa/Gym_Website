fetch("../components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Include Footer
fetch("../components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });


  //To show images when hovering in classes

const items = document.querySelectorAll(".hover-item");
const background = document.querySelector(".background-image");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const imageUrl = item.getAttribute("data-image");
    background.style.backgroundImage = `url(${imageUrl})`;
    background.style.opacity = 1;
  });

  item.addEventListener("mouseleave", () => {
    background.style.opacity = 0;
  });
});
