import { useState } from "react";

const BuildHome = () => {
  const [formData, setFormData] = useState({
    bedrooms: "",
    style: "",
    landStatus: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Home Building Request Submitted");
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Build My Home
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl space-y-4"
      >
        <input
          type="number"
          name="bedrooms"
          placeholder="Number of Bedrooms"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="style"
          placeholder="Duplex, Bungalow, Modern..."
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <select
          name="landStatus"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        >
          <option value="">Do you own land?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <input
          type="number"
          name="budget"
          placeholder="Budget"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BuildHome;