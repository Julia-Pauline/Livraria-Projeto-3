const livros = require("./data/livros");
const autores = require("./data/autores");
const biblias = require("./data/biblias");
const linguagens = require("./data/linguagens");
const categorias = require("./data/categorias");

module.exports = {
  livros,
  autores,
  biblias,
  linguagens,
  categorias
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };