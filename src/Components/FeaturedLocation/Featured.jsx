import "./Featured.css";

function Featured() {
    return (
        <>
            <div className="featured-section" id="featured">
                <div className="featured-info">
                    <h3>Featured Destination</h3>
                    <div className="line-fd"></div>
                    <h4>Kiyomizu-dera</h4>
                    <p>
                        Kiyomizu-dera is located on the foothills of Mount
                        Otowa, part of the Higashiyama mountain range that
                        dominates eastern Kyoto. The main hall has a large
                        veranda, that juts out over the hillside and offers
                        impressive views of the city. A famous destination for
                        all type of people.
                    </p>
                    <button>Explore</button>
                </div>
                <div className="overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q"
                    alt="temple in japan"
                />
            </div>
        </>
    );
}

export default Featured;
