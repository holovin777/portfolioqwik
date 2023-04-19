import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello, world!</h1>
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
