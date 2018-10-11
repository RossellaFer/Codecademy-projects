const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  get appetizers() {
  return `${this._courses.appetizers}`;
},
  
  set appetizers(newAppetizer) {
 this._courses.appetizers = newAppetizer;
  },
  
  get mains(){
  return `${this._courses.mains}`;
},
  
  set mains(newMain) {
 this._courses.mains = newMain;
  },
  
  get desserts(){
  return `${this._courses.desserts}`;
},
  
  set dessert(newDessert) {
 this._courses.desserts = newDessert;
  },
  
  get courses() {
  	return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
},
  
  addDishToCourse (courseName, dishName, dishPrice) {
  	let dish = {
  		name: dishName,
  		price: dishPrice
		}
 		if (courseName === "appetizers") {
  		this._courses.appetizers.push(dish);
 		}
 		else if (courseName === "mains") {
  		this._courses.mains.push(dish);
 		}
   	else if (courseName === "desserts") {
  		this._courses.desserts.push(dish);
 		}
	},
  
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomNumber = Math.floor(Math.random() * dishes.length);
   return dishes[randomNumber];
  },
  
 getRandomMeal() {
    let appetizer = menu.getRandomDishFromCourse("appetizers");
    let main = menu.getRandomDishFromCourse("mains");
    let dessert = menu.getRandomDishFromCourse("desserts");
  let price = appetizer.price + main.price + dessert.price;
   console.log(`You have ordered:\n\n- ${appetizer.name} \n- ${main.name} and \n- ${dessert.name}.\n\nThe total price of your meal is ${price} dollars.`);
  }
}
//Adding the appetizers
menu.addDishToCourse("appetizers", "fried tofu", 5);
menu.addDishToCourse("appetizers", "stuffed mushrooms", 4);
menu.addDishToCourse("appetizers", "lobster a la bisque", 12);

//Adding the mains
menu.addDishToCourse("mains", "roasted chicken", 20);
menu.addDishToCourse("mains", "English breakfast", 10);
menu.addDishToCourse("mains", "salmon bagel", 6);

menu.addDishToCourse("desserts", "torta mimosa", 8);
menu.addDishToCourse("desserts", "affogato", 4);
menu.addDishToCourse("desserts", "tiramisu", 5)

menu.getRandomMeal();