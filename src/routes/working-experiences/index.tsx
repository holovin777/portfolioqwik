import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Card from '~/components/card/card';
import Header from '~/components/header/header';



export const useWorkingExperiences = routeLoader$(async () => {
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${import.meta.env.PUBLIC_CUSTOMER_ID}/working-experience/all`, {
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
                        <Card key={we.id} title={we.positionAtWork.name} subtitle={we.company.name} startedWork={we.startedWork} finishedWork={we.finishedWork} footer={we.company.location} />
                    )
                }
            </div>
        </div>
    );
});
