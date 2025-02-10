export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const offset = 80; // Height of the fixed navbar
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
