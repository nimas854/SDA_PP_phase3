const navLinks = document.querySelectorAll(".nav-link");
const underline = document.querySelector(".underline");

// Map section ids to nav links
const sectionMap = {
  PP: navLinks[0],
  aboutme: navLinks[1],
  H: navLinks[2],
  experience: navLinks[3],
  ambition: navLinks[4],
};

function moveUnderline(element) {
  const rect = element.getBoundingClientRect();
  const ulRect = element.closest("ul").getBoundingClientRect();
  underline.style.left = `${rect.left - ulRect.left}px`;
  underline.style.width = `${rect.width}px`;
  underline.style.top = `${
    element.offsetTop + element.offsetHeight - underline.offsetHeight
  }px`;
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    moveUnderline(link);
  });
});

// Set initial position of underline
const activeLink = document.querySelector(".nav-link.active");
if (activeLink) {
  moveUnderline(activeLink);
}

// Move underline on scroll to the nav button of the section in view
const sections = ["PP", "aboutme", "H", "experience", "ambition"];
window.addEventListener("scroll", () => {
  let currentSection = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 90 && rect.bottom > 90) {
        currentSection = id;
        break;
      }
    }
  }
  const navBtn = sectionMap[currentSection];
  if (navBtn) moveUnderline(navBtn);
});
