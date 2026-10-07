import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
    href="https://wa.me/221786137815?text=Bonjour%20Adama%2C%20je%20viens%20de%20voir%20votre%20portfolio."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white shadow-lg transition-all duration-300 animate-bounce hover:scale-110 hover:bg-green-600"
    >
    <FaWhatsapp className="h-7 w-7 " />
    </a>
  );
}

export default WhatsAppButton;