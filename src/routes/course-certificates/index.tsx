import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Card from '~/components/card/card';
import Header from '~/components/header/header';
import type QualificationProps from '~/interfaces/QualificationProps';



export const useQualifications = routeLoader$(async () => {
    const response = await fetch(
        `${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${import.meta.env.PUBLIC_CUSTOMER_ID}/qualification/all`,
        {
            headers: { Accept: 'application/json' },
        }
    );
    return (await response.json()) as QualificationProps[];
});

export default component$(() => {
    const qualificationsSignal = useQualifications();
    return (

        <div>
            <Header pageName="Course certificates" />

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {
                    qualificationsSignal.value.map((qualification) =>
                        (qualification.educationalInstitution.studyPlace === "COURSE") &&
                        <Card
                            key={qualification.id}
                            title={qualification.course.name}
                            subtitle={qualification.educationalInstitution.name}
                            finishDate={qualification.finishedStudying}
                        />
                    )
                }
            </div>
        </div>

    );
});