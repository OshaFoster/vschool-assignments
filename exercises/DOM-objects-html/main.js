var menuList = [

	{
		item: "Salad",
		price: 6.50,
		description: "Make your own"
	},
	{
		item: "Pizza",
		price: 9.50,
		description: "Loaded"
	},

	{

		item: "Pasta",
		price: 10.00,
		description: "Cream Sauce"
	},

]



function MenuItem(item, price, description) {
	this.item = item;
	this.price = price;
	this.description = description;
}



var meatPizza = new MenuItem("Meat Pizza", 9.00, "Pepperoni");
var potatoSal = new MenuItem("Potato Salad", 7.00, "Like Grandmas");
var asianWrap = new MenuItem("Wrap", 8.49, "Asian Style");

menuList.push(meatPizza, potatoSal, asianWrap);
document.getElementById("list").innerHTML = ""

for (var i = 0; i < 3; i++) {

	document.getElementById("list").innerHTML += "<li>" + menuList[i].item + "</li>"
	
	document.getElementById("list").innerHTML += "<l>" + "$" + menuList[i].price + "<br>" + "</l>"
	
	document.getElementById("list").innerHTML += "<l>" + "Description: " + menuList[i].description + "</l>"



}





console.log(menuList);
