import "../styles/card.css"

function FoodCard({ item, addToCart }) {
  return (
    <div className="card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      <button onClick={()=>addToCart(item)}>
        Add To Cart
      </button>
    </div>
  )
}

export default FoodCard