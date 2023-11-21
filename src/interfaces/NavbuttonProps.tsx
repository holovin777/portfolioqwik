import { type Signal } from "@builder.io/qwik";

export default interface NavbuttonProps {
  pageName: string;
  mobileMenuHiddenSignal: Signal;
  mobileMenu?: boolean;
}
