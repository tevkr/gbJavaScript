'use strict'
function func1(number) 
{
    if (!(number >= 0 && number <= 999)) 
    {
        console.log('Число не входит в интервал [0;999]!');
        return {};
    }
    else 
    {
        return { ones: number%10, tens: Math.floor(number/10)%10, hundreads: Math.floor(number/100)%10 };
    }
}