import Welcome from "./emails/Welcome.tsx";
import { Resend } from "https://esm.sh/resend";

const resend = new Resend("re_hBwZyUvG_44z8Ne6XHHB859sdsfMckREQ");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type emailTemplateNames = "EMPLOYMENT" | "NOTION";

const determineTemplate = (template: emailTemplateNames) => {
  let Template;
  switch (template) {
    case "EMPLOYMENT":
      Template = Welcome;
      break;
    case "NOTION":
      Template = Welcome;
      break;
    default:
      Template = Welcome;
      break;
  }

  return Template;
};

// async function send(to: string, props: any) {
//   const { TemplateName, subject, from } = props;
//   const EmailTemplate = determineTemplate(TemplateName);
//   try {
//     const data = await resend.emails.send({
//       from: `${from} <onboarding@pguild.xyz>`,
//       to: [`${to}`],
//       subject: `${subject}`,
//       react: EmailTemplate(props),
//     });

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

const props = {
  name: "test",
  email: "test",
  person: {
    firstName: "test",
  },
  subject: "Deno sending email",
  from: "deno",
  link: "test",
  TemplateName: "EMPLOYMENT",
  logo: "https://dash.deno.com/assets/logo.svg",
  username: "Adam",
  teamName: "Deno squad",
  companyEmail: "anomaly619052@gmail.com",
};

// async function send() {
//   try {
//     const data = await resend.emails.send({
//       from: `Deno <onboarding@pguild.xyz>`,
//       to: [`anomaly619052@gmail.com`],
//       subject: `hello`,
//       react: Welcome(props),
//     });

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

async function send(to, props) {
  const { TemplateName, subject, from } = props;
  const EmailTemplate = determineTemplate(TemplateName);
  try {
    const data = await resend.emails.send({
      from: `${from} <onboarding@pguild.xyz>`,
      to: [`${to}`],
      subject: `${subject}`,
      react: EmailTemplate(props),
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default send;
