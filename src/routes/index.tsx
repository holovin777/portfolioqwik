import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';


export const useCustomer = routeLoader$(async () => {
    const response = await fetch('http://localhost:8080/api/v1/customer/4d936c7c-05ea-45f2-a91f-08518491c986', {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as {
        firstName: string;
        lastName: string;
        desiredProfession: string;
        description: string;
    };
});


export default component$(() => {

    const customerSignal = useCustomer();
  
  return (
    <div class="p-4">
      <div class="dark:text-gray-300 text-4xl font-bold">{customerSignal.value.firstName + " " + customerSignal.value.lastName}</div>
      <div class="dark:text-gray-400 text-xl">{customerSignal.value.desiredProfession}</div>
      <div class="my-4 dark:text-gray-100"> - {customerSignal.value.description}</div>
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
