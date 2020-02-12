const checkOnSubmit = async (e, formId) => {
  e.preventDefault();
  let form;
  let isValid;
  let inputs;
  if (formId) {
    form = formId;
  } else {
    form = e.target.id;
  }

  if (form) {
    inputs = document.querySelectorAll(`#${form} input`);
  }
  // check required here
  try {
    if (inputs) {
      inputs.forEach(input => {
        if (input.required) {
          if (!input.value) {
            input.focus();
            input.blur();
            isValid = false;
          } else {
            if (input.getAttribute("error")) {
              isValid = false;
            } else {
              isValid = true;
            }
          }
        }
      });
    }
    return isValid;
  } catch (err) {
    console.log(err);
  }
};

export default checkOnSubmit;
