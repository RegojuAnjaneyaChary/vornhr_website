import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919966629766";
const WHATSAPP_MESSAGE = "Hello! I would like to know more about VORN HR.";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed z-50
        bottom-4 right-4
        h-14 w-14
        rounded-full
        bg-green-500 text-white
        flex items-center justify-center
        shadow-xl
        hover:scale-105 transition
      "
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;

