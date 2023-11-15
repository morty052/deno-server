import React from "https://esm.sh/react";

import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
  Link,
} from "npm:@react-email/components@0.0.11";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

type emailProps = {
  username: string;
  link: string;
  logo: string;
  teamName: string;
  companyEmail: string;
  firstName: string;
};

const baseUrl = `https://`;

const GrantMail = (props: emailProps) => {
  const { username, link, logo, teamName, companyEmail, firstName } =
    props ?? props;
  const previewText = `Come work for us at  ${teamName} `;

  const inviteLink = "https://northwestgrants.com";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://cdn.sanity.io/files/znsrdwgn/production/fce156633d73a56b333cef2d909a8359969639d6.png`}
                width="100"
                height="50"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              You are Qualified!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We have great news! you are qualified to apply for a grant from us
              visit www.northwestgrants.com or click the button below to get
              started.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] px-4 py-2 rounded text-white text-[12px] font-semibold no-underline text-center"
                href={inviteLink}
              >
                Apply Now
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or visit
              <Link
                href={inviteLink}
                className="text-blue-600 no-underline mx-1"
              >
                {inviteLink}
              </Link>
              to start your application
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was sent by NorthWest Grants in partnership with
              UNDP. to find out more about northwest grants visit
              <Link
                href={inviteLink}
                className="text-blue-600 no-underline mx-1"
              >
                {inviteLink}
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default GrantMail;
