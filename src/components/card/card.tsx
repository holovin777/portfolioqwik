import { component$ } from '@builder.io/qwik';

interface CardProps {
    startDate?: string;
    finishDate?: string;
    title: string;
    subtitle: string;
    footer?: string;
    items?: string[]
}

export default component$<CardProps>((props) => {

    return (

        <div class="bg-blue-300 bg-opacity-50 text-indigo-900 dark:bg-blue-950 dark:bg-opacity-50 rounded-lg m-6 p-2 dark:text-indigo-300">
            <div class="">
                <div class="text-xl font-bold my-1 mx-3">
                    {props.title}
                </div>
                <div class="text-gray-700 dark:text-gray-400 my-1 mx-6">
                    {props.subtitle}
                </div>
                {
                    !(props.items === undefined) &&
                    props.items.map((p) =>
                        <div key={p} class="text-sm">
                            <p>{p}</p>
                        </div>
                    )
                }
                {
                    !(props.footer === undefined) &&
                    <div class="text-xs text-right text-gray-600 dark:text-gray-500 my-2">
                        {props.footer}
                    </div>
                }
            </div>
            {
                !(props.startDate === undefined) &&
                <div class="text-xs text-center text-yellow-300 my-2">
                    Started studying {props.startDate}
                </div>
            }
            {
                !(props.finishDate === null) &&
                <div class="text-xs text-center text-yellow-300 m-1">
                    Finished studying {props.finishDate}
                </div>
            }
        </div>

    );
});