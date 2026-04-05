import './Contact.css';

function Contact() {
    return (
        <div className="contact-page">

            {/* hero section*/}
            <div className="contact-hero">
                <h1>Contact Our Cafe ☕</h1>
                <p>Home / Contact</p>
            </div>

            {/*Info cards*/}
            <div className="contact-info">

                <div className="contact-card">
                    <h3>📍 Our Address</h3>
                    <p>4648 Saravanapatty</p>
                </div>

                <div className="contact-card">
                    <h3>📧 Email</h3>
                    <p>info@restaurant.com</p>
                </div>

                <div className="contact-card">
                    <h3>📞 Phone</h3>
                    <p>+91 9876543210</p>
                </div>

                <div className="contact-card">
                    <h3>⏰ Opening Hours</h3>
                    <p>Mon-Sun : 9AM - 10PM</p>
                </div>
            </div>

            {/*Map*/}
            <div className="contact-map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31323.652322407033!2d76.98402945227052!3d11.07931226902625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7f3acac202b%3A0xb9a1348889c47108!2sSaravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1774528650615!5m2!1sen!2sin"
                title="map"></iframe>
            </div>

        </div>
    );
}

export default Contact;