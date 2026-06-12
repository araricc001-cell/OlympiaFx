import PageTransition from "../components/PageTransition";

const Services = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-20 px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Land Sales
            </h2>

            <p>
              Verified residential and commercial lands.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Land Verification
            </h2>

            <p>
              Due diligence and title document checks.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Property Consultation
            </h2>

            <p>
              Investment and acquisition guidance.
            </p>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Services;