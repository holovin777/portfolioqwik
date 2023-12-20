import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import styles from "./index.css?inline";
import type CustomerProps from "~/interfaces/CustomerProps";
import type WorkingExperienceProps from "~/interfaces/WorkingExperienceProps";
import type QualificationProps from "~/interfaces/QualificationProps";

export const useCustomer = routeLoader$(async () => {
  const response = await fetch(
    `${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${
      import.meta.env.PUBLIC_CUSTOMER_ID
    }`,
    {
      headers: { Accept: "application/json" },
    }
  );
  return (await response.json()) as CustomerProps;
});

export const useWorkingExperiences = routeLoader$(async () => {
  const response = await fetch(
    `${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${
      import.meta.env.PUBLIC_CUSTOMER_ID
    }/working-experience/all`,
    {
      headers: { Accept: "application/json" },
    }
  );
  return (await response.json()) as WorkingExperienceProps[];
});

export const useQualifications = routeLoader$(async () => {
  const response = await fetch(
    `${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${
      import.meta.env.PUBLIC_CUSTOMER_ID
    }/qualification/all`,
    {
      headers: { Accept: "application/json" },
    }
  );
  return (await response.json()) as QualificationProps[];
});

export default component$(() => {
  useStylesScoped$(styles);
  const customerSignal = useCustomer();
  const workingExperiencesSignal = useWorkingExperiences();
  const qualificationsSignal = useQualifications();

  return (
    <div class="p-4">
      <div class="text-center text-3xl pb-4">Curriculum vitae</div>
      <div class="m-4 text-4xl font-bold">
        {customerSignal.value.firstName + " " + customerSignal.value.lastName}
      </div>
      <div class="">
        Numero:{" "}
        <span class="font-bold">{customerSignal.value.phoneNumber}</span>
      </div>
      <div class="">
        Data di nacsita:{" "}
        <span class="font-bold">
          {new Date(customerSignal.value.birthday).toLocaleString("it-IT", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </span>
      </div>
      <div class="">
        Email: <span class="font-bold">{customerSignal.value.email}</span>
      </div>
      <div class="">
        Residenza:{" "}
        <span class="font-bold">{customerSignal.value.residence}</span>
      </div>
      <a href={customerSignal.value.website}>
        Sito web: <span class="font-bold">{customerSignal.value.website}</span>
      </a>
      <div class="">
        Patente:{" "}
        <span class="font-bold">{customerSignal.value.drivingLicense}</span>
      </div>

      <div class="table-container flex justify-center mt-4">
        <table class="border-separate border border-slate-500 hover:border-spacing-1">
          <caption class="caption-top text-2xl font-bold p-4">
            Esperienze lavorative
          </caption>
          <thead>
            <tr>
              <th class="border border-slate-600 p-2 w-8">Data d'inizio</th>
              <th class="border border-slate-600 p-2 w-8">Data di fine</th>
              <th class="border border-slate-600 p-2">Professione</th>
              <th class="border border-slate-600 p-2">Azienda</th>
              <th class="border border-slate-600 p-2">Descrizzioni</th>
              <th class="border border-slate-600 p-2">Luogo</th>
            </tr>
          </thead>
          <tbody>
            {workingExperiencesSignal.value.map((we) => (
              <tr class="p-12" key={we.id}>
                <td class="border border-slate-700 p-2">
                  {new Date(we.startedWork).toLocaleString("it-IT", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </td>
                <td class="border border-slate-700 p-2">
                  {new Date(we.finishedWork).toLocaleString("it-IT", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </td>
                <td class="border border-slate-700 p-2">
                  <u>{we.positionAtWork.nameItaly}</u>
                </td>
                <td class="border border-slate-700 p-2">{we.company.name}</td>
                <td class="border border-slate-700 p-2">
                  {we.jobDescriptionItaly}
                </td>
                <td class="border border-slate-700 p-2">
                  {we.company.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="table-container flex justify-center mt-4">
        <table class="border-separate border border-slate-500 hover:border-spacing-1">
          <caption class="caption-top text-2xl font-bold p-4">
            Titoli accademici
          </caption>
          <thead>
            <tr>
              <th class="w-8 border border-slate-600 p-2">Data d'inizio</th>
              <th class="w-8 border border-slate-600 p-2">Data di fine</th>
              <th class="border border-slate-600 p-2">Titolo accademico</th>
              <th class="border border-slate-600 p-2">Specializzazione</th>
              <th class="border border-slate-600 p-2">Istituto d'Istruzione</th>
              <th class="border border-slate-600 p-2">Luogo</th>
            </tr>
          </thead>
          <tbody>
            {qualificationsSignal.value.map(
              (q) =>
                (q.educationalInstitution.studyPlace === "UNIVERSITY" ||
                  q.educationalInstitution.studyPlace === "COLLEGE") && (
                  <tr class="p-12" key={q.id}>
                    <td class="border border-slate-700 p-2">
                      {new Date(q.startedStudying).toLocaleString("it-IT", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </td>
                    <td class="border border-slate-700 p-2">
                      {new Date(q.finishedStudying).toLocaleString("it-IT", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </td>
                    <td class="border border-slate-700 p-2">
                      <u>
                        {q.academicDegree === "JUNIOR_SPECIALIST"
                          ? "JUNIOR SPECIALIST"
                          : q.academicDegree}
                      </u>
                    </td>
                    <td class="border border-slate-700 p-2">
                      {q.specialityItaly}
                    </td>
                    <td class="border border-slate-700 p-2">
                      {q.educationalInstitution.nameItaly}
                    </td>
                    <td class="border border-slate-700 p-2">
                      {q.educationalInstitution.location}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

      <div class="table-container flex justify-center mt-4">
        <table class="border-separate border border-slate-500 hover:border-spacing-1">
          <caption class="caption-top text-2xl font-bold p-4">Certificazioni conseguite</caption>
          <thead>
            <tr>
              <th class="border border-slate-600 p-2">Data di fine</th>
              <th class="border border-slate-600 p-2">Nome del corso</th>
              <th class="border border-slate-600 p-2">Azienda</th>
            </tr>
          </thead>
          <tbody>
            {qualificationsSignal.value.map(
              (q) =>
                q.educationalInstitution.studyPlace === "COURSE" && (
                  <tr class="p-12" key={q.id}>
                    <td class="border border-slate-700 p-2 w-8">
                      {new Date(q.finishedStudying).toLocaleString("it-IT", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </td>
                    <td class="border border-slate-700 p-2"><u>{q.course.name}</u></td>
                    <td class="border border-slate-700 p-2">
                      {q.educationalInstitution.name}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

      {customerSignal.value.protectedCategory === true && (
        <div class="m-6">
          APPARTENENTE CAT. PROT. L. 68/99
        </div>
      )}

      <div class="m-6 text-sm">
        Autorizzo il trattamento dei dati personali contenuti nel mio curriculum
        vitae in base all'art. 13 del D. Lgs. 196/2003 e all'art. 13 del
        Regolamento UE 2016/679 relativo alla protezione delle persone fisiche
        con riguardo al trattamento dei dati personali.
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my curriculum",
  meta: [
    {
      name: "description",
      content: "Curriculum site description",
    },
  ],
};
