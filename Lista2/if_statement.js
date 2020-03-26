var fruit = 'orange'
if (fruit.length > 5)
{
    console.log("The fruit name has more than five characters")
}
else 
{
   console.log("The fruit name has five characters or less.") 
}

var total = 0
var limit = 10
for (i=0; i<limit; i++)
{
    total +=i
}
console.log(total)

// e
var pizzaTop = ['tomato sauce', 'cheese', 'pepperoni']
console.log(pizzaTop)

function evenNumbers (number) {
    return number % 2 === 0
  }

var numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var filtered = numbers.filter(evenNumbers)
console.log(filtered)

const food =  ['apple', 'pizza', 'pear']
console.log(food[2])

var pets =  ['cat', 'dog', 'rat']
for(i=0;i<3;i++)
{
    pets[i] = pets[i] + 's'
}
console.log(pets)