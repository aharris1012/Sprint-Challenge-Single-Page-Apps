import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-route-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";



export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" as={WelcomePage}/>
      <Route exact path="/card/:id" as={CharacterCard}/>
      <Route exact path="/list" as={CharacterList}/>
    </main>
  );
}
