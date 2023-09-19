const customSelectModal = document.querySelector(".custom-select-modal");
const selectLabel = customSelectModal.querySelector("p");
const selectBtn = customSelectModal.querySelector("button");
const selectedValue = customSelectModal.querySelector("span");
const optionsList = customSelectModal.querySelectorAll("ul li");

function selectListToggle() {
  // add/remove active class on the container element
  customSelectModal.classList.toggle("active");
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
}

selectBtn.addEventListener("click", selectListToggle);
selectLabel.addEventListener("click", selectListToggle);

optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelectModal.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelectModal.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});
