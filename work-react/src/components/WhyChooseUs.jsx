
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose OlympiaFX
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

        <motion.div
  whileHover={{ y: -10 }}
  className="bg-white p-8 rounded-xl text-center shadow"
>
            <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">
              Verified Lands
            </h3>
            <p>
              All properties are properly verified.
            </p>
          </motion.div>

          <motion.div
  whileHover={{ y: -10 }}
  className="bg-white p-8 rounded-xl text-center shadow"
>
            <FaMapMarkedAlt className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">
              Strategic Locations
            </h3>
            <p>
              Lands in fast-growing locations.
            </p>
          </motion.div>

          <motion.div
  whileHover={{ y: -10 }}
  className="bg-white p-8 rounded-xl text-center shadow"
>
            <FaHandshake className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl">
              Trusted Service
            </h3>
            <p>
              Transparent transactions.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;