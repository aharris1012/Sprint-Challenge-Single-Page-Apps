import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(data => {
      setInfo(data.data.results);
    })
    .catch(error => {console.log("There was an error", error);
  })
}, []);
  console.log(info)

  return (
    <div>
      <section className="character-list">
        {info.map(char => (
        <CharacterCard url={char.image} names={char.name} gender={char.gender} local={char.location.name} species={char.species} status={char.status} />
        ))};
      </section>
    </div>
);
}
