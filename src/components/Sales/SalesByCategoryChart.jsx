import { motion } from "framer-motion";
import { PieChart, ResponsiveContainer, Pie,Cell,Tooltip,Legend } from "recharts";

const salesByCategory = [
  { name: "Electronica", value: 400 },
  { name: "Ropa", value: 300 },
  { name: "Hogar y Jardín", value: 200 },
  { name: "Libros", value: 100 },
  { name: "Otros", value: 150 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 p-6 backdrop-blur-md rounded-xl
  shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Ventas por Categoría
      </h2>
      <div style={{width:"100%", height:300}}>
        <ResponsiveContainer>
          <PieChart data={salesByCategory}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>

<Pie
							data={salesByCategory}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{salesByCategory.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesByCategoryChart;
