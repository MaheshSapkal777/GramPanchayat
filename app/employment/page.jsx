import JobAndTenderList from "../../components/employment/JobAndTenderList";
import SkillTrainingPrograms from "../../components/employment/SkillTrainingPrograms";
import TalentDirectory from "../../components/employment/TalentDirectory";
import FarmerSupportPlaceholder from "../../components/employment/FarmerSupportPlaceholder";

export default function EmploymentPage() {
  return (
    <>
      <JobAndTenderList />
      <SkillTrainingPrograms />
      <TalentDirectory />
      <FarmerSupportPlaceholder />
    </>
  );
}
