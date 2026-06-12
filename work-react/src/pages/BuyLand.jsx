import { useState } from "react";

const BuyLand = () => {
  const [formData, setFormData] = useState({
    location: "",
    plotSize: "",
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
    alert("Land Request Submitted");
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Buy Land
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl space-y-4"
      >
        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="plotSize"
          placeholder="Plot Size"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

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

export default BuyLand;