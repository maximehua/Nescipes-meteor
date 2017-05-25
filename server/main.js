import { Recipes } from '../imports/api/recipes.js';
import { Ingredients } from '../imports/api/ingredients.js';

Meteor.startup(function () {

  //utiliser les alias

  if (Ingredients.find().count() === 0) {
		Ingredients.insert({
			name : 'Beef',
			id : "01",
  		alias:[""],
      active: false,
			illu:"/images/beef.png",
		});
    Ingredients.insert({
			name : 'Chicken',
			id : "02",
      alias:[],
      active: false,
			illu:"/images/chicken.png",
		});
    Ingredients.insert({
			name : 'Pork',
			id : "03",
      active: false,
			alias:[""],
			illu:"/images/pork.png",
		});
    Ingredients.insert({
      name : 'Salmon',
      id : "04",
      active: false,
      alias:[""],
      illu:"/images/salmon.png",
    });
    Ingredients.insert({
      name : 'Tofu',
      id : "05",
      active: false,
      alias:[""],
      illu:"/images/tofu.png",
    });
    Ingredients.insert({
      name : 'Tomatoes',
      id : "06",
      active: false,
      alias:[""],
      illu:"/images/tomato.png",
    });
    Ingredients.insert({
      name : 'Onions',
      id : "07",
      active: false,
      alias:[""],
      illu:"/images/onions.png",
    });
    Ingredients.insert({
      name : 'Mushrooms',
      id : "08",
      active: false,
      alias:[""],
      illu:"/images/mushrooms.png",
    });
    Ingredients.insert({
      name : 'Bell Peppers',
      id : "09",
      active: false,
      alias:[""],
      illu:"/images/peppers.png",
    });
    Ingredients.insert({
      name : 'Zucchini',
      id : "10",
      active: false,
      alias:[""],
      illu:"/images/zucchini.png",
    });
    Ingredients.insert({
      name : 'Rice',
      id : "11",
      active: false,
      alias:["Riz"],
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
      alias:["Pâte à tarte","Pâte feuilletée"],
      illu:"/images/quiche.png",
    });
    Ingredients.insert({
      name : 'Pizza Dough',
      id : "15",
      active: false,
      alias:["Pâte à pizza"],
      illu:"/images/pizza.png",
    });
  }

  //code to fill Recipes DB with Marmiton website

    console.log("started");

    var Crawler = require('crawler');

    var c = new Crawler({
        rateLimit: 1000,
        maxConnections: 1,
        skipDuplicates : true,
        jQuery: {
            name: 'cheerio',
            options: {
                normalizeWhitespace: true,
            }
        },
        callback: Meteor.bindEnvironment(function(error, res, done) {
          if(error) {
            console.log(error);
          }
          else if (res.request.uri.href.search("recettes") >= 0) {
            console.log("c'est une recette");

              var url = res.request.uri.href;
              let $ = res.$;
              var recette = {};

              recette['name'] = $(".m_title .item span").text();

              recette['illu'] = $(".m_content_recette_illu img").attr("src");
              recette['url'] = url;
              recette['durees'] = {
                preparation : $(".m_content_recette_info .preptime").text().trim(),
                cuisson : $(".m_content_recette_info .cooktime").text().trim()
              };

              var tags = $(".m_bloc_cadre>.m_content_recette_breadcrumb").text();
              recette['tags'] = tags.split(" - ");
              _.each(recette['tags'], function(element,index){
                recette['tags'][index] = element.trim();
              });

              recette['note'] = 0;
              _.each($(".m_content_recette_note img"), function(element){
                if (element.attribs.class==="on") {recette['note']++}
              });

              $(".m_content_recette_ingredients span").remove();
              recette['ingredients'] = $(".m_content_recette_ingredients").text().trim();
              recette['ingredients'] = recette['ingredients'].split("-");

              _.each(recette['ingredients'], function(element,index){
                recette['ingredients'][index] = element.trim();
                if (recette['ingredients'][index] === "") {
                  delete recette['ingredients'][index];
                }
              });

              recette['ingredients'] = recette['ingredients'].filter(String);
              recette['recette'] = $(".m_content_recette_todo").text().trim();

              if (typeof recette['illu']!= 'undefined'){
                Meteor.call("update",recette);
              }
              else {
                console.log('Y a pas dimage');
              }

              var listLinks = $('a').toArray();
              var queue = [];

              _.each(listLinks, function(element){
                if ( typeof element.attribs.href !== 'undefined') {
                  if (element.attribs.href.search("org/recettes/recette") >= 0 ) {
                    queue.push(element.attribs.href);
                  }
                }
              });

              c.queue(queue)
            }
            else {
              console.log("ce n'est pas une recette");
            }
            done();
          })
        })

      c.queue([
        'http://www.marmiton.org/recettes/recette_tarte-tatin-a-la-papaye_30690.aspx'
      ])
});


Meteor.methods({
    update : function(recette){

        Recipes.update(
            { url: recette.url},
            { $set: recette},
            { upsert : true,}
            );

    },
})
