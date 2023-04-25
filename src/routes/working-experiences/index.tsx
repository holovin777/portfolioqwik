import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Card from '~/components/card/card';
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
                        <Card key={we.id} title={we.positionAtWork.name} subtitle={we.company.name} startDate={we.startedWork} finishDate={we.finishedWork} footer={we.company.location} />
                    )
                }
            </div>
        </div>
    );
});
