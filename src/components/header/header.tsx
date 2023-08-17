import { component$ } from '@builder.io/qwik';

interface HeaderProps {
    pageName: string;
}

export default component$<HeaderProps>((props) => {

    return (

        <div class="dark:text-indigo-400 text-center text-4xl font-black p-3">{props.pageName}</div>

    );
});

