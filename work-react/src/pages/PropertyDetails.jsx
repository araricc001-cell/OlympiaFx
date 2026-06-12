import { useParams } from "react-router-dom";
import properties from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-125 rounded-xl object-cover"
      />

      <div className="mt-10">

        <h1 className="text-5xl font-bold">
          {property.title}
        </h1>

        <p className="text-green-600 text-2xl mt-4">
          {property.price}
        </p>

        <p className="text-gray-600 mt-6 leading-8">
          {property.description}
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg"
          >
            Book Inspection
          </a>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetails;