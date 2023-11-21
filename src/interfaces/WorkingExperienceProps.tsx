import type CompanyProps from "./CompanyProps";
import type PositionAtWorkProps from "./PositionAtWorkProps";

export default interface WorkingExperienceProps {
  id: number;
  positionAtWork: PositionAtWorkProps;
  company: CompanyProps;
  startedWork: string;
  finishedWork: string;
}
