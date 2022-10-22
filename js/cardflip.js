const card = document.querySelectorAll(".card__inner"); // selecting the card

function flipCard() {
  this.classList.toggle('is-flipped'); // function to flip the card
}
card.forEach((card) => card.addEventListener("click", flipCard)); // seeing which card has been clicked, so it knows which one to flip