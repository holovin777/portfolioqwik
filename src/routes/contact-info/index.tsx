import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import BusinessCard from '~/components/business-card/business-card';
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
        desiredProfession: string;
    };
});

export default component$(() => {
    const customerSignal = useCustomer();
    return (
        <div>
            <Header pageName="Contact info" />
            <BusinessCard
                firstName={customerSignal.value.firstName}
                lastName={customerSignal.value.lastName}
                phoneNumber={customerSignal.value.phoneNumber}
                email={customerSignal.value.email}
                website={customerSignal.value.website}
                residence={customerSignal.value.residence}
                desiredProfession={customerSignal.value.desiredProfession}
            />
        </div>
    );
});