import "./Featured.css";

function Featured() {
    return (
        <>
            {/* Image container */}
            <div className="featured-section" id="featured">
                <div className="featured-info">
                    <h2>Featured Destination</h2>
                    <h3>Inaru Temple</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat perferendis, quidem culpa dolorum pariatur
                        amet, eligendi aspernatur optio ad reiciendis voluptate
                        eum fugiat modi ratione praesentium.
                    </p>
                    <button>Explore</button>
                </div>
                <div className="overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1604947498105-0ed418039700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    alt="temple in japan"
                />
            </div>
        </>
    );
}

export default Featured;
