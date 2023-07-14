import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.eatingonadime.com/basic-fruit-smoothie-recipe/"
    let authorPhoto = "https://www.eatingonadime.com/wp-content/uploads/2019/01/carrie-close-up.jpg.webp"
    let authorName = "Carrie"
    return(
        <div className = {StyleSheet.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Photo of Carrie" className = {StyleSheet.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
            <div>
               <h1>Easy Fruit Smoothie Recipe</h1>
               <p>Easy smoothie recipe using frozen fruit that serves as a snack or quick meal.</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}

export default RecipeDescription;