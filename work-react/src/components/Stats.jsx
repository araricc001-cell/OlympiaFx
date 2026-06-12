import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

      <motion.div
  whileHover={{
    scale: 1.1,
  }}
>
          <h2 className="text-5xl font-bold">500+</h2>
          <p>Plots Sold</p>
        </motion.div>

        <motion.div
  whileHover={{
    scale: 1.1,
  }}
>
          <h2 className="text-5xl font-bold">250+</h2>
          <p>Happy Clients</p>
        </motion.div>

        <motion.div
  whileHover={{
    scale: 1.1,
  }}
>
          <h2 className="text-5xl font-bold">15+</h2>
          <p>Locations</p>
        </motion.div>

        <motion.div
  whileHover={{
    scale: 1.1,
  }}
>
          <h2 className="text-5xl font-bold">100%</h2>
          <p>Verified Lands</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;