import { component$ } from '@builder.io/qwik';
import type HeaderProps from '~/interfaces/HeaderProps';

export default component$<HeaderProps>((props) => {

    return (

        <div class="dark:text-sky-400 text-center text-4xl font-black p-3">{props.pageName}</div>

    );
});