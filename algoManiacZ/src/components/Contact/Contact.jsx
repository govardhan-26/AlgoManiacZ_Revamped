import { useState } from "react";
import contactBackgroundImage from "../../assets/Connect.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    clgname: "",
    number: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="md:h-[calc(100vh-112px)] h-auto bg-no-repeat bg-cover bg-center md:bg-left lg:bg-left xl:bg-left text-[#aeadaa]"
      style={{
        backgroundImage: `url(${contactBackgroundImage})`,
      }}
    >
      <div className=" mx-auto px-4 py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="flex flex-col items-center justify-around  md:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 text-center">
            <h1 className="text-4xl font-bold text-center lg:text-5xl xl:text-5xl">
              Join Us
            </h1>
            <h2 className="text-4xl font-semibold mt-4">
              Please fill your information here
            </h2>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10 md:w-1/2 lg:w-2/3 w-full text-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring "
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  id="username"
                  placeholder="LeetCode username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  id="clgname"
                  placeholder="College Name"
                  name="clgname"
                  value={formData.clgname}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  id="number"
                  placeholder="Mobile Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  id="id"
                  placeholder="Discord Id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
