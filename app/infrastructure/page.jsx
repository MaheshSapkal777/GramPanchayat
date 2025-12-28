import InfrastructureGrid from "../../components/infrastructure/InfrastructureGrid";
import SmartVillageDashboard from "../../components/infrastructure/SmartVillageDashboard";
import InfrastructureMapPlaceholder from "../../components/infrastructure/InfrastructureMapPlaceholder";

export default function InfrastructurePage() {
  return (
    <>
      <InfrastructureGrid />
      <SmartVillageDashboard />
      <InfrastructureMapPlaceholder />
    </>
  );
}
