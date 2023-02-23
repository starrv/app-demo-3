function SelectAnimal(){
    return(
        <div>
            <label for="selectBySpecies">
            Select By Species
            </label>
            <select id="selectBySpecies">
            <option value="all">
                    all
                </option>
                <option value="leopard">
                    leopard
                </option>
                <option value="lion">
                    lion
                </option>
                <option value="elephant">
                    elephant
                </option>
                <option value="hyena">
                    hyena
                </option>
            </select>
        </div>
    )
}

export default SelectAnimal;