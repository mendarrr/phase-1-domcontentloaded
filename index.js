// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    const initialText = document.querySelector('p').textContent;
    if (initialText === "JavaScript is so cool. It lets me add text to my page programmatically.") {
      document.querySelector('p').textContent = "This is really cool!";
    }
  });