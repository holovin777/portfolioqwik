import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import BusinessCard from '~/components/business-card/business-card';
import Header from '~/components/header/header';
import type CustomerProps from '~/interfaces/CustomerProps';

export const useCustomer = routeLoader$(async () => {
    const response = await fetch(
        `${import.meta.env.PUBLIC_API_URL}/api/v1/customer/${import.meta.env.PUBLIC_CUSTOMER_ID}`,
        {
            headers: { Accept: 'application/json' },
        }
        );
    return (await response.json()) as CustomerProps
})

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