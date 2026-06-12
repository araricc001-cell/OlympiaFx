const PropertyModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-xl w-[90%] max-w-md">

        <h2 className="text-2xl font-bold mb-4">
          Enquire About {title}
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Send Inquiry
        </button>

        <button
          onClick={onClose}
          className="w-full mt-3 border py-3 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default PropertyModal;