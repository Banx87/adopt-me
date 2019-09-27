import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">>Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));

//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "dog",
//             breed: "Havanese"
//         }),
//         React.createElement(Pet, {
//             name: "Pepper",
//             animal: "bird",
//             breed: "Cockatiel"
//         }),
//         React.createElement(Pet, {
//             name: "Doink",
//             animal: "Cat",
//             breed: "Siamese"
//         }),
//     ]);
