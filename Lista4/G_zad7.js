const readline = require('readline');
const fs = require('fs');

function mostOccurency(array) {
    let clients = {};
    let max= []
    let maxCount = []
    max[0]= array[0];
    maxCount[0] = 1;
    
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        
        if(clients[el] == null)
            clients[el] = 1;
        else
            clients[el]++;  
    }

    for (var el in clients) {
        let value = clients[el];

        if(value > maxCount[0]) {
            max[2] = max[1];
            max[1] = max[0];
            max[0] = el;
            maxCount[2] = maxCount[1];
            maxCount[1] = maxCount[0];
            maxCount[0] = value;
        }
        else {
            if (value > maxCount[1]) {
                max[2] = max[1];
                max[1] = el;
                maxCount[2] = maxCount[1];
                maxCount[1] = value
            }
            else{
                if (value > maxCount[2]) {
                    max[2] = el;
                    maxCount[2] = value;   
                } 
            }
        }
    }
    return max;
}


function main() {
    const rl = readline.createInterface({
    input: fs.createReadStream('logi_servera.txt'),
    });

    let listOfHosts = []
    rl.on('line', (line) => {
        let str = line.split(" ")[0]
        listOfHosts.push(str)
    });
    rl.on('close', () => {
            mostStr = mostOccurency(listOfHosts)
            console.log(mostStr[0])
            console.log(mostStr[1])
            console.log(mostStr[2])
    })
}
main()