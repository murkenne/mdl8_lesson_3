// Redirect to the details page with the character name in the query string
export function redirectToDetails(characterName) {
  window.location.href = `details.html?name=${encodeURIComponent(characterName)}`;
}

// Make the redirectToDetails function globally accessible for the buttons
window.redirectToDetails = redirectToDetails;

// Event delegation for handling button clicks
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".details-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      const characterName = card.getAttribute("data-character");
      redirectToDetails(characterName);
    });
  });
});
