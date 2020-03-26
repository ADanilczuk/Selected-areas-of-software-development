var fs = require('fs');
const util = require('util');




var tekst1 = 'C:/Alusia/Uniwerek/Weppo/Lista4/tekst1.txt'


//1

fs.readFile(tekst1, 'utf-8', function(err, data1) {
            console.log( "zwykły readfile " + data1 );
});


//2

function my_fspromise( path, encoding) {
    return new Promise( (resolve, reject) => {
        fs.readFile( path, encoding, (error, data) => {
            if ( error )
                reject(error);
            resolve(data);
            });
        });
};

//”po staremu” - wywołanie z kontynuacją (Promise::then):
my_fspromise(tekst1, 'utf-8')
    .then( data1 => {
                        console.log("mypromise, .then: " + data1);
})


async function readIt_myfs() {
    try {
        const tx = await my_fspromise(tekst1, {encoding: 'utf8'});
        console.log('mypromise, await:  '+ tx );
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
readIt_myfs();

// 3


const readFile = util.promisify(fs.readFile);

// stary sposób
readFile(tekst1, 'utf8')
    .then((text) => {
        console.log("Z util, .then " + text);
    })
    .catch((err) => {
        console.log('Error', err);
    });



// na nowy sposób
async function readIt(path) {
    try {
        const text = await readFile(path, {encoding: 'utf8'});
        console.log('z util, await:  '+ text);
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
readIt(tekst1);



//4

const fsPromises = fs.promises;

fsPromises.readFile(tekst1, 'utf-8')
    .then((text) => {
        console.log("Z fs, .then " + text);
    })
    .catch((err) => {
        console.log('Error', err);
    });


async function readItfs(path) {
  let file;
  try {
    file = await fsPromises.readFile(path, 'utf-8');
    console.log("z fs, await:  " + file)
  } 
  catch(e){
    console.log(e)
  }
}

readItfs(tekst1);






