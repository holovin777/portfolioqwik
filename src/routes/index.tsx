import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import type CustomerProps from "~/interfaces/CustomerProps";

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

export default component$(() => {
  const customerSignal = useCustomer();

  return (
    <div class="p-4">
      <div class="dark:text-sky-300 text-4xl font-bold">
        {customerSignal.value.firstName + " " + customerSignal.value.lastName}
      </div>
      <div class="dark:text-sky-400 text-4xl">
        {customerSignal.value.desiredProfession}
      </div>
      <div class="my-4 dark:text-sky-500 text-2xl">
        {customerSignal.value.description}
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
