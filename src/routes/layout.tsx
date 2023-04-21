import { component$, Slot, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Navbar from '~/components/navbar/navbar';


export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  const darkModeSignal = useSignal<boolean>(true)



  return (
    <div class={darkModeSignal.value ? "dark" : ""}>
      <main class="bg-white dark:bg-black dark:text-white">
        <Navbar darkModeSignal={darkModeSignal} />
        <Slot />
      </main>
    </div>
  );

});
