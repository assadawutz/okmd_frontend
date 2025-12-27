import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ShareButtons() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-bold text-gray-800">Share</span>

      <div className="flex items-center gap-2">
        <button
          aria-label="Facebook" 
          className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition">
          <FaFacebookF size={12} />
        </button>

        <button
          aria-label="X"
          className="w-6 h-6  rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          <FaXTwitter size={12} />
        </button>

        <button
          aria-label="Google"
          className="w-6 h-6 flex items-center justify-center rounded-full
                     bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          <FaGoogle size={12} />
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
