import type QualificationProps from "./QualificationProps";
import type WorkingExperienceProps from "./WorkingExperienceProps";

export default interface CustomerProps {
  firstName: string;
  lastName: string;
  desiredProfession: string;
  description: string;
  phoneNumber: string;
  birthday: string;
  email: string;
  residence: string;
  residenceIt: string;
  website: string;
  blog: string;
  drivingLicense: string;
  protectedCategory: boolean;
  workingExperiences: WorkingExperienceProps[];
  qualifications: QualificationProps[];
}
