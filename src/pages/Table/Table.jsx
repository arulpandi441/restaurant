import { useState } from "react";
import axios from "axios";
import "./Table.css";

const Table = () => {
    const [tableType, setTableType] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!tableType) {
            alert("please select table type");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/form", {
                ...formdata, tableType
            });
            setShowModal(true);

            alert("Booking successful!");
            setFormdata({
                name: "",
                email: "",
                message: ""
            })
        } catch (error) {
            console.error("Error booking table:", error);
            alert("Failed to book table. Please try again.");
        }
    };

    return (
        <div className="booking-page">

            {/*Hero section*/}
            <div className="booking-hero">
                <h1>Reserve Your Table</h1>
                <p>Enjoy delicious food with your loved ones</p>
            </div>

            {/*Table Type*/}
            <h2 className="section-title">Choose Your Table</h2>

            <div className="table-types">
                <div onClick={() => setTableType("Couple")} className={tableType === "Couple" ? "table-card active" : "table-card"}>
                    <h3>Couple Table ❤️</h3>
                </div>

                <div onClick={() => setTableType("Family")} className={tableType === "Family" ? "table-card active" : "table-card"}>
                    <h3>Family Table 👨‍👩‍👧‍👦</h3>
                </div>

                <div onClick={() => setTableType("Party")} className={tableType === "Party" ? "table-card active" : "table-card"}>
                    <h3>Party Hall 🎉</h3>
                </div>
            </div>

            <h2 className="section-title">Book Your table now !!</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <input type="text" name="name" placeholder="Name" value={formdata.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formdata.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formdata.message} onChange={handleChange} required />
                <button type="submit" className="btn">Book Table</button>
            </form>

            {/*Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2> Booking Confirmed ✅</h2>
                        <p>Table Type: {tableType}</p>
                        <button onClick={() => setShowModal(false)}>close</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Table;