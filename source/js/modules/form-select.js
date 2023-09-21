export function initFormSelects() {
  initFormSelect(document.querySelector('.custom-select'));
  initFormSelect(document.querySelector('.custom-select-modal'));
}

function initFormSelect(customSelect) {
  const selectBtn = customSelect.querySelector('button');
  const selectBtnLabel = selectBtn.querySelector('span');
  const selectBtnInput = selectBtn.previousElementSibling;
  const optionsList = customSelect.querySelectorAll('ul li');

  function selectListToggle() {
  // add/remove active class on the container element
    customSelect.classList.toggle('active');
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute(
        'aria-expanded',
        selectBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  }

  selectBtn.addEventListener('click', selectListToggle);

  optionsList.forEach((option) => {
    function handler(e) {
    // Click Events
      if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
      // eslint-disable-next-line no-invalid-this
        selectBtnLabel.textContent = this.children[1].textContent;
        // eslint-disable-next-line no-invalid-this
        selectBtnInput.value = this.children[1].textContent;
        customSelect.classList.remove('active');
      }
      // Key Events
      if (e.key === 'Enter') {
      // eslint-disable-next-line no-invalid-this
        selectBtnLabel.textContent = this.textContent;
        // eslint-disable-next-line no-invalid-this
        selectBtnInput.value = this.textContent;
        customSelect.classList.remove('active');
      }
    }

    option.addEventListener('keyup', handler);
    option.addEventListener('click', handler);
  });
}
