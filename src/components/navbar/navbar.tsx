import { $, type Signal, component$, useSignal } from '@builder.io/qwik';
import Navbutton from './navbutton/navbutton';
interface NavbarProps {
    darkModeSignal: Signal
}

export default component$<NavbarProps>((props) => {




    const mobileMenuHiddenSignal = useSignal<boolean>(true)


    return (

        <nav class="bg-gray-300 text-black dark:bg-gray-800 dark:text-white">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center xl:hidden">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick$={() => mobileMenuHiddenSignal.value = !mobileMenuHiddenSignal.value}
                        >
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <p class="text-sky-400">Curriculum</p>
                        </div>
                        <div class="hidden xl:ml-6 xl:block">
                            <div class="flex space-x-4">

                                <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} pageName='Home' />
                                <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} pageName='Working experiences' />
                                <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} pageName='Academic degrees' />
                                <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} pageName='Course certificates' />
                                <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} pageName='Contact info' />

                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="relative ml-3 text-xs">
                                <button onClick$={$(() => props.darkModeSignal.value = !props.darkModeSignal.value)}>DrakMode</button>

                        </div>
                    </div>
                </div>
            </div>


            {!mobileMenuHiddenSignal.value &&
                (
                    <div class="hidden-sm" id="mobile-menu">
                        <div class="flex flex-col space-y-4 px-2 pb-10 pt-2">

                            <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} mobileMenu={true} pageName='Home' />
                            <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} mobileMenu={true} pageName='Working experiences' />
                            <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} mobileMenu={true} pageName='Academic degrees' />
                            <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} mobileMenu={true} pageName='Course certificates' />
                            <Navbutton mobileMenuHiddenSignal={mobileMenuHiddenSignal} mobileMenu={true} pageName='Contact info' />

                        </div>
                    </div>
                )
            }

        </nav >

    );
})