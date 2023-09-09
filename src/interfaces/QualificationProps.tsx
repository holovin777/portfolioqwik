import type CourseProps from "./CourseProps";
import type EducationalInstitution from "./EducationalInstitution";

export default interface QualificationProps {
      id: number,
      educationalInstitution: EducationalInstitution,
      academicDegree: string,
      faculty: string,
      department: string,
      speciality: string,
      course: CourseProps,
      startedStudying: string,
      finishedStudying: string
}