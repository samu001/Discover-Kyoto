import "./App.css";
import Hero from "./Components/Hero/Hero";
import CurrentEvents from "./Components/CurrentEvents/CurrentEvents";
import Locations from "./Components/Locations/Locations";
import History from "./Components/History/History";
import Title from "./Components/UI/Title";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Hero />
            <Title
                title="EVENTS"
                theme="dark"
                description="You cannot miss this amazing activities around Kyoto"
            />
            <CurrentEvents />
            <Title
                title="LOCATIONS"
                theme="light"
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
