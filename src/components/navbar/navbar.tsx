import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    const currentPageSignal = useSignal<string>("home")
    const mobileNavbarLinkBackground: string = "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
    const currentMobileNavbarLinkBackground: string = "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
    const navbarLinkBackground: string = "text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    const currentNavbarLinkBackground: string = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
    const mobileMenuHidden = useSignal<boolean>(true)
    return (

        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick$={() => mobileMenuHidden.value = !mobileMenuHidden.value}
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
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <p class="text-sky-400">Curriculum</p>
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <button onClick$={() => currentPageSignal.value = "home"}>
                                    <Link
                                        href="/"
                                        class={
                                            currentPageSignal.value === "home" ?
                                                currentNavbarLinkBackground :
                                                navbarLinkBackground
                                        }
                                        onClick$={() => currentPageSignal.value = "home"}
                                    >
                                        Home
                                    </Link>
                                </button>
                                <button onClick$={() => currentPageSignal.value = "working-experiences"}>
                                    <Link
                                        href="/working-experiences"
                                        class={
                                            currentPageSignal.value === "working-experiences" ?
                                                currentNavbarLinkBackground :
                                                navbarLinkBackground
                                        }
                                    >
                                        Working experiences
                                    </Link>
                                </button>
                                <button onClick$={() => currentPageSignal.value = "academic-degrees"}>
                                    <Link
                                        href="/academic-degrees"
                                        class={
                                            currentPageSignal.value === "academic-degrees" ?
                                                currentNavbarLinkBackground :
                                                navbarLinkBackground
                                        }
                                    >
                                        Academic degrees
                                    </Link>
                                </button>
                                <button onClick$={() => currentPageSignal.value = "course-certificates"}>
                                    <Link
                                        href="/course-certificates"
                                        class={
                                            currentPageSignal.value === "course-certificates" ?
                                                currentNavbarLinkBackground :
                                                navbarLinkBackground
                                        }
                                    >
                                        Course certificates
                                    </Link>
                                </button>
                                <button onClick$={() => currentPageSignal.value = "contact-info"}>
                                    <Link
                                        href="/contact-info"
                                        class={
                                            currentPageSignal.value === "contact-info" ?
                                                currentNavbarLinkBackground :
                                                navbarLinkBackground
                                        }
                                    >
                                        Contact info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class={mobileMenuHidden.value === true ? "hidden" : ""} id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <button onClick$={() => currentPageSignal.value = "home"}>
                        <Link
                            href="/"
                            class={
                                currentPageSignal.value === "home" ?
                                    currentMobileNavbarLinkBackground :
                                    mobileNavbarLinkBackground
                            }
                            onClick$={() => currentPageSignal.value = "home"}
                        >
                            Home
                        </Link>
                    </button>
                    <button onClick$={() => currentPageSignal.value = "working-experiences"}>
                        <Link
                            href="/working-experiences"
                            class={
                                currentPageSignal.value === "working-experiences" ?
                                    currentMobileNavbarLinkBackground :
                                    mobileNavbarLinkBackground
                            }
                        >
                            Working experiences
                        </Link>
                    </button>
                    <button onClick$={() => currentPageSignal.value = "academic-degrees"}>
                        <Link
                            href="/academic-degrees"
                            class={
                                currentPageSignal.value === "academic-degrees" ?
                                    currentMobileNavbarLinkBackground :
                                    mobileNavbarLinkBackground
                            }
                        >
                            Academic degrees
                        </Link>
                    </button>
                    <button onClick$={() => currentPageSignal.value = "course-certificates"}>
                        <Link
                            href="/course-certificates"
                            class={
                                currentPageSignal.value === "course-certificates" ?
                                    currentMobileNavbarLinkBackground :
                                    mobileNavbarLinkBackground
                            }
                        >
                            Course certificates
                        </Link>
                    </button>
                    <button onClick$={() => currentPageSignal.value = "contact-info"}>
                        <Link
                            href="/contact-info"
                            class={
                                currentPageSignal.value === "contact-info" ?
                                    currentMobileNavbarLinkBackground :
                                    mobileNavbarLinkBackground
                            }
                        >
                            Contact info
                        </Link>
                    </button>
                </div>
            </div>
        </nav>

    );
});
