function handlebarsSetup() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', (ingredient) => {return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient.value  + '</li>')})

}
function initForm() {
  var formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += formTemplate()
}

function createRecipe() {
  // event.preventDefault();
  var descriptionText = document.getElementById('description').value
  var ingredientsNodeList = document.getElementsByName('ingredients')
  var nameText = document.getElementById('name').value
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate({name: nameText, ingredients: ingredientsNodeList, description: descriptionText})
}

function displayEditForm() {
  var descriptionText = document.getElementById('recipeDescription').innerText
  var ingredientsNodeList = document.getElementsByName('ingredientsList')
  var nameText = document.getElementById('recipeName').innerText
  var formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  // var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = formTemplate({name: nameText, ingredients: ingredientsNodeList, description: descriptionText})

}
function updateRecipe() {
   createRecipe() 
}
function init() {
  //put any page initialization/handlebars initialization here
  initForm();
  handlebarsSetup();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();

})
