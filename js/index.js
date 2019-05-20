let contactVisibility = false;
const emailButton = document.getElementById("email-button");
const phoneButton = document.getElementById("phone-button");
const contactDisplay = document.getElementById("contact-display");

function toggleContactVisibility() {
  console.log("button clicked!");
  console.log("contact-display", contactDisplay);
  console.log("PREV VISIBILITY", contactVisibility);
  contactVisibility = !contactVisibility;
  if (contactVisibility) {
    contactDisplay.classList.add("visible");
  } else {
    contactDisplay.classList.remove("visible");
  }
  console.log("NEXT VISIBILITY", contactVisibility);
  console.log("CLASSLIST", contactDisplay.classList);
}
