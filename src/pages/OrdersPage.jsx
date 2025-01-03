import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import {motion} from "framer-motion"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import DailyOrders from "../components/Orders/DailyOrders";
import OrderDistribution from "../components/Orders/OrderDistribution";
import OrderList from "../components/Orders/OrderList";

const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

const OrdersPage = () => {
  return (
    <section className='flex-1 overflow-auto z-10'>
        <Header title="Órdenes"/>
        
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
					className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Órdenes Totales' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
					<StatCard name='Órdenes Pendientes' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatCard
						name='Órdenes Completadas'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981'
					/>
					<StatCard name='Ganancias Totales' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
				</motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders/>
          <OrderDistribution/>

        </div>
		<OrderList/>
        </main>
    </section>
  )
}

export default OrdersPage