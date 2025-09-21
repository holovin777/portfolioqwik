import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import Social from "~/components/social/social";
import type CustomerProps from "~/interfaces/CustomerProps";
import type SocialProps from "~/interfaces/SocialProps";

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

export const useSocials = routeLoader$(async () => {
  const response = await fetch(
    `${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${
      import.meta.env.PUBLIC_CUSTOMER_ID
    }/social/all/`,
    {
      headers: { Accept: "application/json" },
    }
  );
  return (await response.json()) as SocialProps[];
});

export default component$(() => {
  const customerSignal = useCustomer();
  const socialsSignal = useSocials();

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

        <Social socials={socialsSignal.value} />

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
