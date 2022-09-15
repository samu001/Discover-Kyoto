import "./Featured.css";

function Featured() {
    return (
        <>
            <div className="featured-section" id="featured">
                <div className="featured-info">
                    <h3>Featured Destination</h3>
                    <div className="line-fd"></div>
                    <h4>Inaru Temple</h4>
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
                    src="https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q"
                    alt="temple in japan"
                />
            </div>
        </>
    );
}

export default Featured;
