import "./App.css";
import Hero from "./Components/Hero/Hero";
import CurrentEvents from "./Components/CurrentEvents/CurrentEvents";
import Locations from "./Components/Locations/Locations";
import History from "./Components/History/History";
import Title from "./Components/UI/Title";
import Footer from "./Components/Footer/Footer";
import Featured from "./Components/FeaturedLocation/Featured";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        document.title = "Discover Kyoto";
    });

    return (
        <div className="App">
            <Hero />
            <Title
                title="EVENTS"
                theme="dark"
                description="You cannot miss this amazing activities around Kyoto"
            />
            <CurrentEvents />
            <Featured location={"Inari Temple"} />
            <Title
                title="LOCATIONS"
                theme="dark"
                description="Discover different locations for every taste"
            />
            <Locations />
            <Title
                title="HISTORY"
                theme="dark"
                description="A city with a rich history in every corner"
            />
            <History />
            <Footer />
        </div>
    );
}

export default App;
