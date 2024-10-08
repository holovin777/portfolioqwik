import { component$ } from "@builder.io/qwik";
import BusinessCardItem from "./business-card-item/buisness-card-item";
import type BuisnessCardProps from "~/interfaces/BuisnessCardProps";

export default component$<BuisnessCardProps>((props) => {
  return (
    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-4">
      <BusinessCardItem
        icon="/icons/customer.svg"
        phoneNumber={props.firstName + " " + props.lastName}
        message="Name"
      />

      <BusinessCardItem
        icon="/icons/phone.svg"
        phoneNumber={props.phoneNumber}
        message="Phone"
      />

      <BusinessCardItem
        icon="/icons/email.svg"
        email={props.email}
        message="Email"
      />

      <BusinessCardItem
        icon="/icons/website.svg"
        message={props.website.slice(8)}
        link={props.website}
      />

      <BusinessCardItem
        icon="/icons/website.svg"
        message={props.blog.slice(8)}
        link={props.blog}
      />

      <BusinessCardItem icon="/icons/location.svg" message={props.residence} />
    </div>
  );
});
