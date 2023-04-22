import { component$ } from '@builder.io/qwik';

interface BuisnessCardItemProps {
    message: string;
    icon?: string;
    textXl?: boolean;
    link?: string;
}

export default component$<BuisnessCardItemProps>((props) => {
    return (

        <div class="flex flex-row m-2">
            {
                !(props.icon === undefined) &&
                <img src={props.icon} height={24} width={24} />
            }
            <div class={
                props.textXl ?
                    "text-3xl font-bold m-2" :
                    "text-base m-2"
            }>
                {props.message}
            </div>
        </div>

    );
})
