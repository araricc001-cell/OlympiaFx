const SellLand = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Sell Your Land
      </h1>

      <form className="bg-white p-8 shadow rounded-xl space-y-4">
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Land Size"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Asking Price"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Title Document"
          className="w-full border p-3 rounded"
        />

        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default SellLand;