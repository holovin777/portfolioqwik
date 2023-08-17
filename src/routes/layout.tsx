import { component$, Slot, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Navbar from '~/components/navbar/navbar';




export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  const darkModeSignal = useSignal<boolean>(true);

  return (
    <div class={darkModeSignal.value ? "dark" : ""}>
      <main class="dark:bg-[url(https://images.unsplash.com/photo-1570634433336-be7629414ce1)] bg-[url(https://images.unsplash.com/photo-1502457937844-a020e34c031a)] bg-cover bg-center bg-fixed min-h-screen">
        <Navbar darkModeSignal={darkModeSignal} />
        <Slot />
      </main>
    </div>
  );

});