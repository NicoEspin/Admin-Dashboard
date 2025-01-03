import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/Overview/CategoryDistributionChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Productos" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        {/* Estadisticas */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Productos Totales"
            icon={Package}
            value="$12,345"
            color="#6366F1"
          />
          <StatCard
            name="Mas Vendido"
            icon={TrendingUp}
            value="89"
            color="#6EE7B7"
          />
          <StatCard
            name="Peor Stock"
            icon={AlertTriangle}
            value="20"
            color="#F59E08"
          />
          <StatCard
            name="Ganancias Totales"
            icon={DollarSign}
            value="$800,000"
            color="#10B981"
          />
        </motion.div>

        <ProductTable />
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
