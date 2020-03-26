function fib_iter(n)
{
    if (n < 2) return n;
    let i = 2;
    let l1 = 1, l2 = 1;
    let wynik = 1;
    while (i<n)
    {
        wynik = l1 + l2;
        l1 = l2;
        l2 = wynik;
        i++;
    }
    return wynik;
}

function fib_rek(n)
{
    if (n < 2) return n;
    return fib_rek(n-1) + fib_rek(n-2);
}

function check_rek()
{
    console.time("Fibonacci rekurencyjnie");
    wynik = [];
    for (i = 10; i <= 35; i++)
    {    wynik.push(fib_rek(i));
    }
    console.timeEnd("Fibonacci rekurencyjnie");
    console.log(wynik);
}

function check_iter()
{
    console.time("Fibonacci iteracyjnie");
    wynik = [];
    for (i = 10; i <= 35; i++)
    {    wynik.push(fib_iter(i));
    }
    console.timeEnd("Fibonacci iteracyjnie");
    console.log(wynik);
}

function check_time()
{
    czasy_iter = [];
    czasy_rek = [];
    for(i=10;i<=35; i++)
    {
        console.time(i);
        fib_iter(i);
        console.timeEnd(i);
        console.time(i);
        fib_rek(i);
        console.timeEnd(i);
    }
}

check_time();
//console.log(fib_rek(10));
//console.log(fib_iter(10));

//check_iter();
//check_rek();
