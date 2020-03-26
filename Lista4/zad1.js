function Node(value, left, right) 
{
    this.value = value;
    this.left = left;
    this.right = right;
}

function tree_height(node) 
{
    var height = 0;
    if (node != null)
    {
        return 1+Math.max(tree_height(node.left), tree_height(node.right));
    }
    else return 0;
}

let tree = new Node(1,  new Node(4, new Node(4),    
                                    new Node(5)),
                        new Node(1, new Node(4), 
                                    new Node(2)));

// console.log(tree_height(tree));

// zadadnie 2

Node.prototype[Symbol.iterator] = function* ()
    {
        yield this.value;
        if (this.left != null) yield* this.left; 
        if (this.right != null) yield* this.right;
    }


for ( var e of tree )
{
    console.log( e );
}
