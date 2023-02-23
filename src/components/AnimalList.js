import Animal from "./Animal";
import {useState} from 'react';

function AnimalList({animals}){

    const allAnimals=animals.map(animal=><Animal key={animal.id} animalData={animal} />);
    
    return(
        <article className="animals-div">
            {allAnimals}
        </article>
    );
}

export default AnimalList;