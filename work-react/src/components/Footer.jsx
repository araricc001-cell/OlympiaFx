import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        <div>
          <h2 className="font-bold text-2xl">
            OlympiaFX Properties
          </h2>

          <p className="mt-3 text-gray-400">
            Trusted land buying and selling
            solutions in Nigeria.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Quick Links
          </h3>

          <div className="flex flex-col mt-3 gap-2">
            <Link to="/">Home</Link>
            <Link to="/properties">Lands</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">
            Contact
          </h3>

          <p className="mt-3">
            Lagos, Nigeria
          </p>

          <p>
            info@olympiafx.com
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;