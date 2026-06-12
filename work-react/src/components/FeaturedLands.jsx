
import { Link } from "react-router-dom";
import properties from "../data/properties";
import { motion } from "framer-motion";

const FeaturedLands = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Lands
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {properties.slice(0, 3).map((land) => (
          <motion.div
  key={land.id}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{
    duration: 0.3,
  }}
  className="bg-white rounded-2xl shadow-lg overflow-hidden"
>
              <img
                src={land.image}
                alt={land.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="font-bold text-xl">
                  {land.title}
                </h3>

                <p className="text-gray-500">
                  {land.location}
                </p>

                <p className="font-bold text-green-600 mt-3">
                  {land.price}
                </p>

                <Link
                  to={`/property/${land.id}`}
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  View Land
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedLands;