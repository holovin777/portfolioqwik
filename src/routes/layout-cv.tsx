import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';




export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {


  useStylesScoped$(`
    :global(body) {
    background-color: #ffffff;
    background-image: url("");
    }
  `);


  return (
    <div>
      <main>
        <Slot />
      </main>
    </div>
  );

});
