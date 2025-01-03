import { motion } from "framer-motion";
import Header from "../components/common/Header";
import AnalyticCards from "../components/Analytics/AnalyticCards";
import RevenueChart from "../components/Analytics/RevenueChart";
import ProductPerformance from "../components/Analytics/ProductPerformance";
import UserRetention from "../components/Analytics/UserRetention";
import CostumerSegmentation from "../components/Analytics/CostumerSegmentation";
import ChannelPerformance from "../components/Analytics/ChannelPerformance";
import AIPowered from "../components/Analytics/AIPowered";

const AnalyticsPage = () => {
  return (
    <section className="flex-1 overflow-auto z-10">
      <Header title="Analítica" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <AnalyticCards />
        <RevenueChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CostumerSegmentation />
        </div>
      <AIPowered/>
      </main>
    </section>
  );
};

export default AnalyticsPage;
