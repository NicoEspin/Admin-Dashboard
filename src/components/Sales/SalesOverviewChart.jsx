import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const monthlySalesData = [
  { mes: "Ene", ventas: 4000 },
  { mes: "Feb", ventas: 3000 },
  { mes: "Mar", ventas: 5000 },
  { mes: "Abr", ventas: 4500 },
  { mes: "May", ventas: 6000 },
  { mes: "Jun", ventas: 5500 },
  { mes: "Jul", ventas: 7000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Este Mes");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg
    rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className=" text-xl font-semibold text-gray-100">
          Gráfico general de Ventas
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3  py-1 focus:outline-none
            focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>Este Mes</option>
          <option>Esta Semana</option>
          <option>Esta Quincena</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={monthlySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="mes" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area type="monotone" dataKey="ventas" stroke="#8B5CF6"
            fill="#8B5CF6" fillOpacity={0.3}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
