var n = 0;
while (n<101){
	var i = 1;
	var c = 0;
	while (i<101){
		if(n%i==0)
			c++;
		i++;
	}
	if(c==2)
		console.log(n);
	n++;
}