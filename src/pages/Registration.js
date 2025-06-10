import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/skyhost/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="p-6">
      <div className="shadow-xl p-6 bg-white rounded-lg">
        <h1 className="text-4xl font-bold mb-6">Register Now</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="p-3 border border-gray-300 rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />

          <button
            type="submit"
            className="reg-btn"
          >
            Register
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
          <div className="w-full h-64 overflow-hidden rounded">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.854143624303!2d77.65612107321073!3d13.023767013736169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119573450a99%3A0xe8253f456212c7ea!2sHostsky!5e1!3m2!1sen!2sin!4v1749443102450!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Registration;
