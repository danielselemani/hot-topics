// GET THE REFERENCES
const container = document.querySelector("#content");
const links = document.querySelectorAll(".nav-link");
let url = "./partials/home.html";

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
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

// CALL loadContent WITH THE CURRENT VALUE OF url
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
const selectContent = (event) => {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  links.forEach((link) => {
    link.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  loadContent(href);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER
links.forEach((link) => {
  link.addEventListener("click", selectContent);
});