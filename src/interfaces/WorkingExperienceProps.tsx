import type CompanyProps from "./CompanyProps";
import type PositionAtWorkProps from "./PositionAtWorkProps";

export default interface WorkingExperienceProps {
  id: number;
  positionAtWork: PositionAtWorkProps;
  company: CompanyProps;
  jobDescription?: string;
  jobDescriptionIt?: string;
  startedWork: string;
  finishedWork: string;
}
