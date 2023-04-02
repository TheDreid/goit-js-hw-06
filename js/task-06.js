// const input = document.getElementById("validation-input");

const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const validLength = parseInt(input.dataset.length);
  const currentLength = input.value.length;

  if (currentLength === validLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
