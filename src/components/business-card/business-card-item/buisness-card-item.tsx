import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type BuisnessCardItemProps from '~/interfaces/BuisnessCardItemProps';

export default component$<BuisnessCardItemProps>((props) => {
    return (

        <div>

            <div class="flex items-start rounded-xl bg-indigo-300 dark:bg-indigo-950 dark:text-white p-4 shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                    {
                        !(props.icon === undefined) &&
                        <img src={props.icon} height={24} width={24} />
                    }
                </div>

                <div class="ml-4">
                    <div class="text-sm font-semibold">
                        {
                            props.phoneNumber === undefined ?
                                (
                                    props.link === undefined ?
                                        (
                                            props.email === undefined ?
                                                props.message :
                                                <a href={"mailto:" + props.email}>{props.email}</a>
                                        ) :
                                        <Link href={props.link}>{props.message}</Link>
                                )
                                :
                                (
                                    <a href={"tel:" + props.phoneNumber}>{props.phoneNumber}</a>
                                )
                        }
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                        {props.message}
                    </p>
                </div>
            </div>

        </div>

    );
})