import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const Danger = () => {
  return (
    <motion.div
      className="bg-red-900 backdrop-filter backdrop-blur-ld
    shadow-lg border border-red-600 rounded-xl p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <Trash2 size={24} className="text-red-400 mr-3" />
        <h2 className="text-xl font-semibold text-gray-100">
          Acciones Peligrosas
        </h2>
      </div>
      <p className="text-gray-300">
        Eliminar permanentemente tu cuenta y todo su contenido.
      </p>
      <button className="mt-4 bg-red-600 hover:bg-red-700 text-white
      font-bold py-2 px-4 rounded transition duration-200">
        Eliminar Cuenta
      </button>
    </motion.div>
  );
};

export default Danger;
