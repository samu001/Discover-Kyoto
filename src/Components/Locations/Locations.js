import React, { useState } from "react";
import MapIcon from "./MapIcon";
import "./Locations.css";
import mapData from "../../Data/LocationsData";
import axios from "axios";

export default function Locations() {
    const [mapItems, setMapItems] = useState(mapData);

    const mapElements = mapItems.map((item) => {
        return (
            <MapIcon
                top={item.top}
                left={item.left}
                title={item.title}
                description={item.description}
                iconImg={item.iconImg}
                placeImg={item.placeImg}
                key={item.title}
            />
        );
    });

    const [articles, setArticles] = useState([""]);
    let query = "pandemic";
    let formattedArticles = [];

    async function callAPI() {
        let API_KEY = "pub_11407f5b05c5da9f5d7faa259db19175b2439";
        const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${query}&language=en`;

        const res = await axios.get(url);
        const articlesResponse = res.data.results;
        for (let i = 0; i < Math.min(articlesResponse.length, 5); i++) {
            const article = articlesResponse[i];
            formattedArticles.push(article.title);
        }

        setArticles(formattedArticles);
        console.log(articles);
    }

    return (
        <>
            <div>
                <h5>Query for pandemic, returns 5 article titles</h5>
                <button onClick={callAPI}>Make Call</button>
                {articles}
            </div>

            <div className="locations-section" id="locations">
                <div className="map">
                    <div className="map-img-wrapper">
                        <img
                            className="map-img"
                            src={require("../../Images/map.png")}
                            alt="Map of Kyoto"
                        />
                        {mapElements}
                    </div>
                </div>
            </div>
        </>
    );
}
