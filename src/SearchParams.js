import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {

    // Never put useState hook inside if/loop block
    const [location, setLocation] = useState("Seattle, WA"); // Destructure - this is actually a tuple
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");

    const breeds = [];

    // function updateLocation(e) {
    //     setLocation(e.target.value);
    // }

    return (
        <div className="search-params">
            <form>
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
                                <option value="animal" key={animal}>
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
        </div>
    );
};

export default SearchParams;