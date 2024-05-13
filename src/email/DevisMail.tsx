import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import DevisInformations from "./Components/DevisInformations";
import { ContactFormInputs } from "@/app/_components/Devis";

DevisMail.PreviewProps = {
  firstName: "thibaut",
  name: "hell",
  email: "thiabuat@hotmail.com",
  message: "TEST MESSAGES",
  phone: "0494857948",
  street: "rue blablabla",
  postcode: "5166",
} satisfies ContactFormInputs;

export default function DevisMail({
  name,
  email,
  message,
  firstName,
  phone,
  street,
  postcode,
}: ContactFormInputs) {
  return (
    <Html>
      <Preview>Devis</Preview>
      <Tailwind>
        <Head></Head>
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Demande de Devis</Heading>
            <DevisInformations
              firstName={firstName}
              name={name}
              email={email}
              message={message}
              phone={phone && phone}
              street={street}
              postcode={postcode}
            ></DevisInformations>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
