var Cosmetic = {
    category : undefined,
    name : undefined,
    

    set setCategory(category)
    {
        this.category = category;
    },
    
    get getCategory() 
    {
        return this.category;
    }

    function displayCosmetic()
    {
        var result = "Cosmetic: " + this.name + " from category:" + this.category;
        pretty_print(result);
    }
}

// TEST

// 1
console.log(Cosmetic.category)
Cosmetic.category = "hair"
console.log(Cosmetic.category)
console.log(Cosmetic.name)

// 2

Cosmetic.foo = function(word) {return word}


Cosmetic.brand = "Pantene"
Cosmetic["amount"] = true

Object.defineProperty(Cosmetic, 'expiry_date', {
    value : undefined,
    writable: true,
    enumerable: true,
    configurable: true
})



Object.defineProperty(Cosmetic, 'ID', {
    get: function() { return this.ID},
    set: function(newID) { this.ID = newID},
    enumerable: true,
    configurable: true
})

console.log("Add attribute with get&set: ")
console.log(Cosmetic.ID.set(3))
Cosmetic.ID = 2
console.log(Cosmetic.ID)
console.log("Add field to object using define property: ")
console.log(Cosmetic.expiry_date)
Cosmetic.expiry_date = new Date();
console.log(Cosmetic.expiry_date)
console.log("Add method to object: ")
console.log(Cosmetic.foo("Added"))
console.log("Add field to object: ")
console.log(Cosmetic.brand)
console.log(Cosmetic.amount)