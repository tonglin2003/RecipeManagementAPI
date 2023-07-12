const express = require("express");
const app = express();
const port = 4000;

const {RecipeManagement} = require('./models');

app.use((req,res,next) => {
    res.on("finish", ()=>{
        console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
    });
    next();
})
app.use(express.json());

// get all recipes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await RecipeManagement.findAll();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// get recipe by id
app.get('/recipes/:recipeId', async (req, res) => {
    const recipeId = parseInt(req.params.recipeId);
    try {
      const recipe = await RecipeManagement.findOne({where:{id: recipeId}});

      if (recipe){
        res.status(200).json(recipe);
      } else {
        res.status(404).send({message: "Recipe not found"});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

// post recipe
app.post('/recipes', async (req, res)=>{
    try{
        const newRecipe = await RecipeManagement.create(req.body);
        res.status(201).json(newRecipe);
    }catch(error){
        console.error(error);
        res.status(500).send({message: error.message });
    }
})

// patch recipe based on the id
app.patch('/recipes/:recipeId', async (req, res)=>{
    const recipeId = parseInt(req.params.recipeId);

    try{
        const [numOfAffectedRows, affectedRows] = await RecipeManagement.update(req.body, {where: {id: recipeId}, returning: true});

        if (numOfAffectedRows > 0){
            res.status(200).json(affectedRows[0]);
        } else {
            res.status(404).send({message: "Recipe not found"});
        }
    }catch(error){
        console.error(error);
        res.status(500).send({message: error.message });
    }
})

// delete the recipe
app.delete('/recipes/:recipeId', async (req, res)=>{
    const recipeId = parseInt(req.params.recipeId, 10);

    try{
        const deletedRecipe = await RecipeManagement.destroy({where: {id: recipeId}});

        if (deletedRecipe > 0){
            res.status(200).send({message: "Recipe deleted successfully!"});
        } else {
            res.status(404).send({message: "Recipe not found"});
        }
    }catch(error){
        console.error(error);
        res.status(500).send({message: error.message });
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})