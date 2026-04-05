import "./history.css"

function History({ history }) {
  return (
    <div className="history-page">
      <h1>Order History</h1>

      {history.map((order,index)=>(
        <div className="order-box" key={index}>
          <h3>Order {index+1}</h3>

          {order.map(item =>
            <p key={item.id}>
              {item.name} x {item.qty}
            </p>
          )}
        </div>
      ))}

    </div>
  )
}

export default History