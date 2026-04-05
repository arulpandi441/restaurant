import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* Page Content */}
            <Outlet />

            {/* Footer */}
            <footer style={{ background: "black", color: "white", padding: "20px", textAlign: "center" }}>
                <h3>My Restaurant</h3>
                <p>© 2026 All Rights Reserved</p>
            </footer>
        </>
    )
};

export default Layout;