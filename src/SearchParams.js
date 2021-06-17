import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {

    // Never put useState hook inside if/loop block
    const [location, setLocation] = useState(""); // Destructure - this is actually a tuple
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
            // [] indicates only do it

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await res.json();

        console.log(json);

        setPets(json.pets);
    }

    // function updateLocation(e) {
    //     setLocation(e.target.value);
    // }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    location
                    <input 
                        id="location" 
                        value={location} 
                        onChange={e => setLocation(e.target.value)} 
                        // onChange={updateLocation}
                        placeholder="Location" 
                    />
                </label>
                <label htmlFor="animal">
                    animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={ e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={ e => setBreed(e.target.value)}
                    >
                        <option />
                        {
                            breeds.map(breed => (
                                <option value="breed" key={breed}>
                                    {breed}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => (
                    <Pet 
                        name={pet.name} 
                        animal={pet.animal} 
                        breed={pet.breed} 
                        key={pet.id} 
                    />
                ))
            }
        </div>
    );
};

export default SearchParams;