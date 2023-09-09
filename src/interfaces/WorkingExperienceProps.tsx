import type CompanyProps from "./CompanyProps";
import type PositionAtWork from "./PositionAtWork";

export default interface WorkingExperienceProps {
    id: number,
    positionAtWork: PositionAtWork,
    company: CompanyProps,
    startedWork: string,
    finishedWork: string
}