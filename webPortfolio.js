document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (category === "all" || project.classicList.contains(category)) {
      project.computedStyleMap.display = "block";
    } else {
      project.computedStyleMap.display = "none";
    }
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent =
    "Message sent successfully!";
  this.requestFullscreen();
});
