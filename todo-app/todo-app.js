const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes("with")) {
    paragraph.remove();
  }
});
