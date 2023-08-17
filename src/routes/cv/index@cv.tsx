import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

import styles from './index.css?inline'


export const useCustomer = routeLoader$(async () => {
  const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${import.meta.env.PUBLIC_CUSTOMER_ID}`, {
    headers: { Accept: 'application/json' },
  });
  return (await response.json()) as {
    firstName: string;
    lastName: string;
    desiredProfession: string;
    description: string;
    phoneNumber: string;
    birthday: string;
    email: string;
    residence: string;
    website: string;
    drivingLicense: string;
    workingExperiences: {
      id: number,
      positionAtWork: {
        id: number,
        name: string,
        nameItaly: string
      },
      company: {
        id: number,
        name: string,
        location: string
      },
      startedWork: string,
      finishedWork: string
    }[],
    qualifications: {
      id: number,
      educationalInstitution: {
        id: string,
        name: string,
        studyPlace: string,
        location: string
      },
      academicDegree: string,
      faculty: string,
      department: string,
      speciality: string,
      course: {
        id: number,
        name: string
      },
      startedStudying: string,
      finishedStudying: string
    }[];
  };
});

export default component$(() => {

  useStylesScoped$(styles);
  const customerSignal = useCustomer();

  return (
    <div class="p-4">
      <div class="text-center text-3xl pb-4">Curriculum vitae</div>
      <div class="m-4 text-4xl font-bold">{customerSignal.value.firstName + " " + customerSignal.value.lastName}</div>
      <div class="">Tel: <span class="font-bold">{customerSignal.value.phoneNumber}</span></div>
      <div class="">Date of birth: <span class="font-bold">{customerSignal.value.birthday}</span></div>
      <div class="">Email: <span class="font-bold">{customerSignal.value.email}</span></div>
      <div class="">Residance: <span class="font-bold">{customerSignal.value.residence}</span></div>
      <a href={customerSignal.value.website}>Website: <span class="font-bold">{customerSignal.value.website}</span></a>
      <div class="">Driving license: <span class="font-bold">{customerSignal.value.drivingLicense}</span></div>

      <div class="table-container flex justify-center mt-4">
        <table class="border-separate border border-slate-500 hover:border-spacing-1">
          <caption class="caption-top text-2xl font-bold p-4">
            Working experiences
          </caption>
          <thead>
            <tr>
              <th class="border border-slate-600 p-2">Started work</th>
              <th class="border border-slate-600 p-2">Position at work</th>
              <th class="border border-slate-600 p-2">Company</th>
              <th class="border border-slate-600 p-2">Finished work</th>
            </tr>
          </thead>
          <tbody>
            {customerSignal.value.workingExperiences.map((we) =>
              <tr class="p-12" key={we.id}>
                <td class="border border-slate-700 p-2">{we.startedWork}</td>
                <td class="border border-slate-700 p-2">{we.positionAtWork.name}</td>
                <td class="border border-slate-700 p-2">{we.company.name}</td>
                <td class="border border-slate-700 p-2">{we.finishedWork}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div class="table-container flex justify-center mt-4">
        <table class="border-separate border border-slate-500 hover:border-spacing-1">
          <caption class="caption-top text-2xl font-bold p-4">
            Course certifications
          </caption>
          <thead>
            <tr>
              <th class="border border-slate-600 p-2">Course name</th>
              <th class="border border-slate-600 p-2">Course brand</th>
              <th class="border border-slate-600 p-2">Finished studying</th>
            </tr>
          </thead>
          <tbody>
            {customerSignal.value.qualifications.map((q) =>
              (q.educationalInstitution.studyPlace === "COURSE") &&
              <tr class="p-12" key={q.id}>
                <td class="border border-slate-700 p-2">{q.course.name}</td>
                <td class="border border-slate-700 p-2">{q.educationalInstitution.name}</td>
                <td class="border border-slate-700 p-2">{q.finishedStudying}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div class="table flex justify-center mt-4">
        <table class="border-separate border border-slate-500 hover:border-spacing-1">
          <caption class="caption-top text-2xl font-bold p-4">
            Academic degrees
          </caption>
          <thead>
            <tr>
              <th class="w-28 border border-slate-600 p-2">Started studying</th>
              <th class="border border-slate-600 p-2">Academic degree</th>
              <th class="border border-slate-600 p-2">Speciality</th>
              <th class="border border-slate-600 p-2">Educational institution</th>
              <th class="border border-slate-600 p-2">Location</th>
              <th class="w-28 border border-slate-600 p-2">Finished studying</th>
            </tr>
          </thead>
          <tbody>
            {customerSignal.value.qualifications.map((q) =>
              (q.educationalInstitution.studyPlace === "UNIVERSITY" || q.educationalInstitution.studyPlace === "COLLEGE") &&
              <tr class="p-12" key={q.id}>
                <td class="border border-slate-700 p-2">{q.startedStudying}</td>
                <td class="border border-slate-700 p-2">{
                  (q.academicDegree) === "JUNIOR_SPECIALIST" ? "JUNIOR SPECIALIST" : q.academicDegree
                }</td>
                <td class="border border-slate-700 p-2">{q.speciality}</td>
                <td class="border border-slate-700 p-2">{q.educationalInstitution.name}</td>
                <td class="border border-slate-700 p-2">{q.educationalInstitution.location}</td>
                <td class="border border-slate-700 p-2">{q.finishedStudying}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div class="m-6 text-sm">
        Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base all’art. 13 del D. Lgs. 196/2003 e
        all’art. 13 del Regolamento UE 2016/679 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati
        personali.
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to my curriculum',
  meta: [
    {
      name: 'description',
      content: 'Curriculum site description',
    },
  ],
};
