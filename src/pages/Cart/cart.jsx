import "./cart.css"

function Cart({ cart, setCart, setHistory }) {


    const increase = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ))
    }

    const decrease = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, qty: item.qty - 1 } : item
        ).filter(item => item.qty > 0))
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    const placeOrder = () => {
        setHistory(prev => [...prev, cart])
        setCart([])
        alert("Order Placed Successfully")
    }

    return (
        <div className="cart-wrapper">

            <h2 className="cart-title">Your Cart</h2>

            {cart.length === 0 && <p className="empty">Cart is Empty 🍽️</p>}

            {cart.map(item => (
                <div className="cart-card" key={item.id}>

                    <img src={item.img} alt={item.name} className="food-img" />

                    <div className="food-info">
                        <h3>{item.name}</h3>
                        <p className="price">₹{item.price}</p>

                        <div className="qty-box">
                            <button onClick={() => decrease(item.id)}>-</button>
                            <span>{item.qty}</span>
                            <button onClick={() => increase(item.id)}>+</button>
                        </div>
                    </div>

                    <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}>
                        ✕
                    </button>

                </div>
            ))}

            {cart.length > 0 && (
                <div className="bottom-bar">
                    <div>
                        <p>Total Amount</p>
                        <h3>₹{total}</h3>
                    </div>

                    <button className="order-btn" onClick={placeOrder}>
                        Place Order →
                    </button>
                </div>
            )}

        </div>
    )


}

export default Cart
