import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import Panner from "../../assets/images/Panner Tikka.jpg";
import Vegbriyani from "../../assets/images/Veg Biryani.jpg";
import Masala from "../../assets/images/Masala.jpg";
import Chicken from "../../assets/images/Chicken Grill.jpg";
import Mutton from "../../assets/images/mutton.jpg";
import Fish from "../../assets/images/Fish.jpg";
import Mojito from "../../assets/images/Mojito.jpg";
import Coffee from "../../assets/images/coffee.jpg";
import Juice from "../../assets/images/Juice.jpg";


function Home() {
    const [category, setCategory] = useState("veg");
    const navigate = useNavigate();

    const menuData = {
        veg: [
            { name: "Paneer Tikka", img: Panner },
            { name: "Veg Biryani", img: Vegbriyani },
            { name: "Masala Dosa", img: Masala }
        ],
        nonveg: [

            { name: "Chicken Grill", img: Chicken },
            { name: "Mutton Biryani", img: Mutton },
            { name: "Fish Fry", img: Fish },
        ],
        drinks: [
            { name: "Mojito", img: Mojito },
            { name: "Cold Coffee", img: Coffee },
            { name: "Fresh Juice", img: Juice }
        ]
    };

    return (
        <div className="home">
            {/* Hero */}
            <div className="home-hero">
                <h1>Taste The Best Food 😋</h1>
                <p>Fresh ingredients • Authentic recipes • Fast service</p>
                <button onClick={() => navigate("/table")}>Book Table</button>
            </div>

            {/* Menu Section */}
            <div className="home-menu-section">
                <h2>Explore Our Menu 🍴</h2>

                <div className="home-tabs">
                    <button className={category === "veg" ? "active" : ""} onClick={() => setCategory("veg")} >Veg 🥗</button>
                    <button className={category === "nonveg" ? "active" : ""} onClick={() => setCategory("nonveg")} >Non-Veg 🍗</button>
                    <button className={category === "drinks" ? "active" : ""} onClick={() => setCategory("drinks")} >Drinks 🥤</button>
                </div>

                <div className="home-slider"> {menuData[category].map((item, index) => (
                    <div className="home-card" key={index}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
                </div>
            </div>

            {/* Offer */}
            <div className="offer">
                🔥 Today Special Offer — Get 20% OFF on All Biryani 🔥
            </div>
        </div>
    );
}

export default Home;