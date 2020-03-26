function sum(...a)
{
    var result = 0
    a.forEach(_ => result+= _)
    return result
}



console.log(sum(1,2,3,4,5))