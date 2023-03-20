const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsItem = ingredients.map((ingridient) => {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.textContent = ingridient;
  ingredientsItemRef.classList.add("item");
  return ingredientsItemRef;
});

ingredientsRef.append(...ingredientsItem);

console.log(ingredientsRef);
