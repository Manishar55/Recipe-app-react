
import React from "react";


const Mealcards =({detail})=>{
    console.log(detail);
    
    return (
        <div className="meals">
            { !detail? "" : detail.map((curItem)=>{
                return(
                    <div className="mealImg">
                        <img src={curItem.strMealThumb}></img>
                        <p>{curItem.strMeal}</p>
                        <button>Recipe</button>
                    </div>
                )
            })

            }

        </div>
    )
}

export default Mealcards;