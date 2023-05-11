const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');


const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.get('/car_brands', async(req, res) => {

  try{
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });

    const [rows] = await connection.execute(`SELECT * FROM car_brands ORDER BY Name`);
    res.status(200).json(rows);

  } catch(error){
    console.log(error);
    res.status(500).send("Can't take data form db");
  }

});

app.get('/car_models', async(req, res) => {

  try{
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });

    const [rows] = await connection.execute(`SELECT id, Name FROM car_models ORDER BY Name`);
    res.status(200).json(rows);

  } catch(error){
    console.log(error);
    res.status(500).send("Can't take data form db");
  }

});

app.get('/cars/year', async(req, res) => {

  try{
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });

    const [rows] = await connection.execute(`SELECT DISTINCT Year FROM cars WHERE Year >= 1973 AND Year <= 2024 ORDER BY Year`);
    res.status(200).json(rows);

  } catch(error){
    console.log(error);
    res.status(500).send("Can't take data form db");
  }

});

app.get('/used_cars', async(req, res) => {

  try{
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });

    const [rows] = await connection.execute(`
                        SELECT cars.id, car_brands.Name AS BrandName, car_models.Name, cars.Price, cars.Images AS Images, cars.Year FROM cars 
                        JOIN car_models ON cars.Models_ID = car_models.ID 
                        JOIN car_brands ON car_models.Brand_ID = car_brands.ID 
                        WHERE cars.Type_ID = 2 
                        `);

    res.status(200).json(rows);

  } catch(error) {
    console.log(error);
    res.status(500).send("Can't take data") ;
  }

});

app.get('/new_cars', async(req, res) => {

  try{
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });

    const [rows] = await connection.execute(`
                        SELECT cars.id, car_brands.Name AS BrandName, car_models.Name, cars.Price, cars.Images AS Images, cars.Year FROM cars 
                        JOIN car_models ON cars.Models_ID = car_models.ID 
                        JOIN car_brands ON car_models.Brand_ID = car_brands.ID 
                        WHERE cars.Type_ID = 1
                        `);

    res.status(200).json(rows);

  } catch(error) {
    console.log(error);
    res.status(500).send("Can't take data");
  }

});

app.get('/cars/:id', async(req, res) => {

  try{
    const id = req.params.id;
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });
    
    const [rows] = await connection.query(`
                            SELECT cars.id, car_brands.Name AS BrandName, car_models.Name, cars.Price, cars.Images AS Images, cars.Year FROM cars 
                            JOIN car_models ON cars.Models_ID = car_models.ID 
                            JOIN car_brands ON car_models.Brand_ID = car_brands.ID 
                            WHERE cars.id = ${id}`); //WHERE cars.id = ${id} <-- чудище 
    res.status(200).json(rows);
    
  } catch(error){
    console.log(error);
    res.status(500).send("Can't take data")
  };

});

app.get('/show_room', async(req, res) => {
    try{
      const connection = await mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    });

    const[rows] = await connection.execute(`
                        SELECT cars.id, car_brands.Name AS BrandName, car_models.Name, cars.Price, cars.Images AS Images, cars.Year, Models_ID FROM cars
                        JOIN car_models ON cars.Models_ID = car_models.ID
                        JOIN car_brands ON car_models.Brand_ID = car_brands.ID
                        order by rand()
                        LIMIT 12`);
    res.status(200).json(rows);
    } catch(error){
      console.error(error);
      res.status(500).send("Can't take data")
    }
}) 

app.post('/user_auth', async (req, res) => {
  
  try{
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
  });

  const{first_name, last_name, email, phone, password} = req.body;
  const query = `INSERT INTO users(first_name, last_name, email, phone, password) VALUES(${first_name}, ${last_name}, ${email}, ${phone}, ${password})`;
  const values = [first_name, last_name, email, phone, password];
  const[result] = await connection.execute(query, values);

  console.log(result, 'User added');
  res.send('User added');

  } catch(err){
    console.log(err);
    res.status(500).send('Error while adding user');
  } 
})

app.get('/search/items:id', async(req, res) => {
  try{
      const search = req.params.id;
      const connection = await mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
      });
      
      const query = `SELECT * FROM car_brands WHERE Name LIKE ${search}`;

      connection.query(query, (error, results) => {
        if(error){
          console.log(error);
          res.status(500).send('Error');
        } else {
          res.json(results);
        }
      })
  } catch(err){
    console.log(err);
    res.status(500).send('Error');
  }
});

app.get('/auto/brand', async(req, res) => {
  try{
    const search = req.query.search
    const connection = await mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });

    const [rows]  = await connection.execute(`SELECT car_brands.Name AS BrandName, car_models.Name FROM car_brands
                                              INNER JOIN car_models ON car_brands.id = car_models.Brand_ID
                                              WHERE car_brands.Name LIKE '%${search}%' OR car_models.Name LIKE '%${search}%'`);
    res.status(200).json(rows);

  } catch(err){
    console.log(err);
    res.status(500).send("Can't find any brand")
  }
})

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
