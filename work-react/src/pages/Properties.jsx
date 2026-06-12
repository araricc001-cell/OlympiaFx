import properties from "../data/properties";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from './../components/PageTransition';

const Properties = () => {
  return (
    <PageTransition>

    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Featured Lands
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((land) => (
          <Link
            key={land.id}
            to={`/property/${land.id}`}
          >
       <motion.div
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  transition={{
    duration: 0.3,
  }}
  className="bg-white rounded-xl shadow-lg overflow-hidden"
>


              <img
                src={land.image}
                alt={land.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h2 className="font-bold text-xl">
                  {land.title}
                </h2>

                <p>{land.location}</p>

                <p className="text-green-600 font-bold mt-2">
                  {land.price}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default Properties;