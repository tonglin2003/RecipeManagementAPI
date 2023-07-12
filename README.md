# RecipeManagementAPI
Steps to use recipemanagement API:

1. on the terminal: `cd recipe-management-api`
2. set up sequelize
   - in the terminal:
     - `npm install pg`
     - `npm install --save sequelize sequelize-cli pg-hstore`
3. Set up Database connection. Create a ".env" file in the following format:
```
     DB_USER=<user name>
     DB_HOST=localhost
     DB_NAME=<database name>
     DB_PASSWORD=<user password>
     DB_PORT=5432
```


4. Add a database called "recipe_managment".

5. In the terminal: `npx sequelize-cli db:migrate`
- Remember to check in the database if the table is created.

6. In the terminal: `npx sequelize-cli db:seed:all`

7. Now we can start the server in Node.js. You might have to run `npm init -y` and `npm install express` first.
In the terminal: `npm start`

8. Now you can start making API calls using Postman or any other API client.

Example of GET:
- URL: `http://localhost:4000/recipes` to fetch all recipes
- URL: `http://localhost:4000/recipes/1` to fetch a recipe based on its ID

Example of POST:
- URL: `http://localhost:4000/recipes`
- Body:
```json
{
 "title": "Recipe 4",
 "description": "good taste and yummy",
 "ingredients": "air",
 "instructions": "Stir it and done",
 "created_at": "2023-07-12T02:01:27.976Z",
 "updated_at": "2023-07-12T02:01:27.976Z"
}
```


Example of PATCH/UPDATE:

URL: http://localhost:4000/recipes/1
Body:
```json
{
  "description": "Edited!!",
  "instructions" : "Edited!!"
}
```

Example of DELETE:

URL: http://localhost:4000/recipes/4
Feel free to modify and customize these instructions as needed for your specific use case.


