function addToCart(itemID) {
	//Find list
	var ul = document.getElementById("list");
	//Create element
	var li = document.createElement("li");
	//Add text to element
	li.appendChild(document.createTextNode(itemID));
	//Set ID and Class
	li.setAttribute("id", itemID);
	li.setAttribute("class", "cartItem");
	//Add delete on click function
	li.onclick = function() { this.parentNode.removeChild(this) };
	//Add element to list
	ul.appendChild(li);
}

function createItems() {
	//Find container
	var container = document.getElementById("itemContainer");
	//Number of items to be created
	var desiredItemCount = 100;
	//Names of items
	var productNames = ["Shoe", "Horse", "Carrot", "10 Euro Bill", "Lunar Land", "Cheescake"]
	//For loop that iterates as many times as desired items
	for(itemCount = 0; itemCount<=desiredItemCount; itemCount++) {
		//Creates div and span
		var item = document.createElement("div");
		var span = document.createElement("span")
		//If there is a name that can be used use it
		if(itemCount<productNames.length) {
			//Add name as text to span
			span.appendChild(document.createTextNode(productNames[itemCount]));
			//Set ID as product name
			item.setAttribute("id", productNames[itemCount]);
		} else { //If there are no product names left, use a placeholder
			span.appendChild(document.createTextNode("Placeholder"));
			item.setAttribute("id", "item" + itemCount);
		}
		//Add the span to the div
		item.appendChild(span);
		//Set class
		item.setAttribute("class", "buyableObject");
		//Set onclick action
		item.setAttribute("onClick", "addToCart(this.id);")
		//Add div to container
		container.appendChild(item);
	}
}

createItems();

function checkout() {
	//Get all li items from shopping cart
	var cartItems = document.getElementsByClassName("cartItem");
	//Get IDs of li (product name) and store in a string
	var itemString = cartItems[0].getAttribute("id");
	for(i = 1; i < cartItems.length; i++) {
		itemString = itemString + ", " + cartItems[i].getAttribute("id");
	}
	//Alert popup with items bought
	alert("Checkout successful \nItems bought: " + itemString);
}