import ContactInfo from "../../components/contact/ContactInfo";
import ContactMap from "../../components/contact/ContactMap";
import ContactForm from "../../components/contact/ContactForm";
import VolunteerPlaceholder from "../../components/contact/VolunteerPlaceholder";

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <VolunteerPlaceholder />
    </>
  );
}
