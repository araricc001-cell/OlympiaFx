import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-10">
          Contact Us
        </h1>

      <form className="bg-white p-8 rounded-xl shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full border p-3 rounded"
        />

        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>

      <a
        href="https://wa.me/2348012345678"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
    </motion.div>
    </PageTransition>
  );
};

export default Contact;