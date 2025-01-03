import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { mes: "Jan", ganancia: 4000, objetivo: 3800 },
  { mes: "Feb", ganancia: 3000, objetivo: 3200 },
  { mes: "Mar", ganancia: 5000, objetivo: 4500 },
  { mes: "Apr", ganancia: 4500, objetivo: 4200 },
  { mes: "May", ganancia: 6000, objetivo: 5500 },
  { mes: "Jun", ganancia: 5500, objetivo: 5800 },
  { mes: "Jul", ganancia: 7000, objetivo: 6500 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Este mes");
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg
  shadow-xl rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Ganancia VS Objetivo
        </h2>
        <select
          className="bg-gray-700 text-white px-3 py-1
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>Este Año</option>
          <option>Este Mes</option>
          <option>Esta Quincena</option>
          <option>Esta Semana</option>
        </select>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="ganancia"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="objetivo"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
