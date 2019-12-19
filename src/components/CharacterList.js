import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);



  //Search stuff//
  const setSearch = NameString =>{
    const ele= character.filter(info =>
      info.name.toUpperCase().includes (NameString.toUpperCase()));

      setCharacter(ele)
  }


  //API//

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then (res =>{
      console.log ( "Pickles", res.data.results)
      setCharacter(res.data.results)
    })
    .catch(err =>{
      console.log("nooo", err)
    })
  }, []);

  return (
    <section className="character-list">
      <SearchForm character={character} Search ={setSearch}/>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {character.map(person =>(
        <div key ={person.id}>
          <img className="person-img" src={person.image}/>
        <h2>{person.name}</h2>
        <h3>{person.species}</h3>

        </div>
      ))}
    </section>
  );
}
