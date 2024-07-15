//----------------- add recipe ---------------------

let addRecipe = {
  id: 0,
  name: "manchuriyan",
  ingredients: [
    "solt",
    "onions",
    "garlic",
    "ginger",
    "chilly sauce",
    "soya sauce",
    "cabbage",
  ],
  price: 100,
  quntity: 1,
  avalibility: "yes",
  category: "break-fast",
};
function addrecipe(obj) {
  try {
    let data = JSON.parse(localStorage.getItem("recipe"));
    obj.id = data.length + 1;
    data.push(obj);
    localStorage.setItem("recipe", JSON.stringify(data));
    console.log("Added data :", data);
  } catch (error) {
    console.warn(error);
  }
}
addrecipe(addRecipe);

//----------------------- Edit recipe -----------------------

function editItem(price) {
  try {
    let data = JSON.parse(localStorage.getItem("recipe"));

    // i  want to edit vadapav price

    let edited = (data.find((value) => value.id === 2).price = price);
    localStorage.setItem("recipe", JSON.stringify(data));
    console.log("Edited price :", edited);
  } catch (error) {
    console.warn(error);
  }
}
editItem(60);

//-------------------- deleting recipe -------------------------

function deletingRecipe(id) {
  try {
    let data = JSON.parse(localStorage.getItem("recipe"));
    let deleted = data.filter((value) => value.id !== id);
    localStorage.setItem("recipe", JSON.stringify(deleted));
    console.log("deleted Array :", deleted);
  } catch (error) {
    console.warn(error);
  }
}
deletingRecipe(6);

// ------------------------- listing in table -----------------------

function listingInTable() {
  try {
    let data = JSON.parse(localStorage.getItem("recipe"));
    console.log(data);
    let str = ''
    data.map((value) => {
       str += `<tr>
          <td>${value.id}</td>
          <td>${value.name}</td>
          <td>${value.ingredients}</td>
          <td>${value.price}</td>
          <td>${value.quntity}</td>
          <td>${value.avalibility}</td>
          <td>${value.category}</td>
      </tr>`;
    });
    
    console.log("listed on document :");
    document.getElementById("tbody").innerHTML = str;
  } catch (error) {
    console.warn(error);
  }
}
listingInTable();

// ------------------------- search item -----------------------

function searchItem(ingredient) {
  try {
    //first try  --- output is given but in saprate basis

    // let data = JSON.parse(localStorage.getItem("recipe"));
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].ingredients.filter((value) => value == ingredient) != "") {
    //     console.log("Recipe is inculed in this item :", data[i].name);
    //   }
    // }

    // secound try --- output is given in array

    let data = JSON.parse(localStorage.getItem("recipe"));
    let search = data.filter((value) => value.ingredients.includes(ingredient));
    let output = search.map((value) => value.name);
    console.log("ingredient included :", output);
  } catch (error) {
    console.log(error);
  }
}
searchItem("potatoes");

// --------------------- catogory ------------------------

function category(str) {
  try {
    let data = JSON.parse(localStorage.getItem("recipe"));
    let output = data.filter((value) => value.category.includes(str));
    let category = output.map((value) => value.name);
    console.log("category :", category);
  } catch (error) {
    console.warn(error);
  }
}
category("dinner");
