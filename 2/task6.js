function sum(a, b) {
	return a + b;
}
function diff(a, b) {
	return a - b;
}
function mul(a, b) {
	return a * b;
}
function div(a, b) {
	return a / b;
}
function mathOperation(arg1, arg2, operation)
{
	switch (operation)
	{
		case "+":
			return sum(arg1, arg2);
			break;
		case "-":
			return diff(arg1, arg2);
			break;
		case "*":
			return mul(arg1, arg2);
			break;
		case "/":
			return div(arg1, arg2);
			break;
	}
}