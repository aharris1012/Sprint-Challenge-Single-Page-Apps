import React from "react";
import Header from "./components/Header.js";
import {Route,Link,} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import {SearchForm} from "./components/SearchForm";
import styled from "styled-components";

const Head = styled.h3`
margin: 10px;
display: inline-block;
color: green;
`;

export default function App() {
  return (
    <main>
      <Header />
      <Link to='/'>
        <Head>Home</Head></Link>
      <Link to='/characters'> 
      <Head>Characters</Head></Link>
      <Link to='/Search'><Head>Search</Head></Link>
      <Route exact path ='/' component={WelcomePage}/>
      <Route path= '/character' component={CharacterList}/>
      <Route exact path ='/Search' component={SearchForm}/>
    </main>
  );
}
