import DashboardSummary from "../../components/dashboard/DashboardSummary";
import WardComparison from "../../components/dashboard/WardComparison";
import TopAchievements from "../../components/dashboard/TopAchievements";

export default function DashboardPage() {
  return (
    <>
      <DashboardSummary />
      <WardComparison />
      <TopAchievements />
    </>
  );
}
