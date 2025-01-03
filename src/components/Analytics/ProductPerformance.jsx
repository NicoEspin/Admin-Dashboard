import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
  { nombre: "Producto A", ventas: 4000, ganancias: 2400, stock: 2400 },
  { nombre: "Producto B", ventas: 3000, ganancias: 1398, stock: 2210 },
  { nombre: "Producto C", ventas: 2000, ganancias: 9800, stock: 2290 },
  { nombre: "Producto D", ventas: 2780, ganancias: 3908, stock: 2000 },
  { nombre: "Producto E", ventas: 1890, ganancias: 4800, stock: 2181 },
];

const ProductPerformance = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Rendimiento de Productos
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="nombre" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="ventas" fill="#8B5CF6" />
            <Bar dataKey="ganancias" fill="#10B981" />
            <Bar dataKey="stock" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default ProductPerformance;
