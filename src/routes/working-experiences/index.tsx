import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Card from "~/components/card/card";
import Header from "~/components/header/header";
import type WorkingExperienceProps from "~/interfaces/WorkingExperienceProps";

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

export default component$(() => {
  const workingExperiencesSignal = useWorkingExperiences();
  return (
    <div>
      <Header pageName="Working experiences" />

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {workingExperiencesSignal.value.map((workingExperience) => (
          <Card
            key={workingExperience.id}
            title={workingExperience.positionAtWork.name}
            subtitle={workingExperience.company.name}
            startedWork={workingExperience.startedWork}
            finishedWork={workingExperience.finishedWork}
            footer={workingExperience.company.location}
          />
        ))}
      </div>
    </div>
  );
});
