import { type Signal, component$, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface NavbuttonProps {
    pageName: string;
    mobileMenuHiddenSignal: Signal;
    mobileMenu?: boolean;
}

export default component$<NavbuttonProps>((props) => {

    const navbarLinkClass: string = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
    const mobileNavbarLinkClass: string = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-bold"
    //const currentNavbarLinkClass: string = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"


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
