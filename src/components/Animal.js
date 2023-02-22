function Animal({animalData:{name,species,sex,image}}){
    return(
        <div className="animal-div">
            <h1>
                Name: {name}
            </h1>
            <p>
                Species: {species}
            </p>
            <p>
                Sex: {sex}
            </p>
            <img src={image} />
        </div>
    )

}

export default Animal;