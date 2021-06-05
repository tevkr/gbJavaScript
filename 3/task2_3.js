let products = [100, 150, 250, 14];
function countBasketPrice(products) {
	return products.reduce(function(prev, curr) { return prev + curr;});
}