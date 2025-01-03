import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
	{ id: "ORD001", cliente: "John Doe", total: 235.4, estado: "Entregado", fecha: "07/01/2024" },
	{ id: "ORD002", cliente: "Jane Smith", total: 412.0, estado: "Procesado", fecha: "07/02/2024" },
	{ id: "ORD003", cliente: "Bob Johnson", total: 162.5, estado: "En Camino", fecha: "07/03/2024" },
	{ id: "ORD004", cliente: "Alice Brown", total: 750.2, estado: "Pendiente", fecha: "07/04/2024" },
	{ id: "ORD005", cliente: "Charlie Wilson", total: 95.8, estado: "Entregado", fecha: "07/05/2024" },
	{ id: "ORD006", cliente: "Eva Martinez", total: 310.75, estado: "Procesado", fecha: "07/06/2024" },
	{ id: "ORD007", cliente: "David Lee", total: 528.9, estado: "En Camino", fecha: "07/07/2024" },
	{ id: "ORD008", cliente: "Grace Taylor", total: 189.6, estado: "Entregado", fecha: "07/08/2024" },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.cliente.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Numero de Orden
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Cliente
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Total
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Estado
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Fecha
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Acciones
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700'>
						{filteredOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.id}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.cliente}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									${order.total.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.estado === "Entregado"
												? "bg-green-100 text-green-800"
												: order.estado === "Procesado"
												? "bg-yellow-100 text-yellow-800"
												: order.estado === "En Camino"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.estado}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{order.fecha}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Eye size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default OrdersTable;
