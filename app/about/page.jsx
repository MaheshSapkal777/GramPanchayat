import AboutIntro from "../../components/about/AboutIntro";
import LeadersGrid from "../../components/about/LeadersGrid";
import OfficeInfo from "../../components/about/OfficeInfo";
import RolesList from "../../components/about/RolesList";
import EmergencyContacts from "../../components/about/EmergencyContacts";
import VisionMission from "../../components/about/VisionMission";

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <LeadersGrid />
      <OfficeInfo />
      <RolesList />
      <EmergencyContacts />
      <VisionMission />
    </>
  );
}
