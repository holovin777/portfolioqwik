import { component$, useSignal } from '@builder.io/qwik';
import { routeAction$, Form, routeLoader$ } from '@builder.io/qwik-city';
import Button from '~/components/button/button';
import Card from '~/components/card/card';
import Header from '~/components/header/header';


export const useCompanies = routeLoader$(async () => {

    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}api/v1/company/all`, {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as [
        {
            id: number,
            name: string,
            location: string
        }
    ];
});

export const useAddComapnyAction = routeAction$(async (props) => {
    const request = await fetch(`${import.meta.env.PUBLIC_API_URL}api/v1/company`, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            name: props.name,
            location: props.location,
        })
    })
        .then((response) => {
            console.log(response.status)
        });

    return {
        success: true,
        request,
    };
});

export default component$(() => {

    const companiesSignal = useCompanies();
    const action = useAddComapnyAction();
    const hideModal = useSignal(true);

    return (
        <div>
            <Header pageName="Companies control panel" />

            <Form action={action} spaReset>
                <div>
                    <p class="m-2">
                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">Company name</label>
                        <input id="name" name="name" type="text" />
                    </p>

                    <p class="m-2">
                        <label for="location" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">Company location</label>
                        <input id="location" name="location" type="text" />
                    </p>
                    <Button onClick$={() => hideModal.value = false} title="Add course" type="submit" />
                </div>
            </Form>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {
                    companiesSignal.value.map((company) =>
                        <Card key={company.id} title={company.name} subtitle={company.location} />
                    )
                }
            </div>

            <div class="m-4">

                {action.value?.success &&
                    !hideModal.value &&
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">
                                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Company has been added</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button onClick$={() => hideModal.value = true} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );

});