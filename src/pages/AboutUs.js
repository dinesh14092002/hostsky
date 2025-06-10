import React from "react";

const AboutUs = () => (
  <section className="p-6">
    <div className="shadow-xl p-6 bg-white rounded-lg">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        SkyHost is a dedicated team of developers and designers focused on building responsive, fast, and intuitive web applications.
      </p>
    </div>
    <div className="row align-items-center bg-white p-4 rounded shadow">
      {/* Left Side Content */}
      <div className="col-md-6 mb-4 mb-md-0">
        <h2 className="text-primary mb-3">Why Choose SkyHost?</h2>
        <p className="text-muted">
          With 24/7 customer support, high-performance servers, and advanced security features, 
          SkyHost empowers your digital presence. We ensure minimal downtime, fast load times, 
          and smooth scalability for your growing needs.
        </p>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div>

      {/* Right Side Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://www.skyhost.co.in/assets/img/800x800.png"
          alt="Hosting Services"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </section>
);

export default AboutUs;
