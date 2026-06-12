const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Client Testimonials
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="shadow p-6 rounded-xl">
          <p>
            OlympiaFX helped me buy genuine land in Ibadan.
          </p>

          <h3 className="font-bold mt-4">
            - Mr Ade
          </h3>
        </div>

        <div className="shadow p-6 rounded-xl">
          <p>
            Very professional and trustworthy service.
          </p>

          <h3 className="font-bold mt-4">
            - Mrs Sarah
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;