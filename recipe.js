
import {data} from './recipeFol/recipe.js';

  const displayData = document.getElementById('displayData');
  const filterSearch = document.getElementById('filterSearch');


function displayRecipe() {
    const foodis = data.map((items) => {
        // console.log(items);
    
        return `
        
        <div class="data-container">
                <img class="title-img" src="${items.imageURL}" alt="">
    
                <div class="data-infos">
                    <h5 class="reciple-tag">${items.tag}</h5>
                    <h1 class="recipe-name">${items.name}</h1>
                </div>
                <div class="rating">
                    <img class="ratingPics" src="/ratings/rating-20.png" alt="">
                </div>
                <button class="buynow-btn">See More..</button>
        </div>`
    
      });
    
      displayData.innerHTML = foodis.join('');
  }

  displayRecipe();



function searchingRecipe() {

  filterSearch.addEventListener('keyup',(e) => {
    const filterRecipe = e.target.value.toLowerCase().trim();

    const searchRecipe = data.map((item) => {
        if (item.name.toLowerCase().includes(filterRecipe)) {
            console.log(item.name)
        
            return `
            
        <div class="data-container">
            <img class="title-img" src="${item.imageURL}" alt="">

            <div class="data-infos">
                <h5 class="reciple-tag">${item.tag}</h5>
                <h1 class="recipe-name">${item.name}</h1>
            </div>
            <div class="rating">
                <img class="ratingPics" src="/ratings/rating-20.png" alt="">
            </div>
            <button class="buynow-btn">See More..</button>
        </div>`

        } else {
            return "";
        }

    });

    console.log(filterRecipe);
    displayData.innerHTML = searchRecipe.join('');

  });


}

searchingRecipe();

  
