function power(val, pow)
{
	if (pow > 0)
	{
		return val * power(val, pow-1);
	}
	else
	{
		return 1;
	}
}