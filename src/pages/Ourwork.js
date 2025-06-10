import React from "react";


const Home = () => (
  <div className="container py-5">
    {/* First Section */}
    <div className="bg-light p-5 rounded shadow mb-5">
      <h1 className="display-4 mb-3">Welcome to SkyHost</h1>
      <p className="lead text-muted">
        SkyHost offers reliable and scalable hosting solutions tailored for businesses and developers.
        Whether you're launching your first website or managing a growing portfolio of applications, 
        our modern infrastructure and expert support ensure speed, security, and seamless performance.
        Explore our services to see how we can help you succeed online.
      </p>
    </div>

    {/* Second Section: Left Content and Right Image */}
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
          src="https://hostsky.in/assets/img/about.jpg"
          alt="Hosting Services"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>
);

export default Home;
