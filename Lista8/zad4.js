const {Pool, Client} = require('pg')

async function insert(client,person,position) {
    if ( !person) return;
    try {
        // var c = await client.query("INSERT INTO public.osoba2(id, name, surname, gender, age)"+
        //             " VALUES (DEFAULT, 'Karol', 'Ki', 'm', 28)" +
        //             "RETURNING id", (err,res) =>{
        //         if (res) 
        //         {   var x = parseInt(res.rows[0].id);
        //             return x; }
        //         else
        //             console.log( err );
        //         client.end(); 
        // }); 
        
        var res0 = await client.query( `INSERT INTO public.positionss(id, name) VALUES (DEFAULT, '${position.name}') RETURNING id`);
        var id0 = res0.rows[0].id //res0.rows[0].id
        var res = await client.query(`INSERT INTO public.osoba(id, position_id, name, surname, age) VALUES (DEFAULT, ${id0}, '${person.name}', '${person.surname}', ${person.age}) RETURNING id`);
        return res.rows[0].id;
    }
    catch ( err ) {
        console.log( err );
        throw err;
    }
}

    


async function main() {
    const dbConfig = {   password: 'postgres',}
  
    const pool = new Pool(dbConfig)
    pool.on('error', function (err) {
        winston.error('idle client error', err.message, err.stack)
    })
    
    const connectionString = 'postgressql://postgres:postgres@localhost:5432/zad1'
    // connectionstring ma postać: postgres://[username]:[password]@[host]:[port]/[databasename]
    
    const client = new Client({
        connectionString:connectionString
    })
    
    client.connect();

    
    try {
        
        // pobierz wszystkie rekordy
        //await repo.delete(6)
        var os = {
            name: "Tadeusz",
            surname: "Now",
            age: 55,
        }
        var mp = {
            name: "Manager"
        }
        await insert(client,os,mp)

        // var items = await repo.retrieve();
        // items.forEach( e => {
        //     console.log( JSON.stringify(e));
        // });
        // var items = await repo.retrieve2();
        // items.forEach( e => {
        //     console.log( JSON.stringify(e));
        // });
        client.end();
        
    }
    catch ( err ) {
            console.log( err );
    }
}

main();