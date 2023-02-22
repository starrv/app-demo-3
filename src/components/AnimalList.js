import Animal from "./Animal";

function AnimalList({animals}){
    const allAnimals=animals.map(animal=><Animal key={animal.id} animalData={animal} />);
    return(
        <article className="animals-div">
            {allAnimals}
        </article>
    );
}

export default AnimalList;