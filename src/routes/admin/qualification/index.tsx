import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, routeAction$, Form } from '@builder.io/qwik-city';
import SelectMenu from '~/components/form/select-menu/select-menu';
import Header from '~/components/header/header';

interface CourseProps {
    id: number,
    name: string
}

interface EducationalInstitutionProps {
    id: number,
    name: string
}

export const useCourses = routeLoader$(async () => {
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}api/v1/course/all`, {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as [CourseProps];
});


export const useEducationalInstitutions = routeLoader$(async () => {
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}api/v1/educational-institution/all`, {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as [EducationalInstitutionProps];
});

export const useAddQualification = routeAction$(async (qualification) => {
    const qualificationID = await fetch(`${import.meta.env.PUBLIC_API_URL}api/v1/qualification`, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            customer: {
                id: import.meta.env.PUBLIC_CUSTOMER_ID
            },
            educationalInstitution: {
                id: qualification.educationalInstitution.id
            },
            course: { id: qualification.course.id },
            finishedStudying: qualification.finishedStudying

        })
    })
        .then((response) => {
            console.log(response.status)
        });

    return {
        success: true,
        qualificationID,
    };
});

export default component$(() => {

    const action = useAddQualification();

    const coursesSignal = useCourses();
    const courseChoosedSignal = useSignal<CourseProps>(coursesSignal.value[0]);
    const courseListCollapseSignal = useSignal<boolean>(true);
    const collapseCourseList = $(() => { courseListCollapseSignal.value = !courseListCollapseSignal.value });

    const educationalInstitutionsSignal = useEducationalInstitutions();
    const educationalInstitutionChoosedSignal = useSignal<EducationalInstitutionProps>(educationalInstitutionsSignal.value[0]);
    const educationalInstitutionListCollapseSignal = useSignal<boolean>(true);
    const collapseEducationalInstitutionList = $(() => { educationalInstitutionListCollapseSignal.value = !educationalInstitutionListCollapseSignal.value });

    return (
        <div>
            <Header pageName="Qualification control panel" />

            <Form class="space-y-6" action={action}>

                <SelectMenu
                    collapseItemList={collapseCourseList}
                    itemChoosedSignal={courseChoosedSignal}
                    itemListCollapseSignal={courseListCollapseSignal}
                    itemsSignal={coursesSignal}
                />
                <SelectMenu
                    collapseItemList={collapseEducationalInstitutionList}
                    itemChoosedSignal={educationalInstitutionChoosedSignal}
                    itemListCollapseSignal={educationalInstitutionListCollapseSignal}
                    itemsSignal={educationalInstitutionsSignal}
                />


                <label for="finish" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">Finished date</label>
                <div class="mt-2">
                    <input type="date" id="finish" name="trip-finish" value="2023-01-01" min="1900-01-01" max="2024-01-01"></input>
                </div>
            </Form>


        </div>
    );
});

export const head: DocumentHead = {
    title: 'Qualification control panel',
    meta: [
        {
            name: 'description',
            content: 'Curriculum site description',
        },
    ],
};