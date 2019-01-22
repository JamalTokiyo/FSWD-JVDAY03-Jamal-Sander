function addToCart(itemID) {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(itemID));
  li.setAttribute("id", itemID);
  li.setAttribute("class", "cartItem");
  li.onclick = function() { this.parentNode.removeChild(this) };
  ul.appendChild(li);
}

function createItems() {
	var container = document.getElementById("itemContainer");
	var desiredItemCount = 40;
	var productNames = ["A shoe", "A horse"]
	for(itemCount = 0; itemCount<=desiredItemCount; itemCount++) {
		var item = document.createElement("div");
		var span = document.createElement("span")
		if(itemCount<productNames.length) {
			span.appendChild(document.createTextNode(productNames[itemCount]));
			item.setAttribute("id", productNames[itemCount]);
		} else {
			span.appendChild(document.createTextNode("Placeholder"));
			item.setAttribute("id", "item" + itemCount);
		}
		item.appendChild(span);
		item.setAttribute("class", "buyableObject");
		item.setAttribute("onClick", "addToCart(this.id);")
		container.appendChild(item);
	}
}

createItems();

function checkout() {
	var cartItems = document.getElementsByClassName("cartItem");
	var itemString = cartItems[0].getAttribute("id");
	for(i = 1; i < cartItems.length; i++) {
		itemString = itemString + ", " + cartItems[i].getAttribute("id");
	}
	alert("Checkout successful \nItems bought: " + itemString);
}