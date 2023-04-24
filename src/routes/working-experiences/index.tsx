import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header/header';



export const useWorkingExperiences = routeLoader$(async () => {
    const response = await fetch('http://localhost:8080/api/v1/customer/4d936c7c-05ea-45f2-a91f-08518491c986/working-experience/all', {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as [{
        id: number,
        company: {
            name: string,
            location: string,
        },
        positionAtWork: { name: string },
        startedWork: string,
        finishedWork?: string,
    }];
});

export default component$(() => {
    const customerWorkingExperiences = useWorkingExperiences();
    return (

        <div>
            <Header pageName="Working experiences" />

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {
                    customerWorkingExperiences.value.map((we) =>
                        <div key={we.id} class="bg-blue-300 bg-opacity-50 text-indigo-900 dark:bg-blue-950 dark:bg-opacity-50 rounded-lg m-6 p-2 dark:text-indigo-300">
                            {
                                !(we.finishedWork === null) &&
                                <div class="text-xs text-center text-yellow-300 m-1">
                                    Finished work {we.finishedWork}
                                </div>
                            }
                            <div class="">
                                <div class="text-xl font-bold my-1 mx-3">
                                    {we.positionAtWork.name}
                                </div>
                                <div class="text-gray-700 dark:text-gray-400 my-1 mx-6">
                                    {we.company.name}
                                </div>
                                <div class="text-xs text-right text-gray-600 dark:text-gray-500 my-2">
                                    {we.company.location}
                                </div>
                            </div>
                            <div class="text-xs text-center text-yellow-300 my-2">
                                Started work {we.startedWork}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
});
