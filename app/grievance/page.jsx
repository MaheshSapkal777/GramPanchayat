import GrievanceForm from "../../components/grievance/GrievanceForm";
import GrievanceStatusList from "../../components/grievance/GrievanceStatusList";
import GrievanceContactInfo from "../../components/grievance/GrievanceContactInfo";

export default function GrievancePage() {
  return (
    <>
      <GrievanceForm />
      <GrievanceStatusList />
      <GrievanceContactInfo />
    </>
  );
}
