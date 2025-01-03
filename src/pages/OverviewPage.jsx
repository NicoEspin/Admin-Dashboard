import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { Zap, ShoppingBag, Users, BarChart2 } from "lucide-react";
import SalesOverviewChart from "../components/Overview/SalesOverviewChart";
import SalesChannelChart from "../components/Overview/SalesChannelChart";
import CategoryDistributionChart from "../components/Overview/CategoryDistributionChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Descripción General" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Estadisticas */}
        <motion.div
          className="grid grid-cols-1 gap-8 
     sm:grid-cols-2 lg:grid-cols-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Ventas Totales"
            icon={Zap}
            value="$15,235"
            color="#6366F1"
          />
          <StatCard
            name="Nuevos Usuarios"
            icon={Users}
            value="1,234"
            color="#885CF6"
          />
          <StatCard
            name="Total de Productos"
            icon={ShoppingBag}
            value="620"
            color="#EC4899"
          />
          <StatCard
            name="Tasa de Conversion"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>

        {/* Graficos */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
