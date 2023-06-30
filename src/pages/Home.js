import React from "react";
import "../general.css";


const Home = () => {
    return (
        <main className={`grid`}>
            <section>
                <h1>Home</h1>
            </section>
            <section>
                <h2 id="about">About</h2>
            </section>
            <section>
                <h3 id="faqs">FAQs</h3>
            </section>
        </main>
    );
};

export default Home;