const {Pool, Client} = require('pg')

const dbConfig = {   password: 'postgres',}
  
const pool = new Pool(dbConfig)
pool.on('error', function (err) {
    winston.error('idle client error', err.message, err.stack)
})

const connectionString = 'postgressql://postgres:postgres@localhost:13318/postgres'
// connectionstring ma postać: postgres://[username]:[password]@[host]:[port]/[databasename]

const client = new Client({
    connectionString:connectionString
})

client.connect()

// client.query('SELECT * from grupa limit 20', (err, res)=>{
//     console.log(err,res)
//     client.end()
// })



async function query () {
        try {
        var result = await client.query('SELECT * from grupa LIMIT 20');
        result.rows.forEach( r => {
        console.log( `${r.kod_grupy} ${r.max_osoby} ${r.rodzaj_zajec}`);
        });
        }
        catch ( err ) {
        console.log( err );
        }
        finally {
            console.log(" done ");
      }
    
    }

query();
// insert using sequence
// client.query("INSERT INTO osoba1(id, name, surname, sex, age)"+
//              " VALUES ((SELECT nextval('return_last_id')), 'Marcin', 'Mas', 'm', 70)" +
//              "RETURNING id", (err,res)=>{
//     if (res) 
//     {   var newlyCreatedUserId = res.rows[0].id;
//         console.log(newlyCreatedUserId)
//     }
//     else
//         console.log( err );
//     client.end();
//     })


// function execute_q_return()
// {
//     insert_query = "INSERT INTO public.osoba2(id, name, surname, gender, age)"+
//                     " VALUES (DEFAULT, 'Kacper', 'Ki', 'm', 25)" +
//                     "RETURNING id";
//     client.query("INSERT INTO public.osoba2(id, name, surname, gender, age)"+
//     " VALUES (DEFAULT, 'Kacper', 'Ki', 'm', 25)" +
//     "RETURNING id", (err,res) =>{
//             if (res) 
//             {   return res.rows[0].id; }
//             else
//                 console.log( err );
//             client.end();
//     });  
// }
// //insert with default
// var insert_query = "INSERT INTO public.osoba2(id, name, surname, gender, age)"+
//                     " VALUES (DEFAULT, 'Kacper', 'Ki', 'm', 25)" +
//                     "RETURNING id";

// // execute_q_return();

// client.query("INSERT INTO public.osoba2(id, name, surname, gender, age)"+
//     " VALUES (DEFAULT, 'Karol', 'Ki', 'm', 28)" +
//     "RETURNING id", (err,res) =>{
//             if (res) 
//             {   var x = parseInt(res.rows[0].id);
//                 return x; }
//             else
//                 console.log( err );
//             client.end(); 
//     });  

// // // update
// client.query("UPDATE public.osoba2"+
// 	        " SET surname='Updated', age=27 WHERE id = 2", (err, res) =>{
//         if (res) 
//         {  console.log("updated"); }
//         else
//             console.log( err );
//         client.end();  
//     });

// // delete
// client.query("DELETE FROM public.osoba1 "+
// 	        "WHERE id = 7", (err, res) =>{
//         if (res) 
//         {  console.log("deleted"); }
//         else
//             console.log( err );
//         client.end();  
//     });

// function execute_q(query, tab)
// {
//     client.query(query, tab, (err,res) =>{
//             if (res) 
//             {   console.log("executed"); }
//             else
//                 console.log( err );
//             client.end();
//     })  
// }


// function insert_person_with_position(position, name, surname){
//     var position_query =  "INSERT INTO public.positionss(id, name) VALUES (DEFAULT, ?) RETURNING id";
//     var position_id = execute_q_return(position_query, [position]);
//     console.log(position_id);
//     // "INSERT INTO public.osoba(id, position_id, name, surname,  age) VALUES (DEFAULT,  ${position_id}, ${name}, ${surname}, ${age}) RETURNING id" ;
//     var person_query = ("INSERT INTO public.osoba(id, position_id, name, surname, age ) VALUES (DEFAULT,  %d, %s, %s, 36 ) RETURNING id", position_id, name, surname);
//     execute_q(person_query);

// }
// var age_ = 36;
// var position_ = "manager";
// var name_ = "Tadeusz";
// var surname_ = "Wk"
// insert_person_with_position(position_, name_, surname_);