import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeAction$, Form } from '@builder.io/qwik-city';
import Header from '~/components/header/header';


export const useAddCourse = routeAction$(async (course) => {
    const courseID = await fetch(`${import.meta.env.PUBLIC_API_URL}api/v1/course`, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            name: course.name,
        })
    })
        .then((response) => {
            console.log(response.status)
        });

    return {
        success: true,
        courseID,
    };
});

export default component$(() => {

    const action = useAddCourse();

    return (
        <div>
            <Header pageName="Course control panel" />
            <div class="p-4">
                <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <Form class="space-y-6" action={action}>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">Course name</label>
                                <div class="mt-2">
                                    <input id="name" name="name" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add course</button>
                            </div>
                            {action.value?.success && <p>Course added successfully</p>}
                        </Form>


                    </div>
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to my curriculum',
    meta: [
        {
            name: 'description',
            content: 'Curriculum site description',
        },
    ],
};

