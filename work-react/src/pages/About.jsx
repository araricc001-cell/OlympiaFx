import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
     <PageTransition>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">
        About OlympiaFX Properties
      </h1>

      <p className="text-gray-600 leading-8">
        OlympiaFX Properties specializes in helping individuals,
        families, and investors acquire genuine lands in strategic
        locations across Nigeria.

        We verify documents, assist with inspections, and ensure
        every transaction is transparent and secure.
      </p>
    </div>
    </motion.div>
    </PageTransition>
  );
};

export default About;