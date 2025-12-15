// ADD THIS FILE

import ProjectGrid from "../../components/projects/ProjectGrid";
import ProjectTimeline from "../../components/projects/ProjectTimeline";
import ImpactDashboard from "../../components/projects/ImpactDashboard";

export default function ProjectsPage() {
  return (
    <>
      <ProjectGrid />
      <ProjectTimeline />
      <ImpactDashboard />
    </>
  );
}
