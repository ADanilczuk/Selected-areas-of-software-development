// Comparision

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


var fib_memo = (function() {
    var memo = [0, 1];
    return fib = function(n) {
      let result;
      return (result = memo[n]) !== undefined ? result : memo[n] = fib(n - 1) + fib(n - 2);
    };
  })();
  

function check_time()
{

    console.time('iteracyjnie 35');
    fib_iter(35);
    console.timeEnd('iteracyjnie 35');
    console.time('rekurencyjnie 35');
    fib_memo(200);
    console.timeEnd('rekurencyjnie 35');
    console.time('memoizacją 35');
    fib_memo(200);
    
    console.timeEnd('memoizacją 35');

}

check_time();
console.log(fib_rek(35));
console.log(fib_iter(35));
console.log(fib_memo(35));
