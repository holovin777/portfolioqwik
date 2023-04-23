import { component$ } from '@builder.io/qwik';

interface HeaderProps {
    pageName: string;
}

export default component$<HeaderProps>((props) => {

    return (

        <div class="text-white text-center text-4xl font-black p-3">{props.pageName}</div>

    );
});

