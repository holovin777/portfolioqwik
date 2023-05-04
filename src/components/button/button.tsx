import { type PropFunction, component$ } from '@builder.io/qwik';

interface ButtonProps {
    title: string;
    type?: "button" | "submit" | "reset";
    color?: string;
    onClick$?: PropFunction<() => boolean>;
}

export default component$<ButtonProps>((props) => {

    return (

        <button onClick$={props.onClick$} type={props.type === undefined ? "button" : props.type} class="m-2 p-2 bg-blue-600 rounded-xl">{props.title}</button>

    );
});
