import type CourseProps from "./CourseProps";
import type EducationalInstitutionProps from "./EducationalInstitutionProps";

export default interface QualificationProps {
  id: number;
  educationalInstitution: EducationalInstitutionProps;
  academicDegree: string;
  faculty: string;
  department: string;
  speciality: string;
  specialityIt: string;
  course: CourseProps;
  startedStudying: string;
  finishedStudying: string;
}
