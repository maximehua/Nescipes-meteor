import { Meteor } from 'meteor/meteor';
import { Recipes } from '../imports/api/recipes.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (Recipes.find().count() === 0) {
		Recipes.insert({
			name : 'Crousti crémeux saumon',
			id : "01",
			ingredients:["Pan Crust","Cream","Mozarella","Eggs","Leak"],
			illu:"crousticremeux.jpg",
			url:"https://www.facebook.com/ChefClub.tv/videos/1408368609187748/",
		});
		Recipes.insert({
			name : 'Soupe gourmande',
			id : "02",
			illu:"soupegourmande.jpg",
			ingredients:["Bacon","Zucchini","Onions","Mozarella","Boursin"],
			url:"https://www.facebook.com/ChefClub.tv/videos/1393093190715290/",
		});
		Recipes.insert({
			name : 'Raclette revisitée',
			id : "03",
			illu:"racletterevisitee.png",
			ingredients:["Potatoes","Bacon Strips","Raclette","Mozarella","Boursin"],
			url : "https://www.facebook.com/ChefClub.tv/videos/1375633615794581/",
		});
		Recipes.insert({
			name : 'CAMEMBERT SURPRISE',
			id : "04",
			ingredients:["Pan crust","Potatoes","Bacon","Onions","Camembert","Eggs"],
			url : "https://www.facebook.com/ChefClub.tv/videos/1334905519867391/",
		});

		Recipes.insert({
			name : 'TARTE MOZZA GOURMANDE',
			id : "05",
			ingredients: ["Pizza crust","Mozzarella","Ham","Tomatoes","Oregano"],
			url : "http://www.chefclub.tv/recette-tomate-mozzarella-gourmande/",
			illu : "TarteTomateMozza.png",
		});
		Recipes.insert({
			name : 'BEIGNET HACHIS PARMENTIER',
			id : "06",
			ingredients: ["Potatoes","Minced beef","Mustard","Tomatoes","Onions","Garlic","Comté","Eggs","Parsil"],
			url : "http://www.chefclub.tv/recette-beignets-hachis-parmentier/",
			illu : "BeignetHachisParmentier.png",
		});
		Recipes.insert({
			name : 'CUPCAKE KIRI',
			id : "07",
			ingredients: ["Potatoes","Bacon Strips","Onions","Grated Cheese","Eggs"],
			url : "http://www.chefclub.tv/recette-cupcake-kiri/",
			illu : "CupcakesKiri.png",
		});
		Recipes.insert({
			name : 'COURONNE MEDITERRANEENNE',
			id : "08",
			ingredients: ["Pan crust","Pesto","Zucchini","Tomatoes","Mozzarella","Eggs","Oregano"],
			url : "http://www.chefclub.tv/recette-couronne-mediterraneenne/",
			illu : "CouronneMediterraneenne.png",
		});
		Recipes.insert({
			name : 'GATEAU DE CANNELLONI',
			id : "09",
			ingredients: ["Cannelloni","Minced beef","Tomato sauce","Onions","Garlic","Tomatoes", "Parmesan cheese"],
			url : "http://www.chefclub.tv/recette-gateau-de-cannelloni/",
			illu : "GateauCannelloni.png",
		});
		Recipes.insert({
			name : 'ROSTI ROULE',
			id : "10",
			ingredients: ["Potatoes","Ham","Carrot","Boursin","Grated cheese","Eggs", "Chive"],
			url : "http://www.chefclub.tv/recette-rosti-roule-gratine/",
			illu : "RostiRouleGratin.png",
		});
		Recipes.insert({
			name : 'TARTE FLEUR',
			id : "11",
			ingredients: ["Pan crust","Cream","Mustard","Mozzarella","Zucchini","Carrot"],
			url : "vide",
			illu : "TarteFleur.png",
		});
		Recipes.insert({
			name : 'POULET TERIYAKI SAUCE CARAMEL',
			id : "12",
			ingredients: ["Rice","Chicken","Soy Sauce","Pineapple"],
			url : "vide",
			illu : "PouletTeriyaki.png",
		});
		Recipes.insert({
			name : 'CUPCAKES LASAGNE',
			id : "13",
			ingredients: ["Lasagna","Tomato Sauce","Onions","Garlic","Mozarella","Basil"],
			url : "vide",
			illu : "CupcakeLasagne.png",
		});
		Recipes.insert({
			name : 'COURGETTE COEUR TENDRE',
			id : "14",
			ingredients: ["Zucchini","Parmesan","Eggs","Beer","Mozarella","Basil"],
			url : "vide",
			illu : "CourgetteTendre.png",
		});
		Recipes.insert({
			name : 'POULET RIZ PAPRIKA',
			id : "15",
			ingredients: ["Rice","Chicken","Onions","Garlic","KubOr","Paprika","Persil"],
			url : "vide",
			illu : "PouletPaprika.png",
		});
		Recipes.insert({
			name : 'ROULÉ POULET',
			id : "16",
			ingredients: ["Lasagna","Chicken","Mozarella","Eggs","Persil","Bread crumbs","Persil"],
			url : "vide",
			illu : "RoulePoulet.png",
		});
		Recipes.insert({
			name : 'POULET PARMESAN',
			id : "17",
			ingredients: ["Chicken","Mozarella","Parmesan cheese","Tomato sauce","Eggs","Bread crumbs"],
			url : "vide",
			illu : "PouletParmesan.png",
		});
		Recipes.insert({
			name : 'RIZ CANTONAIS',
			id : "18",
			ingredients: ["Rice","Bacon slice","Soy sauce","Onions","Eggs"],
			url : "vide",
			illu : "RizCantonais.png",
		});
		Recipes.insert({
			name : 'PATES CARBONARA',
			id : "19",
			ingredients: ["Pasta","Bacon","Cream","Onions","Parmesan cheese","Eggs"],
			url : "vide",
			illu : "PateCarbo.jpg",
		});
		Recipes.insert({
			name : 'SALADE POULET PESTO',
			id : "20",
			ingredients: ["Pasta","Chicken","Pesto","Tomato","Parmesan cheese","Garlic","Basil"],
			url : "vide",
			illu : "PouletPestoSal",
		});
		Recipes.insert({
			name : 'PATES BASQUAISE',
			id : "21",
			ingredients: ["Pasta","Bacon","Tomato Sauce","Onions","Kubor","Paprika","Bouquet garni"],
			url : "vide",
			illu : "PateBasquaise.jpg",
		});
		Recipes.insert({
			name : 'PATES BOLOGNAISE',
			id : "22",
			ingredients: ["Pasta","Minced Beef","Tomato Sauce","Onions","Parmesan","Carrot"],
			url : "vide",
			illu : "SpaghettoBolognaise.jpeg",
		});
		Recipes.insert({
			name : 'SALADE PARMESANE',
			id : "23",
			ingredients: ["Pasta","Ham","Pesto","Onions","Garlic","Tomato","Parseman cheese","Basil"],
			url : "vide",
			illu : "SaladeParmesane.jpg",
		});
		Recipes.insert({
			name : 'POULET CURRY',
			id : "24",
			ingredients: ["Potatoes","Rice","Chicken","Curry","Cream","Onions","Pepper Bell"],
			url : "vide",
			illu : "Poulet curry.jpg",
		});
		Recipes.insert({
			name : 'PATES CHAMPETRE',
			id : "25",
			ingredients: ["Pasta","Cream","Zucchini","Onions","Garlic","Carrots","Boursin","Kubor"],
			url : "vide",
			illu : "PateChampêtre.jpg",
		});
		Recipes.insert({
			name : 'POULET BASQUAISE',
			id : "26",
			ingredients: ["Rice","Chicken","Tomato sauce","Onions","Garlic","Mushrooms","Pepper Bell","Bouquetgarni"],
			url : "vide",
			illu : "PouletBasquaise.jpg",
		});
		Recipes.insert({
			name : 'PATES FORESTIÈRE',
			id : "27",
			ingredients: ["Pasta","Chicken","Cream","Onions","Mushrooms","Grated cheese","Kubor"],
			url : "vide",
			illu : "PateForestiere.jpeg",
		});
		Recipes.insert({
			name:'PATES SAVOYARDE',
			id:"28",
			illu:"PateRaclette.jpg",
			ingredients:["Pasta","Bacon","Cream","Onions","Raclette"],
			url : "",
		});
		Recipes.insert({
			name : 'PIZZETAS SAUCCISSE ROMARIN CITRON',
			id : "29",
			ingredients: ["Pizza crust","Sausage","Lemon","Rosemary"],
			url : "vide",
			illu : "Pizettas.png",
		});
		Recipes.insert({
			name : 'CREME FOUETTE SAUMON FUME',
			id : "30",
			ingredients: ["Salmon","Aneth","Sour cream","Lemon"],
			url : "vide",
			illu : "SaumonAneth.png",
		});
		Recipes.insert({
			name : 'DIP DE FROMAGE FRAIS ET PETITS POIS',
			id : "31",
			ingredients: ["Lemon","Green peas","Ricotta","Bread","Olive oil","Oregano"],
			url : "vide",
			illu : "DipsFromageFraisPetitsPois.png",
		});
		Recipes.insert({
			name : 'CÉLERI AU SAUMON FUMÉ',
			id : "32",
			ingredients: ["Salmon","Yoghourt","Celery","Curry","Olive oil"],
			url : "vide",
			illu : "Celeriausaumon.png",
		});
		Recipes.insert({
			name : 'ABRICOTS FARCIS',
			id : "33",
			ingredients: ["Apricot","Blackpudding"],
			url : "vide",
			illu : "Abricotsfarcies.png",
		});
		Recipes.insert({
			name : 'ASPERGES RÔTIES AU JAMBON',
			id : "34",
			ingredients: ["Asparagus","Ham"],
			url : "vide",
			illu : "AspergeRotie.png",
		});
		Recipes.insert({
			name : 'FOIE GRAS CHAUD À LA GRIOTTE',
			id : "35",
			ingredients: ["Cherry","Foie gras","Balsamic vinegar"],
			url : "vide",
			illu : "FoieGrasCerise.png",
		});
		Recipes.insert({
			name : 'SASHIMI DE THON À LA PASTÈQUE',
			id : "36",
			ingredients: ["Soy Sauce","Olive oil","Red tuna","Watermelon"],
			url : "vide",
			illu : "SashimiThonPasteque.png",
		});
		Recipes.insert({
			name : 'TARTARE DE SAINT-JACQUES ET FOIE GRAS',
			id : "37",
			ingredients: ["Avocado","Foie gras","Scallop","Green lemon","Olive oil"],
			url : "vide",
			illu : "SashimiThonPasteque.png",
		});
		Recipes.insert({
			name : 'CRÈME DE CHOU-FLEUR CARAMÉLISÉ',
			id : "38",
			ingredients: ["Cauliflower","Butter"],
			url : "vide",
			illu : "CremeChouxFleurCaramel.png",
		});
		Recipes.insert({
			name : 'GASPACHO AUX ASPERGES',
			id : "39",
			ingredients: ["Aspargus","Ham","Olive oil"],
			url : "vide",
			illu : "Gaspachoauxasperges.png",
		});
		Recipes.insert({
			name : 'CRÈME DE CHOU-FLEUR, HUILE DE SÉSAME',
			id : "40",
			ingredients: ["Cauliflower","Cream","Sesame seed", "Sesame oil"],
			url : "vide",
			illu : "ChouFleurSesame.png",
		});
		Recipes.insert({
			name : 'GASPACHO DE COURGETTES AU BASILIC',
			id : "41",
			ingredients: ["Zucchini","Basil","Pesto", "Olive oil"],
			url : "vide",
			illu : "GaspachoCourgetteBasilic.png",
		});
		Recipes.insert({
			name : 'CREME DE POTIRON A LA NOISETTE',
			id : "42",
			ingredients: ["Hazelnuts","Pumpkin","Cream", "Hazelnut oil"],
			url : "vide",
			illu : "CremePotironNoisette.png",
		});
		Recipes.insert({
			name : 'BOUILLON REPAS/BOEUF, MOUTARDE',
			id : "43",
			ingredients: ["Tomatoes","Minced beef","Chicken broth", "Mustard", "Pasta", "Thyme"],
			url : "vide",
			illu : "BOUILLONBOEUFMOUTARDE.png",
		});
		Recipes.insert({
			name : 'BOUILLON REPAS/POULET COURGETTE',
			id : "44",
			ingredients: ["Basil","Zucchini","Chicken","Chicken broth","Green onions"],
			url : "vide",
			illu : "BouillonpouletCourgette.png",
		});
	}
});
