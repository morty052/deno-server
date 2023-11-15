import GrantMail from "./emails/GrantMail.tsx";
import resend from "./lib/resend.ts";

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
      Template = GrantMail;
      break;
    case "NOTION":
      Template = GrantMail;
      break;
    default:
      Template = GrantMail;
      break;
  }

  return Template;
};

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
