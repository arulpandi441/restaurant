import { useState } from "react"
import foodData from "../../data/foodData"
import "./menu.css"

function Menu({ cart, setCart }) {

    const [search, setSearch] = useState("")
    const [active, setActive] = useState("All")

    // ⭐ Dynamic Categories
    const categories = ["All", ...new Set(foodData.map(item => item.category))]

    const addToCart = (food) => {
        const exist = cart.find(item => item.id === food.id)

        if (exist) {
            setCart(cart.map(item =>
                item.id === food.id ? { ...item, qty: item.qty + 1 } : item
            ))
        } else {
            setCart([...cart, { ...food, qty: 1 }])
        }
    }

    // ⭐ Dynamic Filter
    const filteredFood = foodData.filter(item =>
        (active === "All" || item.category === active) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="menu-wrapper">

            <h2 className="title">Explore Menu 🍔</h2>

            <input className="search" placeholder="Search your favourite food..."
                onChange={(e) => setSearch(e.target.value)}
            />


            {/*category section*/}
            <div className="category-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={active === cat ? "active" : ""}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/*Card section*/}
            <div className="food-grid">
                {filteredFood.map(item => (
                    <div className="food-card" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>

                        <button onClick={() => addToCart(item)}>
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Menu