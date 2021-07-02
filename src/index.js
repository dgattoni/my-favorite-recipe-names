var recipes = [
  "Ajíaco chileno",
  "Alfajores chilenos",
  "Alfajores de maicena",
  "Anticuchos de carne",
  "Arroz con leche",
  "Barros Luco",
  "Calzones rotos",
  "Carbonada de pollo",
  "Cazuela de Ave",
  "Pastel de choclo"
]

function myRandomRecipe() {
  var item = recipes[Math.floor(Math.random()*recipes.length)];
  return item
}

module.exports = {
  all: recipes,
  random: myRandomRecipe
 }
