import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dailySalesData = [
	{ dia: "Lun", ventas: 1000 },
	{ dia: "Mar", ventas: 1200 },
	{ dia: "Mie", ventas: 900 },
	{ dia: "Jue", ventas: 1100 },
	{ dia: "Vie", ventas: 1300 },
	{ dia: "Sab", ventas: 1600 },
	{ dia: "Dom", ventas: 1400 },
];
const DailySalesTrend = () => {
  return (
   <motion.div   className="bg-gray-800 bg-opacity-50 p-6 backdrop-blur-md rounded-xl
   shadow-lg border border-gray-700"
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 20 }}
       transition={{ delay: 0.3 }}>
    
    <h2 className="text-xl font-semibold text-gray-100 mb-4">
      Ventas Semanales
    </h2>
    <div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='dia' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Bar dataKey='ventas' fill='#10B981' />
					</BarChart>
				</ResponsiveContainer>
			</div>
   </motion.div>
  )
}

export default DailySalesTrend