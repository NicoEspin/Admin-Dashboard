import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Eye,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

const overviewData = [
  { name: "Ganancias", value: "$1,234,567", change: 12.5, icon: DollarSign },
  { name: "Usuarios", value: "45,678", change: 8.3, icon: Users },
  { name: "Ordenes", value: "9,876", change: -3.2, icon: ShoppingBag },
  { name: "Visitas", value: "1,234,567", change: 15.7, icon: Eye },
];

const AnalyticCards = () => {
  return (
    <article className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg
             shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 9, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
              <p className="mt-1 text-xl font-semibold text-gray-100">
                {item.value}
              </p>
            </div>
            <div
              className={`
                p-3 rounded-full bg-opacity-20
                ${item.change >= 0 ? "bg-green-500" : "bg-red-500"} `}
            >
              <item.icon
                className={`size-6 ${
                  item.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              />
            </div>
          </div>
          <div
            className={`flex mt-4 items-center ${
              item.change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.change >= 0 ? (
              <ArrowUpRight size={20} />
            ) : (
              <ArrowDownRight size={20} />
            )}
            <span className="ml-1 text-sm font-medium">{item.change}%</span>
            <span className="ml-2 tex-sm text-gray-400">
              vs periodo anterior
            </span>
          </div>
        </motion.div>
      ))}
    </article>
  );
};

export default AnalyticCards;
