import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header/header';



export const useCustomer = routeLoader$(async () => {
    const response = await fetch('http://localhost:8080/api/v1/customer/4d936c7c-05ea-45f2-a91f-08518491c986', {
        headers: { Accept: 'application/json' },
    });
    return (await response.json()) as {
        id: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
        website: string;
        residence: string;
    };
});

export default component$(() => {
    const customerSignal = useCustomer();
    return (
        <div>
            <Header pageName="Contact info" />
            <div>{customerSignal.value.firstName} {customerSignal.value.lastName}</div>
            <div>{customerSignal.value.phoneNumber}</div>
            <div>{customerSignal.value.email}</div>
            <div>{customerSignal.value.website}</div>
            <div>{customerSignal.value.residence}</div>
        </div>
    );
});