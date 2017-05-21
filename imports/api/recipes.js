import { Mongo } from 'meteor/mongo';

// export const Recipes = Mongo.Collection('MONGO_URL');
export const Recipes = new Mongo.Collection('recipes');
// console.log(Recipes);
