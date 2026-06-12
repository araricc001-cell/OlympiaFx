import Hero from "../components/Hero";
import FeaturedLands from "../components/FeaturedLands";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Home = () => {
 return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <>

 <Hero />
<Stats />
<FeaturedLands />
<WhyChooseUs />
</>
<CTA />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose OlympiaFX?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We help clients acquire verified lands,
            facilitate custom home projects, and
            provide expert real estate guidance.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            About Me
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 leading-8">
              OlympiaFX Properties is committed to helping
              individuals and families secure genuine lands,
              invest wisely, and build beautiful homes
              within their budget.
            </p>
          </div>
        </div>
      </section>
</motion.div>
    </PageTransition>
  );
};

export default Home;