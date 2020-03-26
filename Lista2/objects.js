const Pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
  }
console.log(Pizza)

const food = {
   types: 'only pizza'
  }

console.log(food['types'])


const car = {
    make: 'Honda',
     model: 'Accord',
    year: 2020
}
const keys = Object.keys(car)
console.log(keys)

// g
function eat(food)
{
    return food + ' tasted really good.'
}
console.log(eat('bananas'))

function math(a,b,c)
{
    return b*c+a
}
console.log(math(53,61,67))

