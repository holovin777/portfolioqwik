import { component$, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type NavbuttonProps from '~/interfaces/NavbuttonProps';

export default component$<NavbuttonProps>((props) => {

    const navbarLinkClass: string = "text-black dark:text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
    const mobileNavbarLinkClass: string = "text-black dark:text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-bold"

    return (

        <button onClick$={$(() => props.mobileMenuHiddenSignal.value = true)}>
            <Link
                href={"/" + (props.pageName === "Home" ?
                    "" :
                    props.pageName.toLowerCase().replace(/ /g, "-")
                )}
                class={
                    props.mobileMenu ?
                    mobileNavbarLinkClass :
                    navbarLinkClass
                }
            >
                {props.pageName}
            </Link>
        </button>

    );
});
