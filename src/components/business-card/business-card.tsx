import { component$ } from '@builder.io/qwik';
import BusinessCardItem from './business-card-item/buisness-card-item';

interface CustomerProps {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    website: string;
    residence: string;
}

export default component$<CustomerProps>((props) => {

    const customerName: string = props.firstName + " " + props.lastName;

    return (

        <div class="flex flex-col m-4 p-4 rounded-xl bg-sky-100 dark:bg-indigo-950">

            <BusinessCardItem
                textXl={true}
                message={customerName}
            />

            <BusinessCardItem
                icon="/icons/phone.svg"
                message={props.phoneNumber}
            />

            <BusinessCardItem
                icon="/icons/email.svg"
                message={props.email}
            />

            <BusinessCardItem
                icon="/icons/website.svg"
                message={props.website}
            />

            <BusinessCardItem
                icon="/icons/location.svg"
                message={props.residence}
            />

        </div>

    );

})