import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <div className="Links">
        <Link to ="/">Home Page</Link>
        <Link to ="/list">Rick & Morty Gang</Link>
        </div>
      </nav>

    </header>
  );
}
