export function initFormSelects() {
  initFormSelect(document.querySelector('.custom-select'));
  initFormSelect(document.querySelector('.custom-select-modal'));
}

function initFormSelect(customSelect) {
  const selectBtn = customSelect.querySelector('button');
  const selectBtnLabel = selectBtn.querySelector('span');
  const selectBtnInput = selectBtn.previousElementSibling;
  const optionsList = customSelect.querySelector('ul');
  const optionsListItems = optionsList.querySelectorAll('li');

  let clickOutsideListener;

  function toggleList() {
    const nextIsActive = !customSelect.classList.contains('active');

    // add/remove active class on the container element
    customSelect.classList.toggle('active', nextIsActive);
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute('aria-expanded', `${nextIsActive}`);

    if (nextIsActive) {
      addOutsideClickListener();
    } else {
      removeOutsideClickListener();
    }
  }

  function handleOutsideClick(e) {
    let target = e.target;
    while (target) {
      if (target === optionsList) {
        return;
      }
      target = target.parentNode;
    }
    toggleList();
  }

  function addOutsideClickListener() {
    clickOutsideListener = setTimeout(() => {
      window.addEventListener('click', handleOutsideClick);
    }, 1);
  }

  function removeOutsideClickListener() {
    clearTimeout(clickOutsideListener);
    window.removeEventListener('click', handleOutsideClick);
  }

  selectBtn.addEventListener('click', toggleList);

  optionsListItems.forEach((option) => {
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
      removeOutsideClickListener();
    }

    option.addEventListener('keyup', handler);
    option.addEventListener('click', handler);
  });
}
