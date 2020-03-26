const {Pool, Client} = require('pg')

async function insert(client,person,position) {
    if ( !person) return;
    try {

        var res0 = await client.query( `INSERT INTO public.pos(id, name) VALUES (DEFAULT, '${position.name}') RETURNING id`);
        var position_id = res0.rows[0].id;

        var res = await client.query(`INSERT INTO public.os(id, name, surname, age) VALUES (DEFAULT, '${person.name}', '${person.surname}', ${person.age}) RETURNING id`);
        var person_id =  res.rows[0].id;

        var result = await client.query( `INSERT INTO public.os_pos(person_id, position_id) VALUES ('${person_id}', '${position_id}')`);


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
        await insert(client,os,mp);
        console.log("zrobione");
        client.end();
    }
    catch ( err ) {
            console.log( err );
    }
}

main();