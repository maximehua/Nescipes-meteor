Meteor.startup(function () {

  //DB Ingredients

  if (Ingredients.find().count() === 0) {
    Ingredients.insert({
      name : 'Beef',
      id : "01",
      alias:["boeuf", "viande hachée", "boeuf haché"],
      active: false,
      illu:"/images/beef.png",
    });
    Ingredients.insert({
      name : 'Chicken',
      id : "02",
      alias:["poulet", "filet de poulet"],
      active: false,
      illu:"/images/chicken.png",
    });
    Ingredients.insert({
      name : 'Pork',
      id : "03",
      active: false,
      alias:["côtes de porc", "porc", "lardons", "bacon", "lard"],
      illu:"/images/pork.jpg",
    });
    Ingredients.insert({
      name : 'Salmon',
      id : "04",
      active: false,
      alias:["saumon", "truite"],
      illu:"/images/salmon.png",
    });
    Ingredients.insert({
      name : 'Tofu',
      id : "05",
      active: false,
      alias:["tofu"],
      illu:"/images/tofu.jpg",
    });
    Ingredients.insert({
      name : 'Tomatoes',
      id : "06",
      active: false,
      alias:["tomates"],
      illu:"/images/tomato.png",
    });
    Ingredients.insert({
      name : 'Onions',
      id : "07",
      active: false,
      alias:["oignons"],
      illu:"/images/onions.png",
    });
    Ingredients.insert({
      name : 'Mushrooms',
      id : "08",
      active: false,
      alias:["champignons"],
      illu:"/images/mushrooms.png",
    });
    Ingredients.insert({
      name : 'Bell Peppers',
      id : "09",
      active: false,
      alias:["poivrons"],
      illu:"/images/peppers.jpg",
    });
    Ingredients.insert({
      name : 'Zucchini',
      id : "10",
      active: false,
      alias:["concombre"],
      illu:"/images/zucchini.jpg",
    });
    Ingredients.insert({
      name : 'Rice',
      id : "11",
      active: false,
      alias:["riz"],
      illu:"/images/rice.png",
    });
    Ingredients.insert({
      name : 'Potatoes',
      id : "12",
      active: false,
      alias:["Pomme de terre","Patates"],
      illu:"/images/potatoes.png",
    });
    Ingredients.insert({
      name : 'Pasta',
      id : "13",
      active: false,
      alias:["Pâtes","Spaghetti","Penne","Pâtes","Pasta"],
      illu:"/images/pasta.png",
    });
    Ingredients.insert({
      name : 'Quiche Dough',
      id : "14",
      active: false,
      alias:["pâte à tarte","pâte feuilletée", "pâte brisée"],
      illu:"/images/quiche.png",
    });
    Ingredients.insert({
      name : 'Pizza Dough',
      id : "15",
      active: false,
      alias:["pâte à pizza"],
      illu:"/images/pizza.png",
    });
  }
});
