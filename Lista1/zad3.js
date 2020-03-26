function czy_pierwsza(x)
{
    let k = 2;
    while (k < x)
    {
        if (x % k == 0)
        { return false; }
        k++;
    }  
    return true;
}

function pierwsze()
{
    var wynik = [2];
    let i = 3;
    while (i < 100000)
    {
        if (czy_pierwsza(i))
        {
            wynik.push(i);
        }
        i++;
    }
    return wynik;
}

console.log(pierwsze());
