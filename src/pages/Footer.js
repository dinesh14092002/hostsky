import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
    <div className="container">
      <div className="row">
        {/* Contact Section */}
        <div className="col-md-4">
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li>Email: info@skyhost.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>

        {/* Careers Section */}
        <div className="col-md-4">
          <h5>Careers</h5>
          <ul className="list-unstyled">
            <li>Join our team</li>
            <li>Open positions</li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="col-md-4">
          <h5>Address</h5>
          <p>
            SkyHost Pvt Ltd<br />
            123 Tech Park Road<br />
            banglore, India – 600001
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <small>© 2025 SkyHost. All rights reserved.</small>
      </div>
    </div>
  </footer>
);

export default Footer;
