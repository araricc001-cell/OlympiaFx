import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-green-600 py-20 text-center text-white">

      <h2 className="text-4xl font-bold">
        Ready To Own Land?
      </h2>

      <p className="mt-4">
        Let's help you secure your dream property.
      </p>

      <Link
        to="/buy-land"
        className="inline-block mt-6 bg-white text-green-600 px-8 py-3 rounded-lg font-bold"
      >
        Get Started
      </Link>

    </section>
  );
};

export default CTA;