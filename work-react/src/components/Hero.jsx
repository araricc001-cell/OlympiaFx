import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
  className="
  min-h-screen

  bg-linear-to-br
  from-slate-950
  via-slate-900
  to-black

  dark:from-black
  dark:via-slate-950
  dark:to-black

  text-white
"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
       <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-7xl font-bold"
>
  Buy Verified Lands
</motion.h1>
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
  }}
  className="mt-6 max-w-2xl text-lg"
>
  Secure genuine land investments in strategic locations across Nigeria.
</motion.p>

        <div className="mt-8 flex flex-col md:flex-row gap-5">
         <motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.5,
  }}
  className="mt-8 flex flex-col md:flex-row gap-5"
>
    <Link to="/properties" className="bg-green-600 text-white px-8 py-4 rounded-lg inline-block">
      Sell Lands
    </Link>
  </motion.div>

         <motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.5,
  }}
  className="mt-8 flex flex-col md:flex-row gap-5"
>
    <Link to="/properties" className="bg-green-600 text-white px-8 py-4 rounded-lg inline-block">
      Buy Lands
    </Link>
  </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;