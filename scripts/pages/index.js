const {name,ingredients,time,description,id} = recipes[0];
const {ingredient, quantity, unit} = ingredients[0];


// crée un article
function articleRecipes(id) {


  const main = document.querySelector('main');
  
  // ARTICLE
  const article = document.createElement('article');
  main.appendChild(article);
  article.setAttribute("class","article"); 
  article.id = id.id;
      // IMG
     const imgArticle = document.createElement('img');
     article.appendChild(imgArticle);
     imgArticle.setAttribute("class","img_article");
     // DIV sous image 
     const divRecette = document.createElement('div');
     article.appendChild(divRecette);
     divRecette.setAttribute("class","divrecette");
         
          // div titre et temps de préparation
          const titreEtTemps = document.createElement('div');
          divRecette.appendChild(titreEtTemps);
          titreEtTemps.setAttribute("class","titre_et_temps");
               // H5
                const titreRecette = document.createElement('h5');
                titreEtTemps.appendChild(titreRecette);
                titreRecette.setAttribute("class","titre_recette");
                titreRecette.textContent = id.name;
                // DIV
                const iconEtTemps = document.createElement('div');
                titreEtTemps.appendChild(iconEtTemps);
                iconEtTemps.setAttribute("class","icon_et_temps");
                  // SPAN
                  const contentClock = document.createElement('span');
                  iconEtTemps.appendChild(contentClock);
                       // IMG ICON CLOCK
                        const clock = document.createElement('img');
                        contentClock.appendChild(clock);
                        clock.setAttribute("class","clock");
                        clock.setAttribute("src","img/clock.png");
                  // P MINUTE
                  const tempsMinute = document.createElement('p');
                  iconEtTemps.appendChild(tempsMinute);
                  tempsMinute.setAttribute("class","temps_minute");
                  tempsMinute.textContent = id.time + "min";
              
             // DIV contenant tous les ingrédients
            const ingredientsEtRecette = document.createElement('div');
            divRecette.appendChild(ingredientsEtRecette);
            ingredientsEtRecette.setAttribute("class","ingredients_et_recette");

                // contenant ingrédient
                const contentIngredients = document.createElement('div');
                ingredientsEtRecette.appendChild(contentIngredients);
                contentIngredients.setAttribute("class","content_ingredients");

                     // contenant FONCTION "CREATE INGREDIENT"
                     const ingredientQuantityUnit = document.createElement('div');
                     contentIngredients.appendChild(ingredientQuantityUnit);
                     ingredientQuantityUnit.setAttribute("class","ingredient_quantity_unit");
                  
                   
                    
          
             // contenant description
            const manuelRecette = document.createElement('p');
            ingredientsEtRecette.appendChild(manuelRecette);
            manuelRecette.setAttribute("class","manuel_recette");
            manuelRecette.textContent = id.description;

                
}
           
      
// créer un article pour chaque recette
 recipes.forEach(articleRecipes);

// crée une ligne pour chaque ingrédient d'un article
ingredients.forEach(createIngredient);  
 

// crée une ligne d'ingredient dans l'article

function createIngredient(id) {
          
            const contentIngredientQuantityUnit = document.querySelector('.ingredient_quantity_unit');
      
            const divIngredientQuantity = document.createElement('div');
            contentIngredientQuantityUnit.appendChild(divIngredientQuantity);
            divIngredientQuantity.setAttribute("class","div_ingredient_quantity");
            
              const ingredientRecette = document.createElement('span');
              divIngredientQuantity.appendChild(ingredientRecette);
              ingredientRecette.setAttribute("class","ingredient");
              ingredientRecette.textContent = id.ingredient;
            
      
              const quantite = document.createElement('p');
              divIngredientQuantity.appendChild(quantite);
              quantite.setAttribute("class","quantity_unit");
              quantite.textContent = id.quantity;
      
           
      
              const unit = document.createElement('p');
              divIngredientQuantity.appendChild(unit);
              unit.setAttribute("class","quantity_unit unit");
              unit.textContent = id.unit;

      
}



         





      