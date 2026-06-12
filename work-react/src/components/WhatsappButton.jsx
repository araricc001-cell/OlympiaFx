import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/2348012345678"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-xl text-white text-3xl z-50 hover:scale-110 duration-300"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;