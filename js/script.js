const container = document.querySelector("#content");
const links = document.querySelectorAll(".nav-link");
let url = "./partials/home.html";

const loadContent = (urlFeed) => {
  fetch(urlFeed)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Content was not found.");
      }
      return response.text();
    })
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => {
      container.innerHTML = `<p class="error-message">Sorry, the content could not be loaded.</p>`;
      console.error(error);
    });
};

loadContent(url);

const selectContent = (event) => {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  links.forEach((link) => {
    link.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  loadContent(href);
};

links.forEach((link) => {
  link.addEventListener("click", selectContent);
});