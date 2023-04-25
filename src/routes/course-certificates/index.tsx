import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Card from '~/components/card/card';
import Header from '~/components/header/header';



export const useStudying = routeLoader$(async () => {
    const response = await fetch('http://localhost:8080/api/v1/customer/4d936c7c-05ea-45f2-a91f-08518491c986/qualification/all', {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as [{
        id: number,
        educationalInstitution: {
            name: string,
            studyPlace: string,
        },
        course: {name: string},
        finishedStudying?: string,
    }];
});

export default component$(() => {
    const customerStudying = useStudying();
    return (

        <div>
            <Header pageName="Course certificates" />

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {
                    customerStudying.value.map((ad) =>
                            (ad.educationalInstitution.studyPlace === "COURSE") &&
                            <Card
                                key={ad.id}
                                title={ad.course.name}
                                subtitle={ad.educationalInstitution.name}
                                finishDate={ad.finishedStudying}
                            />
                    )
                }
            </div>
        </div>
    );
});


