# RecipeManagementAPI
Steps to use recipemanagement API:

1. on the terminal: cd recipe-management-api
2. set up sequelize
     - in the terminal:
       - npm install pg
       - npm install --save sequelize sequelize-cli pg-hstore
3. Set up Database connection. Create ".env" file in the below format:
      DB_USER=<user name>
      DB_HOST=localhost
      DB_NAME=<database name>
      DB_PASSWORD=<user password>
      DB_PORT=5432

4. add a database called, "recipe_managment"
  
5. in the terminal: npx sequelize-cli db:migrate
     - remember to check in the database if the table is created
6. in the terminal: npx sequelize-cli db:seed:all
7. now we can start the server in node. might have to "npm init -y" and "npm install express"
    In the terminal: npm start

8. Now we can start to call these endpoint in postman API!

example of get: 
url: http://localhost:4000/recipes , to fetch all recipes
url: http://localhost:4000/recipes/1 , to fetch based on id

example of post:
url: http://localhost:4000/recipes
body: 
 {
    "title": "Recipe 4",
    "description": "good taste and yummy",
    "ingredients": "air",
    "instructions": "Stir it and done",
    "created_at": "2023-07-12T02:01:27.976Z",
    "updated_at": "2023-07-12T02:01:27.976Z"
}

example of patch/update:
url: http://localhost:4000/recipes/1
body:
{
    "description": "Edited!!",
    "instructions" : "Edited!!"
}

example of delete:
url: http://localhost:4000/recipes/4


             
