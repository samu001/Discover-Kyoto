import React from "react";
import Hero from "./Components/Hero/Hero";
// import CurrentEvents from "./Components/CurrentEvents/CurrentEvents";
import Locations from "./Components/Locations/Locations";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Hero />
            <Locations />
        </div>
    );
}

export default App;
