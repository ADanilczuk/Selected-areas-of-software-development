function czy_podzielna(x)
{
    suma = 0;
    let y = x;
    let a;
    if (x < 10)
    {
        return true;
    }
    while (0 < y)
    {
        a = y % 10;
        if (a == 0)
        { return false; }
        if (x % a != 0)
        { return false; }
        y = (y - a)/10;
        suma += a;
    }  
    if (x % suma == 0)
    {
        return true;
    }
    return false;
}

function podzielne()
{
    let wynik = [];
    let i = 1;
    while (i < 100000)
    {
        if (czy_podzielna(i))
        {
            wynik.push(i)
        }
        i++;
    }
    return wynik;
}

console.log(podzielne());