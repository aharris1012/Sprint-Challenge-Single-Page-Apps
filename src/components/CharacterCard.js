import React from "react";
import styled from "styled-components";

// export default function CharacterCard() {
//   // return <span>todo: character</span>;



const card=styled.div`


color:green;
border: 1px dotted green;
margin: 2%;
padding: 1%;
`









export default function CharacterCard({ name, image, species}) {
  return (
    <card>
      <img src={image} alt='rick & morty characters'/>
      <h3>Name: {name}</h3>
      <p>Species:{species}</p>
    </card>
  );
}