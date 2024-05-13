import { ContactFormInputs } from "@/app/_components/Devis";
import { Column, Row, Section, Text } from "@react-email/components";

export default function DevisInformations({
  name,
  email,
  message,
  phone,
  firstName,
}: ContactFormInputs) {
  return (
    <>
      <Section>
        <Row>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Nom
            </Text>
            <Text className="mt-0 mr-4">{name}</Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              prénom
            </Text>
            <Text className="mt-0 mr-4">{firstName}</Text>
          </Column>
          {phone && (
            <Column>
              <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
                TEL:
              </Text>
              <Text className="mt-0 mr-4">{phone}</Text>
            </Column>
          )}
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              email
            </Text>
            <Text className="mt-0 mr-4">{email}</Text>
          </Column>
        </Row>
      </Section>
      <Section className="border border-solid border-gray-500 rounded-lg p-4 md:p-6 my-4">
        <p>{message}</p>
      </Section>
    </>
  );
}
